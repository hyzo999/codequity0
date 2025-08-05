'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  distance?: number;
  duration?: number;
  once?: boolean;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

export default function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  distance = 30,
  duration = 0.5,
  once = true,
  viewport = { once: true, margin: '-50px', amount: 0.1 }
}: StaggeredAnimationProps) {
  
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const getItemVariants = (): Variants => {
    const baseVariants: Variants = {
      hidden: { 
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    };

    switch (direction) {
      case 'up':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'down':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'left':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'right':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'scale':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 }
        };
      case 'fade':
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={getItemVariants()}
            className="w-full"
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={getItemVariants()}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}