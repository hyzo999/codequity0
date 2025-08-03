'use client';

import { Suspense, lazy, ComponentType } from 'react';
import { motion } from 'framer-motion';

interface DynamicImportProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

const LoadingFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex items-center justify-center p-8"
  >
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  </motion.div>
);

export default function DynamicImport({ 
  component, 
  fallback = <LoadingFallback />, 
  props = {} 
}: DynamicImportProps) {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
} 