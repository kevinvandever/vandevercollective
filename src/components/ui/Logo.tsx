import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12", showText = true }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-4">
      <img 
        src="/assets/images/logo.png" 
        alt="Vandever Collective" 
        className={className}
      />
      {showText && (
        <span className="text-2xl font-bold text-white hidden md:block">
          Vandever Collective
        </span>
      )}
    </Link>
  );
}