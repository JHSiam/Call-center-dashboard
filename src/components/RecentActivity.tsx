
import React from 'react';
import { ActivityItem } from '../types';

const activities: ActivityItem[] = [
  { id: '1', text: 'AI booked appointment for iPhone 13 screen repair', time: '2 min ago', status: 'success' },
  { id: '2', text: 'Warm transfer to technician - Software issue', time: '5 min ago', status: 'warning' },
  { id: '3', text: 'Quote provided for iPad battery replacement', time: '8 min ago', status: 'success' },
  { id: '4', text: 'Call dropped after 12 seconds', time: '15 min ago', status: 'error' },
];

const RecentActivity: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-orange-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-[#111B3C] p-6 rounded-2xl h-full">
      <h4 className="text-lg font-semibold text-white mb-6">Recent Activity</h4>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-[#161b33] p-4 rounded-xl border border-transparent hover:border-gray-700 transition-all flex items-start space-x-4">
            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${getStatusColor(activity.status)}`}></div>
            <div className="space-y-1">
              <p className="text-sm text-gray-200">{activity.text}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
