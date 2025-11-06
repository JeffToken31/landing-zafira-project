'use client';

import {useEffect, useState} from 'react';
import {Moon, Sun} from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // On récupère le thème initial directement dans le useState
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as
        | 'light'
        | 'dark'
        | null;
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return storedTheme ?? (prefersDark ? 'dark' : 'light');
    }
    return 'light';
  });

  // On applique le thème au document seulement après le rendu
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors bg-primary/10 hover:bg-primary/20 text-primary dark:text-yellow-400"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
