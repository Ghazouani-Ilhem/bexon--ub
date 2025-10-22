'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          if (fidEntry.processingStart && fidEntry.startTime) {
            setMetrics(prev => ({ 
              ...prev, 
              fid: fidEntry.processingStart - fidEntry.startTime 
            }));
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }
    };

    // Run measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.group('🚀 Performance Metrics');
        console.log('First Contentful Paint (FCP):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Not available');
        console.log('Largest Contentful Paint (LCP):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Not available');
        console.log('First Input Delay (FID):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Not available');
        console.log('Cumulative Layout Shift (CLS):', metrics.cls ? metrics.cls.toFixed(4) : 'Not available');
        console.log('Time to First Byte (TTFB):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Not available');
        console.groupEnd();
      };

      // Log after a delay to allow metrics to populate
      setTimeout(logMetrics, 3000);
    }
  }, [metrics]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}</div>
    </div>
  );
};

export default PerformanceMonitor;