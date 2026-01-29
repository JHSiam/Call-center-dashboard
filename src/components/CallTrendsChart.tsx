
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Mon', calls: 45 },
  { name: 'Tue', calls: 65 },
  { name: 'Wed', calls: 55 },
  { name: 'Thu', calls: 75 },
  { name: 'Fri', calls: 88 },
  { name: 'Sat', calls: 92 },
  { name: 'Sun', calls: 52 },
];

const CallTrendsChart: React.FC = () => {
  return (
    <div className="bg-[#111B3C] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-lg font-semibold text-white">Call Trends - This Week</h4>
          <p className="text-xs text-gray-400">Total: 472 calls</p>
        </div>
        <button className="flex items-center space-x-2 bg-gray-800/50 text-xs px-3 py-1.5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
          <span>This Week</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 10 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f1225', borderColor: '#1e293b', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="calls" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCalls)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendsChart;
