import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './ui/Logo';

const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Solutions', path: '/solutions' },
  { title: 'Training', path: '/training' },
  { title: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#19334A] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-[#F1F7FB] group
                  ${location.pathname === item.path ? 'text-[#C84824]' : 'text-white'}`}
              >
                {item.title}
                <span className={`absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transition-transform duration-200 
                  ${location.pathname === item.path ? 'bg-[#C84824] scale-x-100' : 'bg-[#F1F7FB]'}
                  group-hover:scale-x-100`}>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#568097] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-[#19334A] border-t border-[#568097]/20 px-4 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors
                    ${location.pathname === item.path 
                      ? 'bg-[#568097]/20 text-[#C84824]' 
                      : 'text-white hover:bg-[#568097]/10'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}