import React from 'react';
import { Send, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';
import { INSTITUTE_INFO } from '../data/courses';

export default function CTASection({
  title = "Your Journey Towards a Successful Tech Career Starts Here.",
  subtitle = "Take the first step today. Join our next cohort of aspiring developers and gain real coding skills that make you job-ready.",
  courseName = ""
}) {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-[#0B0F17] text-white">
      {/* Decorative Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F00037]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4F7]/10 border border-[#F00037]/30 text-red-300 text-xs font-bold mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F00037]" />
          <span>New Batches Starting Soon • Classroom & Lab Seats</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Benefits bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F00037]" />
            <span>Structured Practical Lab Work</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F00037]" />
            <span>Personal Mentor Attention</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F00037]" />
            <span>Weekend & Weekday Batches</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openEnquiryModal(courseName)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm sm:text-base shadow-xl shadow-red-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Enquire for Admission</span>
          </button>

          <a
            href={`tel:${INSTITUTE_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-slate-200" />
            <span>Call Admissions Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
