import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Terminal,
  Laptop,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';

export default function Hero() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9FB] via-white to-[#F8FAFC] pt-10 pb-16 md:pt-14 md:pb-20 border-b border-slate-100">
      {/* Decorative Subtle Background Aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6" data-aos="fade-up">
          {/* AlmaBetter-Style Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4F7] border border-[#F00037]/25 text-[#F00037] text-xs sm:text-sm font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#F00037] animate-ping" />
            <span>World-Class Computer Coaching • Engineered for Real Outcomes</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0F17] tracking-tight leading-[1.15]">
            Build Your Future with the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F00037] via-[#FF3366] to-[#2563EB]">
              Right Skills.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#0B0F17] leading-relaxed max-w-2xl mx-auto font-normal">
            Welcome to <strong className="text-slate-900 font-bold">SCOPE INSTITUTE</strong>. We bridge the gap between academic theory and practical software industry expectations with structured hands-on programming labs, 1:1 mentor coaching, and project portfolios.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm sm:text-base shadow-xl shadow-red-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-white/90" />
              <span>Explore Programs</span>
            </Link>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B0F17] border border-slate-300 font-bold text-sm sm:text-base shadow-xs hover:border-slate-400 transition-all cursor-pointer"
            >
              <span>Enquire for Admissions</span>
              <ArrowRight className="w-4 h-4 text-[#F00037]" />
            </button>
          </div>
        </div>

        {/* AlmaBetter-Style 3 Feature Highlight Cards */}
        {/* Unified Executive 3 Feature Highlight Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" data-aos="fade-up" data-aos-delay="100">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F00037]/40 card-hover-lift transition-all relative overflow-hidden group">
            <div className="h-1 w-full bg-[#F00037] absolute top-0 left-0" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold shrink-0 border border-[#F00037]/15">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Focus 01</span>
                <h3 className="text-base font-extrabold text-[#0B0F17] group-hover:text-[#F00037] transition-colors">
                  Hands-On Practical Labs
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#0B0F17] leading-relaxed font-normal">
              Spend 80% of your time writing, executing, and debugging code directly on lab machines under live instructor guidance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F00037]/40 card-hover-lift transition-all relative overflow-hidden group">
            <div className="h-1 w-full bg-[#F00037] absolute top-0 left-0" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold shrink-0 border border-[#F00037]/15">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Focus 02</span>
                <h3 className="text-base font-extrabold text-[#0B0F17] group-hover:text-[#F00037] transition-colors">
                  Industry-Grade Projects
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#0B0F17] leading-relaxed font-normal">
              Graduate with a verified GitHub portfolio of live applications in Python, React, JavaScript, and responsive CSS systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F00037]/40 card-hover-lift transition-all relative overflow-hidden group">
            <div className="h-1 w-full bg-[#F00037] absolute top-0 left-0" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold shrink-0 border border-[#F00037]/15">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Focus 03</span>
                <h3 className="text-base font-extrabold text-[#0B0F17] group-hover:text-[#F00037] transition-colors">
                  1:1 Doubt Mentorship
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#0B0F17] leading-relaxed font-normal">
              Never get stuck. Get individualized guidance, code reviews, and structured problem-solving support in every class.
            </p>
          </div>
        </div>

        {/* Executive Trust Ribbon with Black & Red Mix Theme */}
        <div className="mt-8 sm:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#070A0F] via-[#14060A] to-[#070A0F] border border-red-950/60 p-3 sm:p-5 lg:p-6 shadow-2xl">
          {/* Ambient Red Glow Lights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-12 left-1/4 w-64 h-24 bg-[#F00037]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 right-1/4 w-64 h-24 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161B26]/80 border border-slate-800/80 hover:border-[#F00037]/60 hover:shadow-lg hover:shadow-red-600/15 hover:-translate-y-0.5 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-[#F00037]/30 text-white flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#F00037] transition-all duration-300">
                4
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-red-300 transition-colors">
                  Core Tech Tracks
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 font-medium mt-1 leading-snug">
                  Python, HTML/CSS, JS, React
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161B26]/80 border border-slate-800/80 hover:border-[#F00037]/60 hover:shadow-lg hover:shadow-red-600/15 hover:-translate-y-0.5 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-[#F00037]/30 text-white flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#F00037] transition-all duration-300">
                80%
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-red-300 transition-colors">
                  Practical Lab Work
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 font-medium mt-1 leading-snug">
                  Active coding on machines
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161B26]/80 border border-slate-800/80 hover:border-[#F00037]/60 hover:shadow-lg hover:shadow-red-600/15 hover:-translate-y-0.5 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-[#F00037]/30 text-white flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#F00037] transition-all duration-300">
                1:1
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-red-300 transition-colors">
                  Doubt Resolution
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 font-medium mt-1 leading-snug">
                  Instructor-led attention
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#161B26]/80 border border-slate-800/80 hover:border-[#F00037]/60 hover:shadow-lg hover:shadow-red-600/15 hover:-translate-y-0.5 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-[#F00037]/30 text-white flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#F00037] transition-all duration-300">
                ✓
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-red-300 transition-colors">
                  Beginner-Friendly
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 group-hover:text-slate-300 font-medium mt-1 leading-snug">
                  No prior coding needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
