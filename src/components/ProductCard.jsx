import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const containerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [bgPos, setBgPos] = useState('center');

  const onMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBgPos(`${x}% ${y}%`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm"
    >
      <div
        ref={containerRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={onMove}
        className="relative aspect-[4/3] w-full overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-300 group-hover:scale-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: hovering ? `url(${product.image})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: hovering ? '200% 200%' : '0 0',
            backgroundPosition: bgPos,
            transition: 'background-size 200ms ease',
            mixBlendMode: 'screen',
            opacity: hovering ? 0.35 : 0,
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-medium text-white/90">{product.title}</h3>
          <span className="text-sm font-semibold text-white">${product.price}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-white/60">{product.subtitle}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="inline-flex h-2 w-2 rounded-full" style={{ background: product.color }} />
            <span>{product.variant}</span>
          </div>
          <button className="rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-neutral-900 transition hover:bg-white">
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
