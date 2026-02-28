import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy to-teal text-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Let's Make AI Work for You
          </h1>
          <p className="text-lg sm:text-xl text-background/90 leading-relaxed max-w-2xl">
            Certified MindStudio experts helping you build, automate, and scale
            with AI. From custom tools to hands-on training, we make AI
            practical.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
