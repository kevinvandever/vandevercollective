import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#19334A] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Experience the Power of AI</h1>
          <p className="text-xl mb-8 text-[#F1F7FB] leading-relaxed">
            In the rapidly evolving world of Generative AI, staying ahead of the curve can be difficult. 
            That's where we come in. As certified MindStudio AI developers/experts with many years of 
            consulting, mentoring, writing, and technical presentation experience, we can help you 
            navigate the complexities of this exciting field. Whether you need help building an AI 
            system or want to learn more about how AI can benefit your business, we are here to provide 
            the guidance and leadership you need. Don't hesitate—get in touch today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#C84824] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}