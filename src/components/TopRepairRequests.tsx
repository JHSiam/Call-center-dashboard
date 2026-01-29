
import React from 'react';
import { RepairRequest } from '../types';

const requests: RepairRequest[] = [
  { label: 'Screen Repair', count: 156, percentage: 85, color: '#06b6d4' },
  { label: 'Battery Replacement', count: 89, percentage: 55, color: '#3b82f6' },
  { label: 'Back Glass Repair', count: 67, percentage: 40, color: '#2563eb' },
  { label: 'Software Issues', count: 45, percentage: 25, color: '#1d4ed8' },
];

const TopRepairRequests: React.FC = () => {
  return (
    <div className="bg-[#111B3C] p-6 rounded-2xl h-full">
      <h4 className="text-lg font-semibold text-white mb-6">Top Repair Requests</h4>
      <div className="space-y-6">
        {requests.map((request) => (
          <div key={request.label} className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">{request.label}</span>
              <span className="text-gray-500">{request.count} requests</span>
            </div>
            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]"
                style={{ width: `${request.percentage}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRepairRequests;
