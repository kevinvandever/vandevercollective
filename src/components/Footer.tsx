import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#19334A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vandever Collective</h3>
            <p className="text-[#F1F7FB]">
              Empowering businesses through innovative AI solutions and strategic partnerships.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#C84824]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C84824]">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-[#C84824]">Solutions</Link></li>
              <li><Link to="/training" className="hover:text-[#C84824]">Training</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-[#C84824] transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#C84824] transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#C84824] transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:info@vandevercollective.com" 
                className="hover:text-[#C84824] transition-colors"
                aria-label="Email us"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#568097] mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>&copy; {new Date().getFullYear()} Vandever Collective. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-[#F1F7FB] hover:text-[#C84824] text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-[#F1F7FB] hover:text-[#C84824] text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}