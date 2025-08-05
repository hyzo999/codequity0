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
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-gray-200' : 'bg-white/90 backdrop-blur-sm border-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors no-underline">
              CodeQuity
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              About
            </Link>
            <Link 
              href="/community" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              Community
            </Link>
            <Link 
              href="/partners" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              Partners
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              Contact
            </Link>
            <Link 
              href="/connect" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors no-underline hover:bg-gray-50 rounded-lg"
            >
              Connect
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="shadow-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
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
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/community" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={closeMenu}
            >
              Community
            </Link>
            <Link 
              href="/partners" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={closeMenu}
            >
              Partners
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              href="/connect" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
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