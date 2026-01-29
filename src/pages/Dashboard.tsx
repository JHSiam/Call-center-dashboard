
import React from 'react';
import { 
  Phone, 
  Bot, 
  ArrowRightLeft, 
  CalendarCheck, 
  AlertCircle, 
  Clock 
} from 'lucide-react';
// import StatCard from '../components/StatCard';
import CallTrendsChart from '../components/CallTrendsChart';
import RecentActivity from '../components/RecentActivity';
import TopRepairRequests from '../components/TopRepairRequests';
import StatCard from '../components/StatCard';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Calls Today', value: '127', trend: '+12%', isPositive: true, icon: <Phone size={20} />, iconBg: 'bg-blue-600' },
    { label: 'AI-Handled Calls', value: '98', trend: '+77%', isPositive: true, icon: <Bot size={20} />, iconBg: 'bg-purple-600' },
    { label: 'Warm Transfer', value: '23', trend: '+18%', isPositive: true, icon: <ArrowRightLeft size={20} />, iconBg: 'bg-orange-500' },
    { label: 'Appointments Booked', value: '34', trend: '+8%', isPositive: true, icon: <CalendarCheck size={20} />, iconBg: 'bg-green-600' },
    { label: 'Missed/Failed Calls', value: '6', trend: '-3%', isPositive: false, icon: <AlertCircle size={20} />, iconBg: 'bg-red-600' },
    { label: 'Avg Call Duration', value: '3:42', trend: '+15%', isPositive: true, icon: <Clock size={20} />, iconBg: 'bg-indigo-700' },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <CallTrendsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <TopRepairRequests />
      </div>
    </div>
  );
};

export default Dashboard;
