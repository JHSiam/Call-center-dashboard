
import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Copy, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Appointment } from '../types';

const mockAppointments: Appointment[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `${i + 1}`,
  clientName: 'Jane.D',
  clientPhone: '01960885765',
  clientEmail: 'admin@gmail.com',
  device: 'Apple/Iphone 13pro',
  repairType: 'Screen',
  date: '02/06/2026',
  slotNo: 1,
  startTime: `${9 + i}:00`.padStart(5, '0'),
}));

const Appointments: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const bookingLink = 'https://techstore.com/book?id=store123';

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Summary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Booked */}
        <div className="bg-[#111B3C] border border-gray-800 p-6 rounded-2xl">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-medium">Total Booked</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-white">34</h3>
            <p className="text-xs text-green-500 font-medium">+8 this week</p>
          </div>
        </div>

        {/* AI Booked */}
        <div className="bg-[#111B3C] border border-gray-800 p-6 rounded-2xl">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-xs font-medium">AI Booked</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-white">28</h3>
            <p className="text-xs text-gray-500 font-medium">82% of total</p>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-[#111B3C] border border-gray-800 p-6 rounded-2xl">
          <div className="flex items-center space-x-3 text-gray-400 mb-4">
            <Clock className="w-5 h-5 text-yellow-500" />
            <span className="text-xs font-medium">Pending</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-white">3</h3>
            <p className="text-xs text-gray-500 font-medium">Awaiting confirmation</p>
          </div>
        </div>
      </div>

      {/* Booking Link Section */}
      <div className="bg-[#111B3C] border border-gray-800 p-6 rounded-2xl space-y-4">
        <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Booking Link</h4>
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="flex-1 bg-[#050714] border border-gray-800 rounded-xl px-4 py-3 text-gray-400 text-sm font-mono truncate">
            {bookingLink}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 px-8 py-4 rounded-[12px] transition border justify-start shadow-[0_0_24px_rgba(255,255,255,0.35)]"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-blue-400" />}
            <span className="text-sm font-semibold text-blue-100">{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-[#111B3C] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            {/* Desktop Header */}
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-gray-800">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Client Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Client Phone</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Client Mail</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Device</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Repair Type</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Slot No</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Start Time</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800/50">
              {mockAppointments.map((apt) => (
                <tr
                  key={apt.id}
                  className="
              block md:table-row
              p-4 md:p-0
              border-b border-gray-800
              hover:bg-gray-800/20 transition-colors
            "
                >
                  {/* Client Name */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm">
                    <span className="md:hidden text-gray-500 text-xs">Client Name</span>
                    <p className="font-medium text-blue-400 cursor-pointer hover:underline">
                      {apt.clientName}
                    </p>
                  </td>

                  {/* Phone */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-300">
                    <span className="md:hidden text-gray-500 text-xs">Phone</span>
                    {apt.clientPhone}
                  </td>

                  {/* Email */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-400">
                    <span className="md:hidden text-gray-500 text-xs">Email</span>
                    {apt.clientEmail}
                  </td>

                  {/* Device */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-300">
                    <span className="md:hidden text-gray-500 text-xs">Device</span>
                    {apt.device}
                  </td>

                  {/* Repair Type */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-400">
                    <span className="md:hidden text-gray-500 text-xs">Repair Type</span>
                    {apt.repairType}
                  </td>

                  {/* Date */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-300">
                    <span className="md:hidden text-gray-500 text-xs">Date</span>
                    {apt.date}
                  </td>

                  {/* Slot */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-300">
                    <span className="md:hidden text-gray-500 text-xs">Slot No</span>
                    {apt.slotNo}
                  </td>

                  {/* Time */}
                  <td className="block md:table-cell px-0 md:px-6 py-2 md:py-5 text-sm text-gray-300">
                    <span className="md:hidden text-gray-500 text-xs">Start Time</span>
                    {apt.startTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-2 pt-4 pb-10">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-white transition-colors px-3 py-1">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-xs font-medium">Previous</span>
        </button>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5, '...', 11].map((page, i) => (
            <button
              key={i}
              className={`
                w-8 h-8 rounded-lg text-xs font-semibold transition-all
                ${page === 2
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : page === '...'
                    ? 'text-gray-600 cursor-default'
                    : 'text-gray-500 hover:text-white'}
              `}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-white transition-colors px-3 py-1">
          <span className="text-xs font-medium">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>

  );
};

export default Appointments;
