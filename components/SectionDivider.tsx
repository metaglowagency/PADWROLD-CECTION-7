import React from 'react';

interface SectionDividerProps {
  image: string;
  title?: string;
  subtitle?: string;
  slogan?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ image, title, subtitle, slogan }) => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden flex items-center justify-center border-y border-white/10 group">
      {/* Parallax-like Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-transform duration-[20s] ease-linear group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Heavy Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      
      {/* Scanline Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

      {/* Content */}
      <div className="relative z-20 text-center p-6 transform transition-all duration-700 hover:scale-105">
        {subtitle && (
          <div className="flex items-center justify-center gap-3 text-neon-lime font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-4 opacity-80">
             <span className="w-8 h-[1px] bg-neon-lime"></span>
             {subtitle}
             <span className="w-8 h-[1px] bg-neon-lime"></span>
          </div>
        )}
        {title && (
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none hero-text-shadow mb-8">
            {title}
          </h2>
        )}
        {slogan && (
          <div className="relative inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <p className="text-sm md:text-xl text-white font-light tracking-[0.2em] uppercase px-8 py-3 bg-black/30 backdrop-blur-md border border-white/10">
               {slogan}
             </p>
             {/* Tech Brackets */}
             <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-blue"></div>
             <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-blue"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionDivider;