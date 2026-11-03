import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layout,
  FileCode2,
  Atom,
  Clock,
  BarChart,
  ArrowRight,
  Send,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';

const iconMap = {
  Code2,
  Layout,
  FileCode2,
  Atom
};

export default function CourseCard({ course, isDetailed = false }) {
  const { openEnquiryModal } = useEnquiry();
  const IconComponent = iconMap[course.iconName] || Code2;

  return (
    <div
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#F00037]/30 card-hover-lift transition-all duration-300 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Top Landscape Image Banner (AlmaBetter Program Card Style) */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={course.image}
          alt={`${course.title} course at SCOPE INSTITUTE`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Badge on Top of Image */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F00037] text-white shadow-md">
            {course.badge}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800">
            {course.duration}
          </span>
        </div>

        {/* Floating Course Icon & Title Over Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#F00037] flex items-center justify-center shrink-0 shadow-md">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white leading-tight drop-shadow-sm group-hover:text-red-200 transition-colors">
              {course.title}
            </h3>
            <span className="text-[11px] text-slate-200">{course.level} • {course.mode}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Short Description */}
        <p className="text-sm text-[#0B0F17] font-normal line-clamp-2 leading-relaxed mb-4">
          {course.shortDescription}
        </p>

        {/* What You Will Learn Bullet Points */}
        <div className="mb-4 space-y-1.5 flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Curriculum Highlights
          </h4>
          {course.whatYouWillLearn.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#0B0F17] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F00037] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Skills Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
          {course.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/15"
            >
              {skill}
            </span>
          ))}
          {course.skills.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md text-[11px] font-semibold text-[#0B0F17] bg-slate-100">
              +{course.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons (AlmaBetter Style) */}
      <div className="p-6 pt-0 bg-white grid grid-cols-2 gap-2.5">
        <Link
          to={`/courses#${course.id}`}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-[#0B0F17] hover:text-[#F00037] text-xs font-bold bg-slate-50/60 hover:bg-slate-100 transition-colors"
        >
          <span>Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => openEnquiryModal(course.title)}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white text-xs font-bold shadow-md shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
