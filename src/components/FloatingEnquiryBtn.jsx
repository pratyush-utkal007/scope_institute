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
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2.5 px-4.5 py-3.5 rounded-full bg-gradient-to-r from-[#041934] via-[#072449] to-[#041934] hover:from-[#0B254A] hover:to-[#0B254A] text-white font-bold text-sm shadow-xl shadow-slate-900/40 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#D39B3A]/50 hover:border-[#D39B3A] cursor-pointer group"
    >
      <div className="relative">
        <MessageSquareText className="w-5 h-5 text-[#F5C067]" />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D39B3A] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D39B3A]" />
        </span>
      </div>
      <span className="hidden sm:inline text-white">Enquire Now</span>
    </button>
  );
}
