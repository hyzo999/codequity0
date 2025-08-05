'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
  success?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  helperText?: string;
  variant?: 'default' | 'filled' | 'outlined';
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    error, 
    success, 
    leftIcon, 
    rightIcon, 
    label,
    helperText,
    variant = 'default',
    inputSize = 'md',
    id,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const inputId = id || React.useId();

    const sizeClasses = {
      sm: 'h-9 px-3 py-2 text-sm',
      md: 'h-11 px-4 py-3 text-sm',
      lg: 'h-12 px-4 py-3 text-base'
    };

    const variantClasses = {
      default: 'border border-neutral-300 bg-white',
      filled: 'border-0 bg-neutral-100 focus:bg-white',
      outlined: 'border-2 border-neutral-300 bg-transparent'
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <motion.label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors duration-200',
              error ? 'text-red-600' : success ? 'text-green-600' : 'text-neutral-700'
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            id={inputId}
            type={type}
            className={cn(
              'flex w-full rounded-lg font-medium transition-all duration-200',
              'placeholder:text-neutral-400 placeholder:font-normal',
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50',
              sizeClasses[inputSize],
              variantClasses[variant],
              error && 'border-red-300 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50',
              success && 'border-green-300 focus:border-green-500 focus:ring-green-500/20 bg-green-50/50',
              !error && !success && 'focus:border-primary focus:ring-primary/20',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              'hover:border-neutral-400 hover:shadow-sm',
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}

          {/* Focus Ring Animation */}
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className={cn(
                  'absolute inset-0 rounded-lg pointer-events-none',
                  error ? 'ring-2 ring-red-500/20' : 
                  success ? 'ring-2 ring-green-500/20' : 
                  'ring-2 ring-primary/20'
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Helper Text / Error Message */}
        <AnimatePresence mode="wait">
          {(error || helperText || success) && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex items-center space-x-1"
            >
              {error && typeof error === 'string' && (
                <>
                  <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-red-600">{error}</span>
                </>
              )}
              
              {success && !error && (
                <>
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-600">Looks good!</span>
                </>
              )}
              
              {helperText && !error && !success && (
                <span className="text-sm text-neutral-500">{helperText}</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };