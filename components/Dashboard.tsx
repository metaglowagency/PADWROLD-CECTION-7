import React, { useEffect, useRef, useState } from 'react';
import { CORE_KPIS, REVENUE_STACK } from '../constants';
import { ASSETS } from '../assets';
import { Shield, Zap, TrendingUp, Network, PieChart, ChevronDown, Hexagon, Plus, Check } from 'lucide-react';
import UnitEconomics from './UnitEconomics';
import SectionDivider from './SectionDivider';
import CountUp from './CountUp';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-neon-lime selection:text-black">
      
      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 100px; opacity: 1; }
        }
        @keyframes slideIn { 
          from { opacity: 0; transform: translateX(-20px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes scanVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .hero-text-shadow {
          text-shadow: 0 0 40px rgba(255,255,255,0.1);
        }
        .bar-stripes {
          background-image: linear-gradient(45deg,rgba(0,0,0,.1) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1) 75%,transparent 75%,transparent);
          background-size: 1rem 1rem;
        }
      `}</style>

      {/* 7.2 THE FINANCIAL CORE (HERO SECTION) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b border-white/10 overflow-hidden">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-10"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster={ASSETS.hero.poster}
            className="w-full h-full object-cover opacity-60"
          >
            <source src={ASSETS.hero.video} type="video/mp4" />
          </video>
        </div>

        {/* Ambient Spotlight (Subtler now over video) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-overlay"></div>

        <div className="z-10 text-center w-full max-w-7xl flex flex-col items-center">
          
          {/* Status Badge */}
          <div className="mb-8 overflow-hidden">
            <div 
              className="flex items-center gap-3 text-neon-lime font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="w-2 h-2 bg-neon-lime rounded-full animate-pulse"></span>
              System Online • Section 7.0
            </div>
          </div>

          {/* Main Hero Title */}
          <div className="relative mb-12">
            {/* Top Line */}
            <div className="overflow-hidden">
              <h1 
                className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] animate-[revealUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 hero-text-shadow"
                style={{ animationDelay: '0.4s' }}
              >
                Financial
              </h1>
            </div>
            
            {/* Bottom Line */}
            <div className="overflow-hidden">
              <h1 
                className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter uppercase leading-[0.85] animate-[revealUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0"
                style={{ animationDelay: '0.6s' }}
              >
                Intelligence
              </h1>
            </div>

            {/* Decorative Brackets/Lines */}
            <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-0 animate-[fadeIn_1s_ease_forwards]" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute -right-4 md:-right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-0 animate-[fadeIn_1s_ease_forwards]" style={{ animationDelay: '1.2s' }}></div>
          </div>

          {/* Subtitle / Value Props */}
          <div className="mb-20 overflow-hidden">
            <div 
              className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-gray-300 font-mono text-xs md:text-sm tracking-widest uppercase animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0"
              style={{ animationDelay: '0.8s' }}
            >
              <span>Returns</span>
              <span className="hidden md:block text-neon-blue">•</span>
              <span>Scalability</span>
              <span className="hidden md:block text-neon-blue">•</span>
              <span className="text-white font-bold">Capital Efficiency</span>
              <span className="hidden md:block text-neon-blue">•</span>
              <span>Investor Upside</span>
            </div>
          </div>

          {/* KPI Dashboard (The Core) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{ animationDelay: '1.4s' }}>
            {/* Custom render for KPIs to use CountUp with delays matching the fade-in */}
            <div className="p-6 rounded-lg bg-carbon/60 border border-white/10 backdrop-blur-md hover:border-neon-lime/30 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-lime transition-colors">Avg Revenue</div>
                <div className="text-3xl font-black tracking-tighter mb-1 text-neon-lime">
                   <CountUp end={1.2} delay={1600} prefix="$" suffix="M" decimals={1} duration={2500} />
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Annual Projection</div>
            </div>

             <div className="p-6 rounded-lg bg-carbon/60 border border-white/10 backdrop-blur-md hover:border-neon-lime/30 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-lime transition-colors">Avg EBITDA</div>
                <div className="text-3xl font-black tracking-tighter mb-1 text-neon-blue">
                   <CountUp end={42} delay={1800} suffix="%" duration={3000} />
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Margin</div>
            </div>

            <div className="p-6 rounded-lg bg-carbon/60 border border-white/10 backdrop-blur-md hover:border-neon-lime/30 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-lime transition-colors">Payback</div>
                <div className="text-3xl font-black tracking-tighter mb-1 text-white">
                   <CountUp end={18} delay={2000} duration={2000} />-<CountUp end={24} delay={2000} duration={2000} />
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Months</div>
            </div>

            <div className="p-6 rounded-lg bg-carbon/60 border border-white/10 backdrop-blur-md hover:border-neon-lime/30 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-lime transition-colors">ROI Range</div>
                <div className="text-3xl font-black tracking-tighter mb-1 text-neon-lime">
                   <CountUp end={55} delay={2200} suffix="%" prefix="~" duration={3500} />
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Annualized</div>
            </div>

            <div className="p-6 rounded-lg bg-carbon/60 border border-white/10 backdrop-blur-md hover:border-neon-lime/30 transition-all duration-300 group cursor-default relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-lime transition-colors">PadWorld Share</div>
                <div className="text-3xl font-black tracking-tighter mb-1 text-white">
                   <CountUp end={25} delay={2400} suffix="%" duration={1500} />
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">Revenue Share</div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce opacity-0 animate-[fadeIn_1s_ease_forwards]" style={{ animationDelay: '2.5s' }}>
            <ChevronDown className="text-white/50 w-6 h-6" />
          </div>
          
        </div>
      </section>

      {/* DIVIDER 1 */}
      <SectionDivider 
        image={ASSETS.dividers.ecosystem.url}
        title={ASSETS.dividers.ecosystem.title}
        subtitle={ASSETS.dividers.ecosystem.subtitle}
        slogan={ASSETS.dividers.ecosystem.slogan}
      />

      {/* 7.3 UNIFIED ECOSYSTEM */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Background Tech elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(rgba(45,214,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,214,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none"></div>
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left Column: Text & Context */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-neon-lime mb-6">
               <Hexagon className="w-6 h-6 fill-neon-lime/10" />
               <span className="font-mono text-xs tracking-widest uppercase">Ecosystem Architecture</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
              Unified <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Ecosystem</span>
            </h2>
            
            <p className="text-gray-400 font-light text-lg mb-8 border-l-2 border-neon-blue/50 pl-6">
              A vertically integrated platform where every layer decreases risk and compounds value. From courts to resorts, one engine powers it all.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="p-4 bg-white/5 border border-white/10 rounded">
                 <div className="text-2xl font-bold text-white mb-1">12+</div>
                 <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Revenue Streams</div>
               </div>
               <div className="p-4 bg-white/5 border border-white/10 rounded">
                 <div className="text-2xl font-bold text-neon-lime mb-1">100%</div>
                 <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Integrated Data</div>
               </div>
            </div>
          </div>

          {/* Right Column: Interactive Grid Modules */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REVENUE_STACK.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-carbon border border-white/10 p-4 rounded overflow-hidden hover:border-neon-lime/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(172,255,1,0.1)] hover:-translate-y-1"
                  style={{ 
                    animation: `fadeIn 0.5s ease-out forwards`, 
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-lime/5 to-transparent translate-y-[-100%] group-hover:animate-[scanVertical_1.5s_linear_infinite]"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${idx < 4 ? 'bg-neon-lime box-glow-lime' : 'bg-gray-600 group-hover:bg-neon-blue'} transition-colors`}></div>
                      <span className="font-mono text-xs md:text-sm tracking-wide text-gray-300 group-hover:text-white font-bold uppercase">
                        {item}
                      </span>
                    </div>
                    <Plus className="w-4 h-4 text-gray-600 group-hover:text-neon-lime transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  
                  {/* Tech decorations */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20 group-hover:border-neon-lime transition-colors"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20 group-hover:border-neon-lime transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER 2 */}
      <SectionDivider 
        image={ASSETS.dividers.economics.url}
        title={ASSETS.dividers.economics.title}
        subtitle={ASSETS.dividers.economics.subtitle}
        slogan={ASSETS.dividers.economics.slogan}
      />

      {/* 7.4 UNIT ECONOMICS */}
      <section className="py-24 px-6 bg-black relative border-y border-white/10">
        <div className="absolute inset-0 bg-neon-lime/5 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">Unit Economics</h2>
            <p className="font-mono text-neon-lime text-xs tracking-widest uppercase">Interactive Model</p>
          </div>
          <UnitEconomics />
        </div>
      </section>

      {/* DIVIDER 3 */}
      <SectionDivider 
        image={ASSETS.dividers.roi.url}
        title={ASSETS.dividers.roi.title}
        subtitle={ASSETS.dividers.roi.subtitle}
        slogan={ASSETS.dividers.roi.slogan}
      />

      {/* 7.6 ROI SCENARIOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-16 text-center">
          ROI <span className="text-gray-600">Reality Check</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Conservative", 
              roiStart: 0,
              roiEnd: 25,
              paybackEnd: 36, 
              baseBorder: "border-white/20",
              hoverBorder: "hover:border-white/60",
              hoverShadow: "hover:shadow-lg" 
            },
            { 
              title: "Base Case", 
              roiStart: 0,
              roiEnd: 45,
              paybackEnd: 24, 
              baseBorder: "border-neon-blue/50",
              hoverBorder: "hover:border-neon-blue",
              hoverShadow: "hover:shadow-[0_0_30px_rgba(45,214,255,0.2)]" 
            },
            { 
              title: "High Performance", 
              roiStart: 0,
              roiEnd: 60,
              paybackEnd: 16, 
              baseBorder: "border-neon-lime/50",
              hoverBorder: "hover:border-neon-lime",
              hoverShadow: "hover:shadow-[0_0_30px_rgba(172,255,1,0.2)]" 
            }
          ].map((card, idx) => (
            <div 
              key={idx} 
              className={`
                bg-carbon p-8 rounded-xl border ${card.baseBorder} 
                flex flex-col h-full 
                transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/5
                ${card.hoverBorder} ${card.hoverShadow}
              `}
            >
              <h3 className="text-xl font-bold uppercase mb-8 tracking-wide text-gray-200">{card.title}</h3>
              <div className="mt-auto space-y-6">
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase">Target ROI</div>
                  <div className="text-4xl font-black tracking-tighter text-white">
                    <CountUp end={card.roiEnd} suffix="%" duration={3000 + (idx*500)} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase">Payback</div>
                  <div className="text-2xl font-bold tracking-tighter text-gray-300">
                    ~<CountUp end={card.paybackEnd} duration={2500} /> months
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7.7 FASTPAD EFFECT */}
      <section className="py-24 px-6 bg-carbon/50 border-y border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 text-neon-lime">
              <Zap className="w-6 h-6 animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-widest">The FastPad Effect</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 text-white">
              Turning Time <br/> Into Revenue
            </h2>
            <p className="text-gray-400 font-light mb-6">
              Traditional padel is slow. FastPad format allows 2x-3x more games per hour, tripling throughput during peak hours.
            </p>
          </div>
          <div className="flex-1 w-full bg-black p-8 rounded-xl border border-white/10">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-500 uppercase mb-2">
                  <span>Traditional Hour</span>
                  <span>4 Players</span>
                </div>
                <div className="h-4 bg-gray-800 rounded w-1/3"></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-neon-lime uppercase mb-2">
                  <span>FastPad Hour</span>
                  <span>12 Players</span>
                </div>
                <div className="h-4 bg-neon-lime rounded w-full box-glow-lime shadow-[0_0_15px_#ACFF01]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.8 SHARE LOGIC (REDESIGNED 2.0) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Visual Representation (Split Bars) */}
            <div className="order-2 md:order-1 space-y-8">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 flex justify-between">
                <span>Total Revenue Split</span>
                <span>100%</span>
              </div>
              
              {/* The Split Bar - Seperated Layout */}
              <div className="flex gap-3 w-full h-24">
                {/* 75% Partner Share */}
                <div className="flex-[3] bg-carbon border border-white/10 rounded-xl relative flex flex-col items-center justify-center group hover:bg-white/5 transition-colors overflow-hidden">
                  <div className="absolute inset-0 bar-stripes opacity-10"></div>
                  <span className="relative z-10 text-3xl font-black text-gray-300">75%</span>
                  <div className="relative z-10 mt-1 text-[10px] font-mono text-gray-500 uppercase tracking-wider">Partner Retains</div>
                </div>
                
                {/* 25% PadWorld Share */}
                <div className="flex-[1] bg-neon-blue rounded-xl relative flex flex-col items-center justify-center shadow-[0_0_30px_rgba(45,214,255,0.4)] z-10 transform scale-105">
                  <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                  <span className="relative z-10 text-3xl font-black text-black">25%</span>
                  <div className="relative z-10 mt-1 text-[10px] font-mono text-black/80 font-bold uppercase tracking-wider">Platform</div>
                </div>
              </div>

              {/* Connecting Lines for Context */}
              <div className="flex justify-between text-xs font-mono text-gray-400 pt-2 px-2">
                <div className="w-[70%] text-center opacity-50">
                   Operational Revenue
                </div>
                <div className="w-[25%] text-center text-neon-blue font-bold">
                   Fee
                </div>
              </div>

            </div>

            {/* Text Context */}
            <div className="order-1 md:order-2">
               <div className="flex items-center gap-3 text-neon-blue mb-4">
                  <PieChart className="w-6 h-6" />
                  <span className="font-mono text-sm uppercase tracking-widest">Revenue Distribution</span>
               </div>
               <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                 Aligned for <br/>
                 <span className="text-white">Mutual Growth</span>
               </h2>
               <p className="text-xl text-gray-300 font-light mb-8 border-l-2 border-neon-blue pl-6">
                 "PadWorld only earns when the ecosystem performs. We don't take a fixed fee; we take a share of the success."
               </p>
               
               <div className="space-y-4">
                 <div className="flex gap-4 items-start">
                   <div className="mt-1 w-5 h-5 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-neon-blue" />
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-sm uppercase">25-30% Platform Share</h4>
                     <p className="text-gray-400 text-sm font-light mt-1">Covers global brand marketing, AI technology updates, and centralized support.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-sm uppercase">70-75% Partner Share</h4>
                     <p className="text-gray-400 text-sm font-light mt-1">Ensures the local operator has ample margin for reinvestment and profit taking.</p>
                   </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7.10 COMPOUNDING */}
      <section className="py-24 px-6 bg-grid border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
            It doesn't grow linearly.<br/>
            <span className="text-neon-lime">It compounds.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
            {["More Courts", "More Data", "Better AI", "Better Players", "More Demand"].map((step, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 group">
                 <div className="text-neon-blue font-mono font-bold uppercase border border-neon-blue/30 px-4 py-2 rounded bg-neon-blue/5 group-hover:bg-neon-blue/20 group-hover:border-neon-blue transition-all cursor-default">
                   {step}
                 </div>
                 {i < 4 && <div className="text-white text-xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.11 CTA */}
      <section className="h-screen flex flex-col items-center justify-center bg-black text-center px-6 border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-light text-white mb-4">
          PadWorld is not a cost-heavy sports project.
        </h2>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-12 tracking-tighter">
          It is a high-margin <span className="text-neon-lime">global platform</span>.
        </h2>
        
        <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none focus:outline-none">
          <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/20 group-hover:border-neon-lime transition-colors duration-300"></div>
          <div className="absolute inset-0 w-0 bg-neon-lime opacity-10 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-3 text-white font-mono uppercase tracking-widest text-sm group-hover:text-neon-lime transition-colors">
            Proceed to Competitive Advantage <TrendingUp className="w-4 h-4" />
          </span>
        </button>
      </section>
    </div>
  );
};

export default Dashboard;