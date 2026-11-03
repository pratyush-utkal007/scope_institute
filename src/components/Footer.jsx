import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COURSES, INSTITUTE_INFO } from '../data/courses';
import { useEnquiry } from '../hooks/useEnquiry';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <footer className="bg-[#0B0F17] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Institute Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0B0F17] to-[#F00037] flex items-center justify-center text-white shadow-md border border-white/10">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  SCOPE <span className="text-[#F00037] font-bold">INSTITUTE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Coaching & Computer Training
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering students and job-seekers with hands-on, practical software and coding skills. Quality training, personal mentorship, and industry-ready curricula.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTITUTE_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F00037] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <FacebookIcon />
              </a>
              <a
                href={INSTITUTE_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F00037] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <TwitterIcon />
              </a>
              <a
                href={INSTITUTE_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F00037] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <InstagramIcon />
              </a>
              <a
                href={INSTITUTE_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F00037] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <LinkedinIcon />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#F00037] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F00037]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F00037] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F00037]" /> About Institute
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#F00037] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F00037]" /> All Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F00037] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F00037]" /> Contact & Admissions
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openEnquiryModal()}
                  className="hover:text-[#F00037] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#F00037]" /> Instant Course Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Courses */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-4">
              Our Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => openEnquiryModal(course.title)}
                    className="hover:text-[#F00037] transition-colors flex items-center justify-between w-full group cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#F00037] transition-colors" />
                      {course.title}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-400 group-hover:bg-[#F00037]/20 group-hover:text-[#F00037]">
                      {course.duration}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F00037] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">{INSTITUTE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F00037] shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-[#F00037] transition-colors font-semibold">
                  {INSTITUTE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F00037] shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="hover:text-[#F00037] transition-colors font-semibold">
                  {INSTITUTE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#F00037] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">{INSTITUTE_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SCOPE INSTITUTE. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#F00037]" />
            <span>Dedicated Computer Training & Practical Programming Coaching</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
