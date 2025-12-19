
import React, { useEffect, useRef, useState } from 'react';
import { CORE_KPIS, REVENUE_STACK } from '../constants';
import { ASSETS } from '../assets';
import { ShieldCheck, ArrowRight, Activity, Plus, Timer, Globe, Database, Cpu, Users, TrendingUp, RefreshCw } from 'lucide-react';
import UnitEconomics from './UnitEconomics';
import { Logo } from './Logo';
import SystemOverlay from './SystemOverlay';
import SectionDivider from './SectionDivider';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [selectedCountry, setSelectedCountry] = useState('UAE');
  
  const compoundingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: compoundingProgress } = useScroll({
    target: compoundingRef,
    offset: ["start start", "end end"]
  });

  const sectionIds = [
    'sec-hero', 'sec-stack-div', 'sec-stack', 'sec-econ-div', 'sec-economics', 
    'sec-scale-div', 'sec-countries', 'sec-roi-div', 'sec-roi', 
    'sec-fastpad-div', 'sec-fastpad', 'sec-share-div', 'sec-share', 
    'sec-comp-div', 'sec-compounding', 'sec-risk-div', 'sec-risk', 'sec-impact'
  ];

  const countries = {
    'UAE': { centers: 12, rev: 14.4 },
    'USA': { centers: 45, rev: 54.0 },
    'Spain': { centers: 28, rev: 33.6 },
    'Saudi Arabia': { centers: 20, rev: 24.0 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) setActiveSection(index + 1);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Compounding Animation Transforms
  const compoundOpacity = useTransform(compoundingProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const textFillWidth = useTransform(compoundingProgress, [0.1, 0.8], ["0%", "100%"]);
  
  const growthNodes = [
    { label: "More Courts", desc: "Physical scale expansion via verified franchise deployment.", takeaway: "Global Presence", icon: Globe, p: [0.15, 0.25], color: "#ACFF01", x: 0, y: -300 },
    { label: "More Data", desc: "Digital capture across every match, visitor, and transaction.", takeaway: "Digital Alpha", icon: Database, p: [0.30, 0.40], color: "#2DD6FF", x: 285, y: -90 },
    { label: "Better AI", desc: "Refining operational logic to optimize yield and occupancy.", takeaway: "Intelligence Peak", icon: Cpu, p: [0.45, 0.55], color: "#ACFF01", x: 180, y: 240 },
    { label: "Better Players", desc: "Higher skill levels drive retention and recurring revenue.", takeaway: "Network Value", icon: Users, p: [0.60, 0.70], color: "#2DD6FF", x: -180, y: 240 },
    { label: "More Demand", desc: "Viral adoption fueled by technological superiority.", takeaway: "Market Pull", icon: TrendingUp, p: [0.75, 0.85], color: "#ACFF01", x: -285, y: -90 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-neon-lime selection:text-black">
      
      <style>{`
        .bg-grid-faint {
          background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          color: transparent;
        }
        .text-fill {
          -webkit-text-stroke: 1px #ACFF01;
          color: #ACFF01;
        }
        .node-glass {
          background: rgba(15, 15, 15, 0.98);
          backdrop-filter: blur(60px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 120px rgba(0,0,0,1), inset 0 0 40px rgba(255,255,255,0.02);
        }
        .animate-slow-spin {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <SystemOverlay currentPage={activeSection} totalPages={sectionIds.length} />

      {/* 7.2 THE FINANCIAL CORE */}
      <section id="sec-hero" className="relative h-screen flex flex-col items-center justify-center p-6 border-b border-white/10 overflow-hidden bg-black bg-grid-faint">
        <div className="absolute top-10 left-10 z-50">
          <Logo className="text-white w-32 h-auto" />
        </div>
        
        <div className="z-10 text-center w-full max-w-7xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
             <div className="text-neon-lime font-mono text-[11px] tracking-[0.5em] uppercase mb-6 flex items-center justify-center gap-4">
               <span className="w-8 h-px bg-neon-lime/40" />
               Financial Intelligence Module v7.0
               <span className="w-8 h-px bg-neon-lime/40" />
             </div>
             <h1 className="text-7xl md:text-[11rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
               CAPITAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">EFFICIENCY</span>
             </h1>
             <p className="text-gray-400 font-light text-xl md:text-2xl max-w-2xl mx-auto mb-20 italic">
               "PadWorld is built for capital efficiency, not speculation."
             </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-7xl mx-auto">
            {CORE_KPIS.map((kpi, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="glass p-8 border-white/5 relative group overflow-hidden text-left"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">{kpi.label}</div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{kpi.value}</div>
                <div className="text-[10px] text-gray-600 font-light tracking-widest uppercase">{kpi.sub}</div>
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-neon-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.3 REVENUE STACK */}
      <div id="sec-stack-div">
        <SectionDivider {...ASSETS.dividers.stack} />
      </div>
      <section id="sec-stack" className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-40">
            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase mb-10 leading-none">
              Vertical <br/> <span className="text-neon-lime">Yield</span>
            </h2>
            <p className="text-gray-400 text-xl font-light border-l-2 border-neon-lime pl-10 leading-relaxed mb-16 max-w-md italic">
              "Independent revenue layers locking into a single high-margin network."
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {REVENUE_STACK.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between glass py-5 px-10 border-white/5 hover:bg-neon-lime/5 transition-all"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-xs text-neon-lime opacity-30 font-bold">0{REVENUE_STACK.length - idx}</span>
                  <span className="font-mono text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-all group-hover:translate-x-4">{item}</span>
                </div>
                <Plus size={14} className="text-gray-800 group-hover:text-neon-lime transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 UNIT ECONOMICS */}
      <div id="sec-econ-div">
        <SectionDivider {...ASSETS.dividers.economics} />
      </div>
      <section id="sec-economics" className="py-40 px-6 border-y border-white/10 bg-carbon relative">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none mb-24">Economics</h2>
            <UnitEconomics />
        </div>
      </section>

      {/* 7.5 GLOBAL SCALE */}
      <div id="sec-scale-div">
        <SectionDivider {...ASSETS.dividers.scale} />
      </div>
      <section id="sec-countries" className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
             <div>
                <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none">Global Nodes</h2>
             </div>
             <div className="flex gap-2 glass p-1 rounded-none border-white/10">
                {Object.keys(countries).map(c => (
                  <button key={c} onClick={() => setSelectedCountry(c)} className={`px-10 py-4 font-mono text-[10px] uppercase tracking-widest transition-all ${selectedCountry === c ? 'bg-neon-blue text-black font-black' : 'text-gray-500 hover:text-white'}`}>
                    {c}
                  </button>
                ))}
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { l: 'Required Centers', v: countries[selectedCountry as keyof typeof countries].centers, s: 'Nodes', c: 'white' },
                { l: 'National Revenue', v: `$${countries[selectedCountry as keyof typeof countries].rev}M`, s: 'Estimated', c: 'white' },
                { l: 'PadWorld Share', v: '25-30%', s: 'Platform Royalty', c: 'blue' },
                { l: 'Local Partner', v: '70-75%', s: 'Operator Upside', c: 'lime' }
              ].map((item, i) => (
                <div key={i} className="glass p-12 border-white/5 relative group hover:border-white/10 transition-all">
                   <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-10">{item.l}</div>
                   <div className={`text-5xl md:text-6xl font-black transition-transform group-hover:scale-105 ${item.c === 'lime' ? 'text-neon-lime' : item.c === 'blue' ? 'text-neon-blue' : 'text-white'}`}>{item.v}</div>
                   <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest mt-4">{item.s}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7.6 ROI SCENARIOS */}
      <div id="sec-roi-div">
        <SectionDivider {...ASSETS.dividers.roi} />
      </div>
      <section id="sec-roi" className="py-40 px-6 bg-carbon border-y border-white/10">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-center mb-24 leading-none">Investor Reality Check</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { t: 'Conservative', r: '25% ROI', p: '3.0 Years', desc: 'Lower occupancy, slower rollout.' },
                    { t: 'Base Case', r: '45% ROI', p: '1.8 Years', desc: 'Target rollout, optimized operations.' },
                    { t: 'High Performance', r: '65% ROI', p: '1.4 Years', desc: 'Fast adoption, high occupancy.' }
                ].map((item, i) => (
                    <div key={i} className={`glass p-12 border-white/5 relative group hover:bg-white/5 transition-all ${i === 1 ? 'border-t-neon-lime border-t-4' : ''}`}>
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-8">{item.t}</div>
                        <div className="text-5xl font-black text-white mb-2">{item.r}</div>
                        <div className="text-neon-lime font-mono text-xs uppercase tracking-widest mb-8">Payback: {item.p}</div>
                        <p className="text-gray-500 text-sm font-light border-t border-white/10 pt-8 italic leading-relaxed">"{item.desc}"</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7.7 FASTPAD EFFECT */}
      <div id="sec-fastpad-div">
        <SectionDivider {...ASSETS.dividers.fastpad} />
      </div>
      <section id="sec-fastpad" className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
                <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter mb-10 leading-none">FastPad <br/> <span className="text-neon-blue">Effect</span></h2>
                <div className="glass p-12 border-white/5">
                    <div className="flex justify-between mb-4">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Normal Padel Hour</span>
                        <span className="text-white font-mono">$60</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 mb-8">
                        <div className="h-full bg-gray-500" style={{ width: '33%' }}></div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest">FastPad Hour</span>
                        <span className="text-neon-blue font-mono font-black">$180+</span>
                    </div>
                    <div className="w-full h-3 bg-white/5">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-neon-blue"></motion.div>
                    </div>
                </div>
            </div>
            <div className="relative group flex justify-center">
                <div className="absolute inset-0 bg-neon-blue/5 blur-[120px]"></div>
                <div className="relative glass p-20 text-center border-white/5 border-t-neon-blue border-t-4 aspect-square flex flex-col items-center justify-center">
                    <Timer size={64} className="text-neon-blue mb-10 animate-pulse" />
                    <div className="text-8xl font-black text-white mb-4 tracking-tighter">3.0x</div>
                    <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">Revenue Multiplier</div>
                </div>
            </div>
        </div>
      </section>

      {/* 7.8 SHARE LOGIC */}
      <div id="sec-share-div">
        <SectionDivider {...ASSETS.dividers.share} />
      </div>
      <section id="sec-share" className="py-40 px-6 bg-carbon border-y border-white/10 text-center">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-24">Share Logic</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-40">
                <div className="relative w-64 h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                        <motion.circle 
                            cx="50" cy="50" r="45" fill="none" stroke="#ACFF01" strokeWidth="10" 
                            strokeDasharray="282.7" strokeDashoffset="70.6" 
                            initial={{ strokeDashoffset: 282.7 }}
                            whileInView={{ strokeDashoffset: 70.6 }}
                            transition={{ duration: 1.5 }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-6xl font-black text-white">25%</div>
                        <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">PadWorld</div>
                    </div>
                </div>
                <div className="text-left space-y-12 max-w-lg">
                    <div className="border-l-4 border-neon-lime pl-8 text-left">
                        <h4 className="text-neon-lime font-black uppercase text-xl mb-2 tracking-tight">Ecosystem Yield</h4>
                        <p className="text-gray-400 font-light leading-relaxed italic">"PadWorld only earns when the ecosystem performs."</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 7.10 THE WOW MOMENT: COMPOUNDING (FIXED VISIBILITY) */}
      <div id="sec-comp-div">
        <SectionDivider {...ASSETS.dividers.compound} />
      </div>
      <section id="sec-compounding" ref={compoundingRef} className="relative h-[650vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
          
          {/* Background Watermark - High Visibility Loop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
             <motion.div className="relative" style={{ opacity: compoundOpacity }}>
                <span className="text-[40vw] font-black tracking-tighter uppercase text-outline leading-none opacity-20">LOOP</span>
                <motion.div className="absolute inset-0 overflow-hidden whitespace-nowrap" style={{ width: textFillWidth }}>
                   <span className="text-[40vw] font-black tracking-tighter uppercase text-fill leading-none">LOOP</span>
                </motion.div>
             </motion.div>
          </div>

          <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center h-full justify-center">
            
            <motion.div className="text-center absolute top-24" style={{ opacity: useTransform(compoundingProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}>
                <div className="text-neon-lime font-mono text-[11px] tracking-[1.5em] uppercase mb-4 font-black">Growth Flywheel Dynamics</div>
                <h2 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none mb-4 text-white">Compounding</h2>
            </motion.div>

            <div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">
                
                {/* Flow Ring - SVG Connections */}
                <svg className="absolute w-[850px] h-[850px] pointer-events-none overflow-visible z-10">
                   <motion.path 
                     d="M 425 125 L 710 335 L 605 665 L 245 665 L 140 335 Z"
                     fill="none"
                     stroke="rgba(255,255,255,0.08)"
                     strokeWidth="3"
                     strokeDasharray="25 15"
                   />
                   <motion.path 
                     d="M 425 125 L 710 335 L 605 665 L 245 665 L 140 335 Z"
                     fill="none"
                     stroke="#ACFF01"
                     strokeWidth="3"
                     style={{
                        pathLength: useSpring(useTransform(compoundingProgress, [0.1, 0.85], [0, 1]), { stiffness: 40, damping: 25 }),
                        filter: 'drop-shadow(0 0 15px #ACFF01)'
                     }}
                   />
                </svg>

                {/* Central Rotating Core */}
                <div className="relative z-30">
                   <motion.div 
                      style={{ opacity: compoundOpacity }}
                      animate={{ scale: [1, 1.1, 1], rotate: 360 }} 
                      transition={{ scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 50, repeat: Infinity, ease: "linear" } }}
                      className="w-72 h-72 rounded-full border border-white/20 bg-black/95 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_120px_rgba(172,255,1,0.2)]"
                   >
                      <RefreshCw size={120} className="text-neon-lime opacity-90 animate-slow-spin" />
                   </motion.div>
                   <div className="absolute inset-0 bg-neon-lime/10 blur-[100px] rounded-full pointer-events-none" />
                </div>

                {/* THE GROWTH NODES - Optimized for Readability */}
                {growthNodes.map((node, i) => {
                    const isActive = useTransform(compoundingProgress, [node.p[0], node.p[0] + 0.05], [0, 1]);
                    const scaleValue = useSpring(isActive, { stiffness: 100, damping: 20 });
                    const Icon = node.icon;
                    
                    return (
                        <motion.div 
                            key={i}
                            className="absolute z-40"
                            style={{ 
                                opacity: isActive,
                                scale: scaleValue,
                                left: `calc(50% + ${node.x}px)`,
                                top: `calc(50% + ${node.y}px)`,
                                translateX: '-50%',
                                translateY: '-50%'
                            }}
                        >
                            {/* Ambient Glow behind the card */}
                            <div className={`absolute inset-0 blur-[60px] opacity-20 rounded-full transition-colors duration-500 ${node.color === '#ACFF01' ? 'bg-neon-lime' : 'bg-neon-blue'}`} />
                            
                            <div className="node-glass p-8 w-[320px] md:w-[380px] group transition-all relative">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`p-4 border-2 ${node.color === '#ACFF01' ? 'border-neon-lime text-neon-lime shadow-[0_0_40px_rgba(172,255,1,0.5)]' : 'border-neon-blue text-neon-blue shadow-[0_0_40px_rgba(45,214,255,0.5)]'}`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-mono text-[10px] text-gray-400 tracking-[0.4em] uppercase font-black">Sequence</span>
                                        <span className="font-mono text-4xl text-white font-black leading-none">0{i+1}</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl font-black uppercase text-white mb-4 tracking-tighter leading-none drop-shadow-lg">{node.label}</h3>
                                <p className="text-white font-light text-base italic border-t border-white/10 pt-6 mt-4 leading-relaxed mb-8 opacity-90">
                                    "{node.desc}"
                                </p>
                                
                                <div className="flex items-center gap-4">
                                  <div className={`px-4 py-2 font-mono text-[11px] uppercase tracking-widest font-black text-black ${node.color === '#ACFF01' ? 'bg-neon-lime shadow-[0_0_15px_#ACFF01]' : 'bg-neon-blue shadow-[0_0_15px_#2DD6FF]'}`}>
                                    {node.takeaway}
                                  </div>
                                </div>
                                
                                {/* Structural Accents */}
                                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${node.color === '#ACFF01' ? 'border-neon-lime' : 'border-neon-blue'}`} />
                                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${node.color === '#ACFF01' ? 'border-neon-lime' : 'border-neon-blue'}`} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* 7.9 RISK MITIGATION */}
      <div id="sec-risk-div">
        <SectionDivider {...ASSETS.dividers.risk} />
      </div>
      <section id="sec-risk" className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-neon-lime/5 blur-[120px]"></div>
                <div className="relative glass p-20 aspect-square rounded-full flex items-center justify-center border-white/5">
                    <ShieldCheck size={160} className="text-white opacity-5" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-7xl font-black text-white mb-2 tracking-tighter">SECURE</h2>
                        <div className="text-neon-lime font-mono text-[10px] uppercase tracking-[0.6em] font-bold">Capital Protection</div>
                    </div>
                </div>
            </div>
            <div className="space-y-12">
                {[
                    { r: 'Market Risk', s: 'Global Demand + Youth pipeline dynamics.' },
                    { r: 'Tech Risk', s: 'Full vertical hardware & software integration.' },
                    { r: 'Operational Risk', s: 'Central AI support & verified operational SOPs.' },
                    { r: 'Fraud Risk', s: 'Retained earnings logic and AI verification nodes.' }
                ].map((item, i) => (
                    <motion.div key={i} className="flex gap-8 group">
                        <div className="w-4 h-4 rounded-none bg-white/10 group-hover:bg-neon-lime transition-all mt-2 shrink-0" />
                        <div>
                            <h4 className="text-white font-black uppercase tracking-[0.2em] mb-3 group-hover:text-neon-lime transition-colors">{item.r}</h4>
                            <p className="text-gray-500 font-light leading-relaxed text-base italic">"{item.s}"</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 7.11 FINAL IMPACT */}
      <section id="sec-impact" className="h-screen flex flex-col items-center justify-center bg-black px-6 text-center relative overflow-hidden bg-grid-faint border-t border-white/10">
        <div className="absolute inset-0 bg-radial-gradient(circle, rgba(172,255,1,0.08) 0%, transparent 80%)" />
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 w-full max-w-6xl">
            <Logo className="w-64 md:w-[35rem] h-auto text-white mb-20 opacity-90 mx-auto" />
            
            <div className="space-y-6 mb-24">
              <h2 className="text-4xl md:text-8xl font-light text-white leading-tight">PadWorld is not a <span className="text-gray-600 italic">cost-heavy</span> project.</h2>
              <h3 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter text-white leading-none">It is a global <br/> <span className="text-neon-lime drop-shadow-[0_0_20px_rgba(172,255,1,0.3)]">platform.</span></h3>
            </div>
            
            <button className="group relative px-24 py-8 overflow-hidden transition-all transform hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 bg-white group-hover:bg-neon-lime transition-colors duration-500" />
              <span className="relative flex items-center gap-8 text-black font-mono font-black uppercase tracking-[0.5em] text-sm">
                Proceed to Section 08 <ArrowRight size={24} className="group-hover:translate-x-6 transition-transform duration-500" />
              </span>
            </button>
        </motion.div>

        <div className="absolute bottom-12 text-[10px] font-mono text-gray-800 uppercase tracking-[2em] animate-pulse">Intelligence Module 07 Complete</div>
      </section>
    </div>
  );
};

export default Dashboard;
