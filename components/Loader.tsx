import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "INITIALIZING KERNEL...",
    "LOADING MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Progress bar
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 5; // Random increment for realism
      });
    }, 100);

    // Text cycler
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center text-secondary font-mono">
      <div className="w-80 max-w-[80%]">
        <div className="flex justify-between mb-2 text-xs uppercase tracking-widest">
          <span>System Boot</span>
          <span>{Math.min(100, Math.floor(progress))}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-2 bg-gray-800 rounded-sm overflow-hidden border border-secondary/30 relative">
            <div className="absolute inset-0 bg-secondary/10 animate-pulse"></div>
            <motion.div 
                className="h-full bg-secondary shadow-[0_0_10px_#06b6d4]"
                style={{ width: `${progress}%` }}
            />
        </div>

        {/* Terminal Text */}
        <div className="mt-4 text-xs h-6 text-primary animate-pulse">
            &gt; {texts[Math.min(textIndex, Math.floor(progress / 25))]}<span className="animate-blink">_</span>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
             style={{
                 backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent)',
                 backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
    </div>
  );
};

export default Loader;
