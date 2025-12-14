import React, { useState, useMemo } from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

const UnitEconomics: React.FC = () => {
  const [courts, setCourts] = useState(12);
  const [price, setPrice] = useState(60);
  const [occupancy, setOccupancy] = useState(65);
  const [ancillary, setAncillary] = useState(15);

  const stats = useMemo(() => {
    // Basic Assumptions
    const hoursPerDay = 12;
    const daysPerYear = 360; // 5 days maintenance
    
    // Core Court Revenue
    const courtRevenue = courts * price * hoursPerDay * daysPerYear * (occupancy / 100);
    
    // Ancillary Revenue (Food, Bev, Merch per player)
    // Assuming 4 players per court hour occupied
    const visitorsPerYear = courts * 4 * hoursPerDay * daysPerYear * (occupancy / 100);
    const ancillaryRevenue = visitorsPerYear * ancillary;
    
    const totalRevenue = courtRevenue + ancillaryRevenue;
    
    // EBITDA margin (Simplified assumption: starts at 30%, scales to 45% with efficiency)
    const margin = 35 + (occupancy > 70 ? 5 : 0) + (courts > 15 ? 2 : 0);
    const ebitda = totalRevenue * (margin / 100);
    
    // Setup cost (approx $60k per court + $300k base infra)
    const capex = (courts * 60000) + 300000;
    const paybackMonths = (capex / ebitda) * 12;

    return {
      totalRevenue,
      ebitda,
      margin,
      paybackMonths,
      visitorsPerYear
    };
  }, [courts, price, occupancy, ancillary]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      notation: val > 1000000 ? 'compact' : 'standard'
    }).format(val);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 bg-carbon/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
      
      {/* Inputs */}
      <div className="lg:col-span-5 space-y-8">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
          <span className="text-neon-lime">///</span> Control Center
        </h3>

        <div className="space-y-6">
          <InputSlider 
            label="Number of Courts" 
            value={courts} 
            min={4} 
            max={24} 
            onChange={setCourts} 
            unit="Courts"
          />
          <InputSlider 
            label="Avg Price / Hour" 
            value={price} 
            min={30} 
            max={120} 
            onChange={setPrice} 
            unit="$"
            prefix
          />
          <InputSlider 
            label="Occupancy Rate" 
            value={occupancy} 
            min={30} 
            max={95} 
            onChange={setOccupancy} 
            unit="%"
          />
          <InputSlider 
            label="Ancillary Spend / Visit" 
            value={ancillary} 
            min={5} 
            max={50} 
            onChange={setAncillary} 
            unit="$"
            prefix
          />
        </div>

        <p className="text-xs text-gray-500 font-mono pt-4 border-t border-white/10">
          *Estimates based on global PadWorld performance data. Not a guarantee of future returns.
        </p>
      </div>

      {/* Outputs */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4">
          
          {/* Revenue Card */}
          <div className="col-span-2 bg-black/40 border border-white/10 p-6 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-white/20 group-hover:text-neon-blue transition-colors">
              <TrendingUp className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-neon-blue uppercase tracking-widest mb-1">Total Annual Revenue</p>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              {formatCurrency(stats.totalRevenue)}
            </div>
          </div>

          {/* EBITDA Card */}
          <div className="col-span-2 md:col-span-1 bg-black/40 border border-white/10 p-6 rounded-lg relative group">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-neon-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">EBITDA ({stats.margin}%)</p>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter text-glow-lime">
              {formatCurrency(stats.ebitda)}
            </div>
          </div>

          {/* Payback Card */}
          <div className="col-span-2 md:col-span-1 bg-black/40 border border-white/10 p-6 rounded-lg relative group">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Est. Payback Period</p>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
              {stats.paybackMonths.toFixed(1)} <span className="text-base font-normal text-gray-400">Months</span>
            </div>
          </div>

          {/* Traffic Card */}
          <div className="col-span-2 bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="text-gray-400 w-5 h-5" />
              <span className="text-sm text-gray-300">Annual Visitor Traffic</span>
            </div>
            <span className="font-mono text-neon-lime font-bold">{Math.round(stats.visitorsPerYear).toLocaleString()}</span>
          </div>

        </div>
        
        <div className="mt-8 text-center lg:text-right">
          <p className="text-xl font-light text-white">
            "Each center is profitable on its own. <span className="text-neon-blue font-semibold">Scale multiplies returns.</span>"
          </p>
        </div>
      </div>
    </div>
  );
};

interface InputSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
  unit: string;
  prefix?: boolean;
}

const InputSlider: React.FC<InputSliderProps> = ({ label, value, min, max, onChange, unit, prefix }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-widest">
        <span className="text-gray-400 group-hover:text-white transition-colors">{label}</span>
        <span className="text-neon-lime">
          {prefix ? unit : ''}{value}{!prefix ? unit : ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
};

export default UnitEconomics;
