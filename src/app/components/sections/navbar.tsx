'use client';

import {HeartHandshake} from 'lucide-react';
import MobileMenu from '../MobilMenu';
import ThemeToggle from '../ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
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

        {[
          {label: 'Home', href: '#hero'},
          {label: 'Features', href: '#features'},
          {label: 'About', href: '#about'},
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="
              text-text relative font-medium transition-all duration-500
              hover:bg-gradient-to-r hover:from-primary hover:via-cyan-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent
            "
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex items-center dark:bg-black gap-2">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </nav>
  );
}
