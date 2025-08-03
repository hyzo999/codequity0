'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-gray">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-neutral-border bg-white px-3 py-2 text-sm transition-all duration-300',
            'placeholder:text-neutral-gray',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            success && 'border-green-500 focus:ring-green-500 focus:border-green-500',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            'hover:border-neutral-gray',
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray">
            {rightIcon}
          </div>
        )}
        {error && (
          <div className="absolute -bottom-5 left-0 text-xs text-red-500 animate-fade-in">
            {error}
          </div>
        )}
        {success && (
          <div className="absolute -bottom-5 left-0 text-xs text-green-500 animate-fade-in">
            ✓ Success
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input }; 