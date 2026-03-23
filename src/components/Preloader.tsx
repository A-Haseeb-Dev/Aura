import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-bg-light dark:bg-bg-dark flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Noise */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] mix-blend-overlay grain" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-8">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-serif italic tracking-tighter text-ink-light dark:text-ink-dark"
              >
                AURA<span className="text-accent-light dark:text-accent-dark not-italic font-sans">.</span>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-64 h-[1px] bg-border-subtle/20 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-accent-light dark:bg-accent-dark"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <div className="flex justify-between w-64">
                <span className="text-[9px] uppercase tracking-[0.4em] font-display opacity-40 text-ink-light dark:text-ink-dark">
                  Loading
                </span>
                <motion.span 
                  className="text-[9px] uppercase tracking-[0.4em] font-display opacity-40 text-ink-light dark:text-ink-dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                >
                  {Math.min(progress, 100)}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* Curtain Panel */}
          <motion.div 
            initial={{ y: '100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-accent-light dark:bg-accent-dark z-[-1] opacity-5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
