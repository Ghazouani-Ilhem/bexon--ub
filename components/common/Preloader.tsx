'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="tj-preloader-inner">
            <div className="tj-preloader-ball-wrap">
              <div className="tj-preloader-ball-inner-wrap">
                <motion.div
                  className="tj-preloader-ball-inner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <div className="tj-preloader-ball"></div>
                </motion.div>
                <motion.div
                  className="tj-preloader-ball-shadow"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <motion.div
                className="tj-preloader-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading...
              </motion.div>
            </div>
          </div>
          <div className="tj-preloader-overlay"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;