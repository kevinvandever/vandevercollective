import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vandever Collective</h3>
            <p className="text-background">
              Empowering businesses through innovative AI solutions and strategic partnerships.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-background/80 hover:text-accent transition-colors">Solutions</Link></li>
              <li><Link to="/training" className="text-background/80 hover:text-accent transition-colors">Training</Link></li>
              <li><Link to="/mindstudio-tools" className="text-background/80 hover:text-accent transition-colors">MindStudio Tools</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-background/80 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/vandever.collective/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kevinvandever/" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@vandevercollective.com"
                className="text-background/80 hover:text-accent transition-colors"
                aria-label="Email us"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-teal/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-background/70 text-sm">&copy; {new Date().getFullYear()} Vandever Collective. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
