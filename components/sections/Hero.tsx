'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Build What Deserves To Exist',
    'Connect With Developers Worldwide',
    'Innovate Together, Grow Together'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeWriter = () => {
      const currentFullText = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }

      let timer = setTimeout(() => {
        if (!isDeleting && currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, isDeleting ? deleteSpeed : typeSpeed);

      return () => clearTimeout(timer);
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Particle Background */}
      <div className="absolute inset-0">
        {isMounted && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div
              className={`rounded-full opacity-20 ${
                i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
              }`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-500/5 rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8 animate-fade-in">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Empowering Developers Worldwide</span>
        </div>

        {/* Main Heading with Typewriter */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
          Build. Connect.
          <span className="text-blue-600 block">Innovate.</span>
        </h1>

        {/* Typewriter Tagline */}
        <div className="h-16 md:h-20 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl text-gray-600 font-medium">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Join the revolution in software development. Connect with developers worldwide, 
          collaborate on groundbreaking projects, and build the future of technology together.
        </p>

        {/* Floating CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="group relative">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 relative z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg"
            >
              Get Started Free
            </Button>
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
          </div>
          
          <div className="group relative">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 relative z-10 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl shadow-lg"
            >
              Watch Demo
            </Button>
            <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
          </div>
        </div>

        {/* Stats Preview with Parallax */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-blue-600">50K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-green-600">1K+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
} 