import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturesSection from '../components/ui/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}