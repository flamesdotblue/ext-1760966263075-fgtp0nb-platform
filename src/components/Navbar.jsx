import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-blue-500" />
          <span className="font-semibold tracking-tight">NovaPay</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-white/70 hover:text-white" href="#products">Products</a>
          <a className="text-sm text-white/70 hover:text-white" href="#features">Features</a>
          <a className="text-sm text-white/70 hover:text-white" href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <Search size={18} />
          </button>
          <button aria-label="Account" className="rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <User size={18} />
          </button>
          <button aria-label="Cart" className="relative rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-medium text-white">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
