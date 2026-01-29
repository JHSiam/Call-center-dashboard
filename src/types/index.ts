
// Added React import to provide access to React types like ReactNode
import React from 'react';

export interface StatData {
  label: string;
  value: string | number;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

export interface ActivityItem {
  id: string;
  text: string;
  time: string;
  status: 'success' | 'warning' | 'error' | 'info';
}

export interface RepairRequest {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface TranscriptMessage {
  speaker: 'AI Assistant' | 'Customer';
  text: string;
}

export interface CallLog {
  id: string;
  phoneNumber: string;
  dateTime: string;
  duration: string;
  status: 'AI Resolved' | 'Warm Transfer' | 'Appointment' | 'Dropped';
  issue: 'Screen' | 'Software' | 'Battery' | 'Unknown';
  outcome: string;
  transcript: TranscriptMessage[];
}

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  device: string;
  repairType: string;
  date: string;
  slotNo: number;
  startTime: string;
}
