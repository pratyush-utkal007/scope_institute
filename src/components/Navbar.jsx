import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight, Sparkles, ChevronDown, BookOpen } from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';

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
      {/* AlmaBetter-Style Top Announcement Bar */}
      <div className="bg-[#0B0F17] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F00037] text-white font-bold text-[10px] uppercase tracking-wider">
              New Batches
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Admissions Open for Practical Tech & Coding Tracks • Limited Lab Seats Available
            </span>
            <span className="text-slate-300 sm:hidden">
              Admissions Open for 2026 Batches
            </span>
          </div>

          <button
            onClick={() => openEnquiryModal()}
            className="text-sky-300 hover:text-white font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Enquire for Free Counselling</span>
            <ArrowRight className="w-3 h-3 text-[#F00037]" />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="SCOPE INSTITUTE Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#102A43] via-[#0B0F17] to-[#F00037] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#0B0F17] leading-none">
                  SCOPE <span className="text-[#F00037] font-extrabold">INSTITUTE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-800 mt-0.5">
                  Coaching & Computer Training
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-[#F00037] bg-[#FFF4F7] border border-[#F00037]/20 hover:bg-[#FFE8EE] transition-colors mr-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#F00037]" />
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#F00037]" />
              </Link>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-[#F00037] font-bold bg-[#FFF4F7]'
                        : 'text-[#0B0F17] hover:text-[#F00037] hover:bg-slate-50'
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white text-sm font-bold shadow-md shadow-red-500/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#F00037] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                      `px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'text-[#F00037] bg-[#FFF4F7] font-bold'
                          : 'text-slate-700 hover:text-[#F00037] hover:bg-slate-50'
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
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
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
