import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionDividerProps {
  // Updated from 'image' to 'url' to align with the ASSETS configuration in Dashboard.tsx
  url: string;
  title?: string;
  subtitle?: string;
  slogan?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ url, title, subtitle, slogan }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Increased translation range for a stronger parallax effect
  const bgY = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  // Increased base scale to prevent edges from showing during large Y translations
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.45]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[500px] md:h-[650px] w-full overflow-hidden flex items-center justify-center border-y border-white/5 bg-black"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-[0.6]"
        style={{ 
          backgroundImage: `url(${url})`,
          y: bgY,
          scale,
          opacity 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] z-10" />

      <div className="relative z-30 text-center max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle && (
            <div className="flex items-center justify-center gap-6 text-neon-lime font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
               <span className="w-12 h-px bg-neon-lime/30" />
               {subtitle}
               <span className="w-12 h-px bg-neon-lime/30" />
            </div>
          )}
          
          {title && (
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-10 hero-text-shadow">
              {title}
            </h2>
          )}
          
          {slogan && (
            <div className="relative inline-block mt-4">
               <div className="px-10 py-5 glass border border-white/10 rounded-none backdrop-blur-xl">
                 <p className="text-xs md:text-lg text-white font-light tracking-[0.3em] uppercase italic">
                   "{slogan}"
                 </p>
               </div>
               <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-neon-blue/50" />
               <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-neon-blue/50" />
            </div>
          )}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none z-40" />
    </div>
  );
};

export default SectionDivider;