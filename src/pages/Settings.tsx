
import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  const profileData = [
    { label: 'Full Name:', value: 'Jane D.' },
    { label: 'Email:', value: 'jane@gmail.com' },
    { label: 'Store Name:', value: 'Ubreakfix Store' },
    { label: 'Store Address:', value: '123 Main Street, New York, NY 10001' },
  ];

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500 ">
      {/* Tabs */}
      <div className="flex space-x-12 border-b border-gray-800/50 mb-10 pb-1">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-4 text-lg font-medium transition-all relative ${
            activeTab === 'profile' ? 'text-white' : 'text-white hover:text-gray-300'
          }`}
        >
          Profile
          {activeTab === 'profile' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`pb-4 text-lg font-medium transition-all relative ${
            activeTab === 'password' ? 'text-white' : 'text-white hover:text-gray-300'
          }`}
        >
          Password Settings
          {activeTab === 'password' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5"></div>
          )}
        </button>
      </div>

      {activeTab === 'profile' ? (
        <div className="space-y-2">
          {/* Profile Image Section */}
          <div className="space-y-6">
            <h3 className="text-gray-300 text-sm font-medium">Profile Image</h3>
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded-full border-2 border-blue-500/20 p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="Avatar Style 6.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <button className="flex items-center gap-3 px-2 py-1 rounded-[12px] transition border justify-start">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Details List */}
          <div className="space-y-1">
            {profileData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center py-6 border-b border-gray-800/30 group hover:bg-white/[0.01] transition-colors px-2 rounded-lg"
              >
                <div className="w-1/3">
                  <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                </div>
                <div className="w-2/3">
                  <span className="text-gray-200 text-sm font-semibold">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      ) : (
        <div className="space-y-8 max-w-md bg-[#111B3C] p-8 rounded-3xl border border-gray-800/50">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Current Password</label>
              <input 
                type="password" 
                className="w-full bg-[#111B3C] border border-gray-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">New Password</label>
              <input 
                type="password" 
                className="w-full bg-[#111B3C] border border-gray-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Confirm Password</label>
              <input 
                type="password" 
                className="w-full bg-[#111B3C] border border-gray-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-[0.98]">
            Update Password
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
