import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export default function FeatureCard({ title, description, link, icon: Icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:-translate-y-1">
      {Icon && (
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background text-accent">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-teal mb-5 leading-relaxed">{description}</p>
      <Link to={link} className="text-accent hover:underline inline-flex items-center font-medium transition-colors duration-200">
        Learn More <ArrowRight className="ml-1" size={16} />
      </Link>
    </div>
  );
}
