'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed select-none relative overflow-hidden group',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-md hover:shadow-lg active:scale-95 transform hover:-translate-y-0.5',
        secondary: 'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary shadow-md hover:shadow-lg active:scale-95 transform hover:-translate-y-0.5',
        accent: 'bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-md hover:shadow-lg active:scale-95 transform hover:-translate-y-0.5',
        outline: 'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus:ring-primary transition-all duration-300',
        ghost: 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500 rounded-lg',
        destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg active:scale-95 transform hover:-translate-y-0.5',
        gradient: 'bg-gradient-to-r from-primary to-accent text-white hover:from-primary-hover hover:to-accent-hover shadow-lg hover:shadow-xl active:scale-95 transform hover:-translate-y-0.5',
        glass: 'bg-white/80 backdrop-blur-xl border border-white/20 text-neutral-900 hover:bg-white/90 shadow-xl hover:shadow-2xl',
      },
      size: {
        default: 'h-11 px-6 py-2.5 text-sm',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-12 px-8 py-3 text-base',
        xl: 'h-14 px-10 py-4 text-lg',
        icon: 'h-11 w-11 p-0',
        'icon-sm': 'h-9 w-9 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false, 
    leftIcon, 
    rightIcon, 
    ripple = true,
    children, 
    disabled, 
    onClick,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !disabled && !loading) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { id: Date.now(), x, y };
        
        setRipples(prev => [...prev, newRipple]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);
      }
      
      onClick?.(e);
    }, [ripple, disabled, loading, onClick]);

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        {/* Ripple Effect */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}

        {/* Loading Spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {leftIcon && !loading && (
          <span className="mr-2 shrink-0">
            {leftIcon}
          </span>
        )}

        {/* Button Content */}
        <span className="flex items-center justify-center">
          {children}
        </span>

        {/* Right Icon */}
        {rightIcon && (
          <span className="ml-2 shrink-0">
            {rightIcon}
          </span>
        )}

        {/* Shine Effect for Gradient Buttons */}
        {variant === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };