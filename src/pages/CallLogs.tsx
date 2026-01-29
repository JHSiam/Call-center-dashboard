
import React, { useState } from 'react';
import { Search, ChevronDown, Phone, Clock, PlayCircle, FileText, CheckCircle, Info } from 'lucide-react';
import { CallLog } from '../types';

const mockCalls: CallLog[] = [
  {
    id: '1',
    phoneNumber: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '4:32',
    status: 'AI Resolved',
    issue: 'Screen',
    outcome: 'Quote provided',
    transcript: [
      { speaker: 'AI Assistant', text: 'Thank you for calling UBreakiFix! How can I help you today?' },
      { speaker: 'Customer', text: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?' },
      { speaker: 'AI Assistant', text: 'I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?' },
      { speaker: 'Customer', text: 'Yes, please! When are you available?' },
      { speaker: 'AI Assistant', text: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?' }
    ]
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'Warm Transfer',
    issue: 'Software',
    outcome: 'Escalated to technician',
    transcript: [
      { speaker: 'AI Assistant', text: 'Hello, how can I assist you today?' },
      { speaker: 'Customer', text: 'My laptop keeps freezing on the boot screen. I tried restarting it but nothing works.' },
      { speaker: 'AI Assistant', text: 'I understand. That sounds like it might be a firmware or drive issue. Let me connect you with one of our senior technicians who can diagnose this specifically.' }
    ]
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'Appointment',
    issue: 'Battery',
    outcome: 'Appointment Booked',
    transcript: [
      { speaker: 'AI Assistant', text: 'Welcome to Service AI. How can I help?' },
      { speaker: 'Customer', text: 'My iPad battery dies in like 30 minutes.' },
      { speaker: 'AI Assistant', text: 'We can certainly replace that battery for you. I have booked you in for tomorrow at 3 PM.' }
    ]
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '0:20',
    status: 'Dropped',
    issue: 'Unknown',
    outcome: 'Call Dropped',
    transcript: [
      { speaker: 'AI Assistant', text: 'Hello? Is anyone there?' }
    ]
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'AI Resolved',
    issue: 'Screen',
    outcome: 'Quote Provided',
    transcript: [
      { speaker: 'AI Assistant', text: 'How can I help?' },
      { speaker: 'Customer', text: 'Need a price for a Samsung S22 screen.' }
    ]
  }
];

const CallLogs: React.FC = () => {
  const [selectedCallId, setSelectedCallId] = useState<string>(mockCalls[0].id);
  const selectedCall = mockCalls.find(c => c.id === selectedCallId) || mockCalls[0];

  const getStatusBadge = (status: CallLog['status']) => {
    switch (status) {
      case 'AI Resolved': return <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-tighter">AI Resolved</span>;
      case 'Warm Transfer': return <span className="bg-orange-500/10 text-orange-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/20 uppercase tracking-tighter">Warm Transfer</span>;
      case 'Appointment': return <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-tighter">Appointment</span>;
      case 'Dropped': return <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/20 uppercase tracking-tighter">Dropped</span>;
      default: return null;
    }
  };

  const getIssueTag = (issue: CallLog['issue']) => {
    return <span className="bg-blue-600/20 text-blue-400 text-[10px] font-medium px-2 py-0.5 rounded-md border border-blue-500/10 ml-2">{issue}</span>;
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by phone number, issue type..." 
            className="w-full bg-[#111B3C] border border-gray-800 rounded-xl py-2.5 pl-11 pr-4 text-sm text-gray-200 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
        
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 md:pb-0">
          {[ 'All Type', 'All Issues', 'Today' ].map((filter) => (
            <button key={filter} className="flex items-center space-x-2 bg-[#111B3C] border border-gray-800 text-xs px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap">
              <span>{filter}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Side: Call List */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-white px-2">Call List</h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            {mockCalls.map((call) => (
              <div 
                key={call.id}
                onClick={() => setSelectedCallId(call.id)}
                className={`
                  p-5 rounded-2xl border transition-all cursor-pointer group
                  ${selectedCallId === call.id 
                    ? 'bg-[#1a2344] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                    : 'bg-[#111B3C] border-gray-800 hover:border-gray-700'}
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2B7FFF] p-2.5 rounded-xl border border-blue-500/20">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">{call.phoneNumber}</h4>
                      <p className="text-xs text-gray-500">{call.dateTime}</p>
                    </div>
                  </div>
                  {getStatusBadge(call.status)}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 justify-center">
                    <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{call.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{call.outcome}</span>
                    </div>
                    {call.issue !== 'Unknown' && getIssueTag(call.issue)}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Call Details */}
        <div className="hidden md:flex md:w-1/2 flex-col space-y-4 bg-[#111B3C] border border-gray-800 rounded-3xl p-8 overflow-hidden">
          <h2 className="text-lg font-semibold text-white">Call Details</h2>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-8">
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Phone Number</p>
                <p className="text-sm text-gray-200 font-medium">{selectedCall.phoneNumber}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm text-gray-200 font-medium">{selectedCall.duration}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Date & Time</p>
                <p className="text-sm text-gray-200 font-medium">{selectedCall.dateTime}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Issue Type</p>
                <p className="text-sm text-gray-200 font-medium">{selectedCall.issue}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Call Type</p>
                <div className="mt-1">{getStatusBadge(selectedCall.status)}</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Outcome</p>
                <p className="text-sm text-gray-200 font-medium">{selectedCall.outcome}</p>
              </div>
            </div>

            {/* Audio Button */}
            <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#AD46FF]/50 to-[#F6339A]/50 border border-purple-500/30 hover:border-purple-500/60 py-4 rounded-2xl transition-all">
              <PlayCircle className="w-6 h-6 text-purple-400" />
              <span className="text-purple-100 font-semibold text-sm">Play Audio Recording</span>
            </button>

            {/* Transcript */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Conversation Transcript</h3>
              </div>
              
              <div className="bg-[#111B3C] border border-gray-800 rounded-2xl p-6 space-y-6 max-h-[400px] overflow-y-auto">
                {selectedCall.transcript.map((msg, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${msg.speaker === 'AI Assistant' ? 'text-green-500' : 'text-blue-500'}`}>
                      {msg.speaker}:
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator (Aesthetic) */}
      <div className="flex justify-center pt-2">
        <div className="w-12 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 w-1/2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
