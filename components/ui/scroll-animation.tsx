'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  distance?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  stagger = false,
  staggerDelay = 0.1
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-50px',
    amount: threshold
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay
          })
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

  const itemVariants = stagger ? {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration * 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  } : undefined;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
}