'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'backdrop-blur-header shadow-lg' : 'bg-white/95 backdrop-blur-sm'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors">
              CodeQuity
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/community" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Community
            </Link>
            <Link 
              href="/partners" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Partners
            </Link>
            <Link 
              href="/contact" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/connect" 
              className="text-neutral-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              Connect
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-dark hover:text-primary focus:outline-none focus:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/community" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              Community
            </Link>
            <Link 
              href="/partners" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              Partners
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              href="/connect" 
              className="block px-3 py-2 text-base font-medium text-neutral-dark hover:text-primary hover:bg-neutral-light rounded-md transition-all"
              onClick={closeMenu}
            >
              Connect
            </Link>
            <div className="pt-2">
              <Button variant="default" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 