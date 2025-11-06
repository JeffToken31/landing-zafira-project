'use client';
import HeroSection from './components/sections/hero';
import AboutSection from './components/sections/about';
import FeaturesSection from './components/sections/features';
export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
}
