'use client';

import {HeartHandshake} from 'lucide-react';
import MobileMenu from '../MobilMenu';
import ThemeToggle from '../ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between dark:bg-black fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <HeartHandshake className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <h1 className="font-heading text-xl text-text">Zafira</h1>
          <p className="text-primary text-xs font-medium">Solidaire</p>
        </div>
      </div>

      {/* Middle section : Dark mode + navigation links */}
      <div className="hidden md:flex items-center gap-6">
        <ThemeToggle />
        <a
          href="#hero"
          className="text-text hover:text-primary transition-colors"
        >
          Home
        </a>
        <a
          href="#features"
          className="text-text hover:text-primary transition-colors"
        >
          Features
        </a>
        <a
          href="#about"
          className="text-text hover:text-primary transition-colors"
        >
          About
        </a>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </nav>
  );
}
