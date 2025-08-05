'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, memo } from 'react';
import { Button } from './button';

interface NewsletterSignupProps {
  className?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => Promise<void>;
}

const NewsletterSignup = memo(function NewsletterSignup({
  className = '',
  title = 'Stay Updated',
  description = 'Get the latest updates, community highlights, and exclusive content delivered to your inbox.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  onSubscribe
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setIsSuccess(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, onSubscribe]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  }, [error]);

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-gray-200 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
                disabled={isSubmitting}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="w-full sm:w-auto shadow-sm"
              >
                {isSubmitting ? 'Subscribing...' : buttonText}
              </Button>
            </motion.div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-red-500 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success Message */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
              >
                <div className="flex items-center justify-center space-x-2">
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </motion.svg>
                  <span>Successfully subscribed! Check your email for confirmation.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xs text-gray-500"
        >
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default NewsletterSignup; 