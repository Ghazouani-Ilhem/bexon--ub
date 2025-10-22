'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyLoadProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default LazyLoad;