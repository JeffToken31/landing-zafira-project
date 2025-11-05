'use client';
import HeroSection from './components/sections/hero';

export default function HeroTestLayout() {
  return (
    <html lang="fr">
      <body className="bg-white">
        {/* On teste uniquement le Hero */}
        <HeroSection />
      </body>
    </html>
  );
}
