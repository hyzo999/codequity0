'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    animate?: boolean;
    delay?: number;
    hover?: boolean;
    glass?: boolean;
    gradient?: boolean;
    interactive?: boolean;
  }
>(({ 
  className, 
  animate = true, 
  delay = 0, 
  hover = true,
  glass = false,
  gradient = false,
  interactive = false,
  children, 
  ...props 
}, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const cardClasses = cn(
    'rounded-xl border bg-white shadow-sm transition-all duration-300',
    hover && 'hover:shadow-lg hover:-translate-y-1',
    glass && 'bg-white/80 backdrop-blur-xl border-white/20 shadow-xl',
    gradient && 'bg-gradient-to-br from-white to-neutral-50 border-neutral-200/50',
    interactive && 'cursor-pointer hover:border-neutral-300 active:scale-[0.98] transform',
    animate && !isVisible && 'opacity-0 translate-y-8 scale-95',
    animate && isVisible && 'opacity-100 translate-y-0 scale-100',
    className
  );

  if (animate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={hover ? { 
          y: -4, 
          scale: 1.02,
          transition: { duration: 0.2 }
        } : undefined}
        whileTap={interactive ? { scale: 0.98 } : undefined}
        className={cardClasses}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={cardClasses}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    centered?: boolean;
  }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 p-6',
      centered && 'text-center items-center',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    gradient?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }
>(({ className, gradient = false, size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <h3
      ref={ref}
      className={cn(
        'font-semibold leading-none tracking-tight text-neutral-900',
        sizeClasses[size],
        gradient && 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent',
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    muted?: boolean;
  }
>(({ className, muted = true, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-sm leading-relaxed',
      muted ? 'text-neutral-500' : 'text-neutral-700',
      className
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean;
  }
>(({ className, noPadding = false, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      !noPadding && 'p-6 pt-0', 
      className
    )} 
    {...props} 
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    centered?: boolean;
    noPadding?: boolean;
  }
>(({ className, centered = false, noPadding = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center',
      !noPadding && 'p-6 pt-0',
      centered && 'justify-center',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };