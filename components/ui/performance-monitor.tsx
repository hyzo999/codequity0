'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            lcp: entry.startTime
          } as PerformanceMetrics));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            fcp: entry.startTime
          } as PerformanceMetrics));
        }
      }
    });

    fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

    // Measure First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as FirstInputEntry;
          setMetrics(prev => ({
            ...prev,
            fid: firstInputEntry.processingStart - entry.startTime
          } as PerformanceMetrics));
        }
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({
            ...prev,
            cls: clsValue
          } as PerformanceMetrics));
        }
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart
      } as PerformanceMetrics));
    }

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const getScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return '🟢 Good';
    if (value <= thresholds.poor) return '🟡 Needs Improvement';
    return '🔴 Poor';
  };

  if (!metrics || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp <= 1800 ? 'text-green-600' : metrics.fcp <= 3000 ? 'text-yellow-600' : 'text-red-600'}>
              {Math.round(metrics.fcp)}ms {getScore(metrics.fcp, { good: 1800, poor: 3000 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp <= 2500 ? 'text-green-600' : metrics.lcp <= 4000 ? 'text-yellow-600' : 'text-red-600'}>
              {Math.round(metrics.lcp)}ms {getScore(metrics.lcp, { good: 2500, poor: 4000 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid <= 100 ? 'text-green-600' : metrics.fid <= 300 ? 'text-yellow-600' : 'text-red-600'}>
              {Math.round(metrics.fid)}ms {getScore(metrics.fid, { good: 100, poor: 300 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls <= 0.1 ? 'text-green-600' : metrics.cls <= 0.25 ? 'text-yellow-600' : 'text-red-600'}>
              {metrics.cls.toFixed(3)} {getScore(metrics.cls, { good: 0.1, poor: 0.25 })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb <= 600 ? 'text-green-600' : metrics.ttfb <= 1800 ? 'text-yellow-600' : 'text-red-600'}>
              {Math.round(metrics.ttfb)}ms {getScore(metrics.ttfb, { good: 600, poor: 1800 })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
} 