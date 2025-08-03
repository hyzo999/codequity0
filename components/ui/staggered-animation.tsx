'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  distance = 20,
  duration = 0.5
}: StaggeredAnimationProps) {
  const getItemVariants = (): Variants => {
    const baseVariants: Variants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          ease: "easeOut"
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
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={getItemVariants()}
            custom={index}
            transition={{
              delay: index * staggerDelay
            }}
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