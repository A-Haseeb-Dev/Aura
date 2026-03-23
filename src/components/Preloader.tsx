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
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-bg-light dark:bg-bg-dark flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-ink-light dark:text-ink-dark"
            >
              AURA<span className="text-accent-light dark:text-accent-dark">.</span>
            </motion.div>
          </div>
          
          <div className="w-48 h-[1px] bg-border-subtle relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent-light dark:bg-accent-dark"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          <motion.span 
            className="mt-4 text-[10px] uppercase tracking-[0.4em] font-sans opacity-40 text-ink-light dark:text-ink-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
          >
            {Math.min(progress, 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
