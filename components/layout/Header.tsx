'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/community', label: 'Community' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
    { href: '/connect', label: 'Connect' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-neutral-200/50' 
          : 'bg-white/90 backdrop-blur-sm border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-primary-hover hover:to-accent-hover transition-all duration-300 no-underline"
            >
              CodeQuity
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg no-underline group
                    ${isActive(item.href) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              variant="gradient" 
              size="sm" 
              className="shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary focus:outline-none focus:text-primary transition-colors p-2 rounded-lg hover:bg-neutral-100 relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl rounded-lg mt-2 shadow-xl border border-neutral-200/50"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link 
                      href={item.href}
                      className={`
                        block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 no-underline relative
                        ${isActive(item.href)
                          ? 'text-primary bg-primary/10 shadow-sm'
                          : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                        }
                      `}
                      onClick={closeMenu}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                          layoutId="activeMobileTab"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="w-full shadow-lg"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}