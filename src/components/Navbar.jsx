import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, ChevronDown, BookOpen } from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';
import { getAssetUrl } from '../utils/assets';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openEnquiryModal } = useEnquiry();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Contact & Admissions', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#041934] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-[#D39B3A]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#D39B3A] to-[#B88226] text-[#041934] font-black text-[10px] uppercase tracking-wider shadow-xs">
              New Batches
            </span>
            <span className="text-slate-200 hidden sm:inline">
              Admissions Open for Practical Tech & Coding Tracks • Limited Lab Seats Available
            </span>
            <span className="text-slate-200 sm:hidden">
              Admissions Open for 2026 Batches
            </span>
          </div>

          <button
            onClick={() => openEnquiryModal()}
            className="text-[#F5C067] hover:text-white font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Enquire for Free Counselling</span>
            <ArrowRight className="w-3 h-3 text-[#D39B3A]" />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2 sm:py-2.5'
            : 'bg-white border-b border-slate-100 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none"
              aria-label="SCOPE INSTITUTE Home"
            >
              <img
                src={getAssetUrl("/images/scope_logo.png")}
                alt="SCOPE Institute Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-[#041934] leading-none">
                  SCOPE <span className="text-[#D39B3A]">INSTITUTE</span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-500 mt-1">
                  Coaching & Computer Training
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold text-[#041934] bg-[#FDF9F0] border border-[#D39B3A]/30 hover:bg-[#F8EED4] transition-colors mr-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D39B3A]" />
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D39B3A]" />
              </Link>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-[#041934] font-bold bg-[#FDF9F0] border-b-2 border-[#D39B3A]'
                        : 'text-slate-700 hover:text-[#041934] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action CTA Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D39B3A] via-[#C89332] to-[#B88226] hover:from-[#B88226] hover:to-[#A3701B] text-white text-sm font-bold shadow-md shadow-amber-500/25 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#041934] hover:bg-[#FDF9F0] transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#041934]" /> : <Menu className="w-6 h-6 text-[#041934]" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-3 pb-4 border-t border-slate-100 mt-3 animate-fadeIn">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-[#041934] bg-[#FDF9F0] font-bold border-l-4 border-[#D39B3A]'
                          : 'text-slate-700 hover:text-[#041934] hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 mt-2 border-t border-slate-100 px-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiryModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#041934] to-[#0B254A] border border-[#D39B3A]/40 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D39B3A]" />
                  <span>Enquire for Admissions</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
