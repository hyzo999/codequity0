'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatNumber?: boolean;
  decimals?: number;
  onComplete?: () => void;
}

const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({ 
    end, 
    duration = 2000, 
    delay = 0,
    suffix = '', 
    prefix = '',
    className = '',
    formatNumber = true,
    decimals = 0,
    onComplete,
    ...props 
  }, ref) => {
    const [count, setCount] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = easeOutQuart * end;
          
          setCount(currentCount);
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setIsAnimating(false);
            onComplete?.();
          }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }, delay);

      return () => clearTimeout(timer);
    }, [end, duration, delay, onComplete]);

    const formatValue = (value: number) => {
      if (formatNumber) {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(1) + 'M';
        } else if (value >= 1000) {
          return (value / 1000).toFixed(1) + 'K';
        }
      }
      return value.toFixed(decimals);
    };

    return (
      <span 
        ref={ref}
        className={cn(
          'inline-block transition-all duration-300',
          isAnimating && 'animate-pulse',
          className
        )}
        {...props}
      >
        {prefix}
        {formatValue(count)}
        {suffix}
      </span>
    );
  }
);

AnimatedCounter.displayName = 'AnimatedCounter';

export { AnimatedCounter }; 