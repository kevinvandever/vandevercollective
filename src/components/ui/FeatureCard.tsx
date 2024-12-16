import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ title, description, link }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <h3 className="text-2xl font-bold text-[#19334A] mb-4">{title}</h3>
      <p className="text-[#568097] mb-4 leading-relaxed">
        {description}
      </p>
      <Link to={link} className="text-[#C84824] hover:underline inline-flex items-center">
        Learn More <ArrowRight className="ml-1" size={16} />
      </Link>
    </div>
  );
}