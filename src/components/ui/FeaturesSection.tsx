import React from 'react';
import { Zap, GraduationCap, Package } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    title: "Workflow Automation",
    description: "We build custom AI projects and connect them to tools like Make and Zapier so your team spends less time on repetitive work.",
    link: "/solutions",
    icon: Zap
  },
  {
    title: "Technical Training and Mentorship",
    description: "We teach AI concepts in plain language and coach teams to build and maintain their own tools — no hand-holding required.",
    link: "/training",
    icon: GraduationCap
  },
  {
    title: "Custom AI Tools and Marketplace",
    description: "Browse our collection of AI tools and apps built for real work — content creation, productivity, and more. Use what fits, skip what doesn't.",
    link: "/solutions",
    icon: Package
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
