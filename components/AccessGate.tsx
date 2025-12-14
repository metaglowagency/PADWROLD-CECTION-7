import React, { useState } from 'react';
import { ACCESS_KEY } from '../constants';
import { Lock, ChevronRight } from 'lucide-react';

interface AccessGateProps {
  onUnlock: () => void;
}

const AccessGate: React.FC<AccessGateProps> = ({ onUnlock }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === ACCESS_KEY) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-grid relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      
      <div className="z-10 w-full max-w-md p-8 relative">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Lock className={`w-8 h-8 ${error ? 'text-red-500' : 'text-neon-lime'} transition-colors duration-300`} />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white mb-2 uppercase">
            PadWorld Investor System
          </h1>
          <p className="text-xs font-mono tracking-widest text-neon-blue uppercase">
            Module: Financial Intelligence
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute inset-0 bg-neon-lime/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER ACCESS KEY"
            className={`w-full bg-black/60 border ${error ? 'border-red-500' : 'border-white/20 focus:border-neon-lime'} text-white font-mono text-center py-4 px-6 text-xl tracking-widest outline-none transition-all duration-300 backdrop-blur-md uppercase placeholder-gray-600`}
            autoFocus
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-4 text-neon-lime hover:text-white hover:bg-neon-lime/20 rounded transition-colors"
          >
            <ChevronRight />
          </button>
        </form>

        {error && (
          <div className="text-red-500 font-mono text-xs text-center mt-4 tracking-widest animate-pulse">
            ACCESS DENIED. INVALID CREDENTIALS.
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
            Confidential • Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessGate;
