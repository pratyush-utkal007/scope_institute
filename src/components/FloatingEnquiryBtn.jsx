import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';

export default function FloatingEnquiryBtn() {
  const { openEnquiryModal, isOpen } = useEnquiry();

  // Hide button when modal is already open
  if (isOpen) return null;

  return (
    <button
      onClick={() => openEnquiryModal()}
      aria-label="Instant Admission Enquiry"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2.5 px-4.5 py-3.5 rounded-full bg-gradient-to-r from-[#F00037] to-[#D0002F] hover:from-[#D0002F] hover:to-[#B00025] text-white font-bold text-sm shadow-xl shadow-red-500/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer group"
    >
      <div className="relative">
        <MessageSquareText className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      </div>
      <span className="hidden sm:inline">Enquire Now</span>
    </button>
  );
}
