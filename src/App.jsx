import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Features from './components/Features.jsx';
import ProductCard from './components/ProductCard.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90">Trending cards</h2>
          <p className="mt-2 text-sm text-white/60">Secure, stylish, and built for modern spending.</p>
          <div className="mt-8">
            <ProductGrid CardComponent={ProductCard} />
          </div>
        </section>
        <Features />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} NovaPay Commerce. All rights reserved.
      </footer>
    </div>
  );
}
