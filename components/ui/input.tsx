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
            'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-all duration-200',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50',
            success && 'border-green-300 focus:ring-green-500 focus:border-green-500 bg-green-50',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            'hover:border-gray-400',
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
          <div className="absolute -bottom-5 left-0 text-xs text-red-600 animate-fade-in">
            {error}
          </div>
        )}
        {success && (
          <div className="absolute -bottom-5 left-0 text-xs text-green-600 animate-fade-in">
            ✓ Success
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input }; 