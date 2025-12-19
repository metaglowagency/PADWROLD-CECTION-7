import React, { useState, useMemo, useEffect } from 'react';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';

const AnimatedValue = ({ value, format }: { value: number, format: (v: number) => string }) => {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 600; 
    const startValue = displayValue;
    const change = value - startValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(startValue + (change * ease));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [value]);

  return <>{format(displayValue)}</>;
};

const UnitEconomics: React.FC = () => {
  const [courts, setCourts] = useState(12);
  const [price, setPrice] = useState(60);
  const [occupancy, setOccupancy] = useState(65);
  const [ancillary, setAncillary] = useState(15);

  const stats = useMemo(() => {
    const hoursPerDay = 12;
    const daysPerYear = 360;
    const courtRevenue = courts * price * hoursPerDay * daysPerYear * (occupancy / 100);
    const visitorsPerYear = courts * 4 * hoursPerDay * daysPerYear * (occupancy / 100);
    const ancillaryRevenue = visitorsPerYear * ancillary;
    const totalRevenue = courtRevenue + ancillaryRevenue;
    const margin = 38 + (occupancy > 70 ? 4 : 0);
    const ebitda = totalRevenue * (margin / 100);
    const capex = (courts * 65000) + 250000;
    const paybackMonths = (capex / ebitda) * 12;

    return { totalRevenue, ebitda, margin, paybackMonths, visitorsPerYear };
  }, [courts, price, occupancy, ancillary]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD',
      maximumFractionDigits: 0,
      notation: val > 1000000 ? 'compact' : 'standard'
    }).format(val);
  };

  const formatNumber = (val: number) => Math.round(val).toLocaleString();
  const formatDecimal = (val: number) => val.toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-carbon/80 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-lime/5 blur-[100px] pointer-events-none"></div>
      
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-10">
        <div className="flex items-center gap-3 text-neon-lime">
           <Activity size={20} className="animate-pulse" />
           <h3 className="text-xl font-bold uppercase tracking-widest">Revenue Config</h3>
        </div>

        <div className="space-y-8">
          <InputSlider label="Total Courts" value={courts} min={4} max={30} onChange={setCourts} unit="Courts" />
          <InputSlider label="Price / Hour" value={price} min={30} max={150} onChange={setPrice} unit="$" prefix />
          <InputSlider label="Occupancy" value={occupancy} min={20} max={98} onChange={setOccupancy} unit="%" />
          <InputSlider label="Ancillary Rev" value={ancillary} min={0} max={60} onChange={setAncillary} unit="$" prefix />
        </div>
      </div>

      {/* Outputs */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 glass p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity text-neon-blue"><TrendingUp size={28} /></div>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Annualized Revenue</p>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              <AnimatedValue value={stats.totalRevenue} format={formatCurrency} />
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-l-4 border-l-neon-lime">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">EBITDA ({stats.margin}%)</p>
            <div className="text-3xl font-black text-neon-lime text-glow-lime">
               <AnimatedValue value={stats.ebitda} format={formatCurrency} />
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-l-4 border-l-neon-blue">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Payback Period</p>
            <div className="text-3xl font-black text-white tracking-tighter">
              <AnimatedValue value={stats.paybackMonths} format={formatDecimal} /> <span className="text-sm font-mono text-gray-500">MO</span>
            </div>
          </div>
          
          <div className="col-span-2 flex items-center justify-between px-4 py-2 bg-white/5 rounded-full border border-white/5">
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                <Users size={14} /> Annual Foot Traffic
             </div>
             <div className="font-bold text-neon-blue font-mono">
                <AnimatedValue value={stats.visitorsPerYear} format={formatNumber} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputSlider = ({ label, value, min, max, onChange, unit, prefix }: any) => (
  <div className="group">
    <div className="flex justify-between mb-3 font-mono text-[10px] uppercase tracking-widest">
      <span className="text-gray-500 group-hover:text-white transition-colors">{label}</span>
      <span className="text-neon-lime font-bold">{prefix ? unit : ''}{value}{!prefix ? unit : ''}</span>
    </div>
    <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full h-1 bg-white/10 rounded-full accent-neon-lime" />
  </div>
);

export default UnitEconomics;