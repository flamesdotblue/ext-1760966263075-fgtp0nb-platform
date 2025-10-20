import React from 'react';
import { Shield, Sparkles, Clock, Wallet } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'EMV + tokenization with on-device encryption keeps every transaction safe.',
  },
  {
    icon: Wallet,
    title: 'Tap to pay',
    desc: 'Works with major wallets and terminals worldwide for seamless checkout.',
  },
  {
    icon: Clock,
    title: 'Real-time insights',
    desc: 'Instant notifications, spend limits, and analytics from the app.',
  },
  {
    icon: Sparkles,
    title: 'Lifetime finish',
    desc: 'Scratch-resistant materials engineered to look new for years.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-neutral-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-50px,rgba(59,130,246,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Why choose NovaPay</h2>
          <p className="mt-2 text-white/60">Performance, security, and design come together for a next‑gen payment experience.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
              <div className="mb-4 inline-flex rounded-lg bg-white/5 p-3 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-medium text-white/90">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
