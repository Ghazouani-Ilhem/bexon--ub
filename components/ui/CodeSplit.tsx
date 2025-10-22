'use client';

import React, { Suspense, lazy, ComponentType } from 'react';
import { motion } from 'framer-motion';

interface CodeSplitProps {
  load: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  fallback?: React.ReactNode;
  delay?: number;
}

const CodeSplit: React.FC<CodeSplitProps> = ({ 
  load, 
  fallback = <div className="animate-pulse bg-gray-200 rounded h-32" />,
  delay = 0
}) => {
  const LazyComponent = lazy(load);

  return (
    <Suspense fallback={fallback}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        <LazyComponent />
      </motion.div>
    </Suspense>
  );
};

export default CodeSplit;