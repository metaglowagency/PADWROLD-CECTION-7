
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface SystemOverlayProps {
  currentPage: number;
  totalPages: number;
}

const SystemOverlay: React.FC<SystemOverlayProps> = ({ currentPage, totalPages }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, '0');
  const dateStr = time.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <>
      {/* TOP HEADER INFO */}
      <div className="fixed top-6 right-6 z-[110] hidden lg:flex items-center gap-6 text-[10px] font-mono tracking-widest text-gray-500 uppercase pointer-events-auto bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5 shadow-2xl">
         <div className="flex items-center gap-2">
            <span className="text-neon-lime animate-pulse">●</span> PADWORLD HQ // DXB
         </div>
         
         <span>//</span>
         
         <div className="text-white font-bold">{dateStr}</div>
         
         <div className="w-px h-3 bg-gray-700 mx-2" />
         
         <a 
          href="https://padworld.global" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-neon-lime transition-colors font-bold border-b border-white/20 hover:border-neon-lime"
         >
            VISIT PADWORLD.GLOBAL ↗
         </a>
      </div>

      {/* BOTTOM HUD */}
      <div className="fixed bottom-0 left-0 w-full z-[110] px-8 py-8 flex justify-between items-end pointer-events-none">
         
         <div className="flex items-center gap-4 pointer-events-auto bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
            <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-gray-300 uppercase font-bold">Confidential • Section 07.0</span>
         </div>

         <div className="flex items-center gap-10 pointer-events-auto bg-black/40 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-col items-end">
                <span className="text-[9px] font-mono tracking-widest text-gray-600 uppercase mb-2">Scale Node Progression</span>
                <div className="font-mono text-2xl font-black text-neon-lime tracking-tighter">
                    {fmt(currentPage)} <span className="text-gray-700 opacity-50">/ {fmt(totalPages)}</span>
                </div>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="flex flex-col">
                <span className="text-[9px] font-mono tracking-widest text-gray-600 uppercase mb-2">Access Tier</span>
                <span className="text-white font-mono text-[11px] tracking-[0.5em] uppercase font-bold">Verified Investor</span>
            </div>
         </div>
      </div>
    </>
  );
};

export default SystemOverlay;
