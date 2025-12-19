import React, { useEffect, useState } from 'react';
import { INITIAL_LOGS } from '../constants';
import { Logo } from './Logo';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    
    // Log interval
    const logInterval = setInterval(() => {
      if (currentIndex < INITIAL_LOGS.length) {
        setLogs(prev => [...prev, INITIAL_LOGS[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 800);

    // Progress bar interval
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Completion timeout
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center p-8 font-mono relative overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%]"></div>
      
      <div className="w-full max-w-2xl">
        <div className="mb-8 border-b border-white/20 pb-4 flex justify-between items-end">
          <div className="flex items-center gap-3">
             <Logo className="h-4 w-auto text-neon-lime" />
             <span className="text-neon-lime text-sm tracking-widest uppercase">System Boot</span>
          </div>
          <span className="text-neon-blue text-xs">{progress}%</span>
        </div>

        <div className="space-y-2 mb-12 min-h-[200px]">
          {logs.map((log, index) => (
            <div key={index} className="text-white/80 text-sm tracking-wide animate-pulse">
              <span className="text-neon-lime mr-2">{'>'}</span>
              {log}
            </div>
          ))}
          {progress === 100 && (
             <div className="text-neon-blue text-sm tracking-wide mt-4 font-bold">
              <span className="text-neon-blue mr-2">{'>'}</span>
              FINANCIAL ENGINE — ONLINE
            </div>
          )}
        </div>

        <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-neon-lime shadow-[0_0_10px_#ACFF01]"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSequence;