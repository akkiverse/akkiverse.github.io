import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

/**
 * Thin progress bar at the top using the Python blue→orange gradient.
 */
export const ScrollProgressBar: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] transition-all duration-100 ease-out"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #3776ab 0%, #ff6b35 100%)',
        boxShadow: '0 0 6px rgba(255,107,53,0.55)',
      }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
};
