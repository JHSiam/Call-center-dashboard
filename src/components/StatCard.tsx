
import React from 'react';
import { StatData } from '../types';

const StatCard: React.FC<StatData> = ({ label, value, trend, isPositive, icon, iconBg }) => {
  return (
    <div className="bg-[#111B3C] p-6 rounded-2xl transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</p>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className={`text-xs font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {trend}
          </p>
        </div>
        <div className={`${iconBg} p-3 rounded-xl flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
