import React from 'react';
import { Zap, GraduationCap, Package } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    title: "Workflow Automation",
    description: "We design and implement custom AI projects tailored to your needs, seamlessly integrating with platforms like Make and Zapier to optimize and automate your workflows for maximum efficiency.",
    link: "/solutions",
    icon: Zap
  },
  {
    title: "Technical Training and Mentorship",
    description: "Our expert team provides comprehensive training on AI concepts and applications, making complex technology accessible to all audiences while developing and coaching high-performing technical teams.",
    link: "/training",
    icon: GraduationCap
  },
  {
    title: "Custom AI Tools and Marketplace",
    description: "Discover our growing collection of AI-powered tools and applications designed for both business and personal use. From productivity enhancers to creative tools, our marketplace offers subscription-based solutions for every need.",
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
