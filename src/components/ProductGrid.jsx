import React from 'react';

const products = [
  {
    id: 1,
    title: 'Nova Metal — Cobalt',
    subtitle: 'Brushed metal finish with premium weight and NFC tap-to-pay.',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop',
    variant: 'Cobalt Blue',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'Nova Metal — Ember',
    subtitle: 'Anodized alloy with laser-etched details and edge-to-edge chip.',
    price: 219,
    image:
      'https://images.unsplash.com/photo-1556975603-548e36a3b0d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwTWV0YWwlMjAlRTIlODAlOTQlMjBFbWJlcnxlbnwwfDB8fHwxNzYwOTY2MzY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    variant: 'Ember Orange',
    color: '#f97316',
  },
  {
    id: 3,
    title: 'Nova Eco — Ocean',
    subtitle: 'Recycled composite with soft-touch finish. Planet-friendly.',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1549778399-f94fd24d4697?q=80&w=1600&auto=format&fit=crop',
    variant: 'Ocean Teal',
    color: '#14b8a6',
  },
  {
    id: 4,
    title: 'Nova Carbon — Stealth',
    subtitle: 'Forged carbon weave for maximum durability and minimal weight.',
    price: 279,
    image:
      'https://images.unsplash.com/photo-1628515399760-af76f7d2e6af?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwQ2FyYm9uJTIwJUUyJTgwJTk0JTIwU3RlYWx0aHxlbnwwfDB8fHwxNzYwOTY2MzY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    variant: 'Stealth Black',
    color: '#111827',
  },
];

export default function ProductGrid({ CardComponent }) {
  return (
    <div id="products" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <CardComponent key={p.id} product={p} />
      ))}
    </div>
  );
}
