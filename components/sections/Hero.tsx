'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = [
    'Build What Deserves To Exist',
    'Connect With Developers Worldwide',
    'Innovate Together, Grow Together',
    'Shape the Future of Technology'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Interactive Particle Background */}
      <div className="absolute inset-0">
        {isMounted && [...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 200,
              y: mousePosition.y + (Math.random() - 0.5) * 200,
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              ease: "easeOut",
              delay: Math.random() * 2
            }}
          >
            <div
              className={`rounded-full opacity-20 animate-pulse ${
                i % 4 === 0 ? 'bg-primary' : 
                i % 4 === 1 ? 'bg-secondary' : 
                i % 4 === 2 ? 'bg-accent' : 'bg-purple-500'
              }`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-accent/10 to-secondary/10 rotate-45"
          animate={{ 
            rotate: [45, 225, 405],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-white/20 text-primary px-6 py-3 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <span className="text-sm font-semibold">Empowering Developers Worldwide</span>
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
        >
          <span className="block bg-gradient-to-r from-neutral-900 via-primary to-accent bg-clip-text text-transparent">
            Build. Connect.
          </span>
          <motion.span 
            className="block bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Innovate.
          </motion.span>
        </motion.h1>

        {/* Enhanced Typewriter Effect */}
        <motion.div 
          variants={itemVariants}
          className="h-20 md:h-24 flex items-center justify-center mb-8"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl text-neutral-600 font-medium">
            <span className="inline-block min-h-[1em]">
              {currentText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary ml-1"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Join the revolution in software development. Connect with developers worldwide, 
          collaborate on groundbreaking projects, and build the future of technology together.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="gradient"
              size="xl" 
              className="text-lg px-10 py-5 shadow-2xl hover:shadow-3xl"
              rightIcon={
                <motion.svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              }
            >
              Get Started Free
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="glass" 
              size="xl" 
              className="text-lg px-10 py-5"
              leftIcon={
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Preview */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '50K+', label: 'Developers', color: 'text-primary' },
            { value: '1K+', label: 'Projects', color: 'text-secondary' },
            { value: '95%', label: 'Success Rate', color: 'text-accent' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}