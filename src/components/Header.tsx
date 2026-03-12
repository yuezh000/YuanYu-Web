'use client';

import { useState } from 'react';

const navItems = [
  { label: '关于我们', href: '#about' },
  { label: '技术优势', href: '#tech' },
  { label: '产品介绍', href: '#product' },
  { label: '数据能力', href: '#data' },
  { label: '核心功能', href: '#features' },
  { label: '安全保障', href: '#security' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            源
          </div>
          <span className="text-lg font-bold text-white">源语智能</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.qiewenpaper.com?utm_source=yuanyu-web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all"
          >
            体验切问学术
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.qiewenpaper.com?utm_source=yuanyu-web"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary font-medium"
          >
            体验切问学术
          </a>
        </nav>
      )}
    </header>
  );
}
