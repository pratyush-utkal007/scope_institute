import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  BarChart,
  CheckCircle2,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  ArrowRight,
  Search,
  Code2,
  FolderGit2,
  Briefcase,
  Terminal,
  Laptop,
  Users2,
  ShieldCheck,
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { useEnquiry } from '../hooks/useEnquiry';
import CTASection from '../components/CTASection';

export default function Courses() {
  const { openEnquiryModal } = useEnquiry();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCurriculum, setExpandedCurriculum] = useState({});
  const [activeTabByCourse, setActiveTabByCourse] = useState({});

  useEffect(() => {
    document.title = 'Professional Courses & Training Tracks – SCOPE INSTITUTE';
    window.scrollTo(0, 0);
  }, []);

  const toggleCurriculum = (courseId) => {
    setExpandedCurriculum(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const setCourseTab = (courseId, tab) => {
    setActiveTabByCourse(prev => ({
      ...prev,
      [courseId]: tab
    }));
  };

  // Filter and search logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : selectedCategory === 'Beginner'
        ? course.level.toLowerCase().includes('beginner')
        : course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. AlmaBetter-Style Dark Hero Header */}
      <section className="bg-[#0B0F17] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F00037]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-red-300 text-xs sm:text-sm font-bold mb-5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#F00037]" />
            <span>Practical Computer Coaching • Engineered for Real Tech Outcomes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Master High-Demand Programming Skills with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F00037] via-[#FF4D79] to-[#38BDF8]">
              Hands-On Lab Practice.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose from industry-aligned tech tracks. Every program includes dedicated lab practice, 1:1 mentor code reviews, real Git projects, and verified certification.
          </p>

          {/* Quick Stats Pill Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F00037]" /> 4 In-Demand Tracks
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F00037]" /> 80% Practical Lab Work
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F00037]" /> 1:1 Doubt Mentoring
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F00037]" /> Verified Portfolio
            </span>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filter Navigation Bar */}
      <section className="sticky top-[108px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { label: 'All Programs', value: 'All', count: COURSES.length },
                { label: 'Web Development', value: 'Web Development', count: 3 },
                { label: 'Programming & Logic', value: 'Programming & Logic', count: 1 },
                { label: 'Beginner Friendly', value: 'Beginner', count: 2 }
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat.value
                      ? 'bg-[#F00037] text-white shadow-md shadow-red-500/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.value ? 'bg-white/25 text-white' : 'bg-white text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, tools, tracks..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#F00037] focus:ring-2 focus:ring-red-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Modern Program Cards Grid (AlmaBetter 2-Column Format) */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No programs found</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for "Python", "React", "JavaScript", or reset filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#F00037] text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCourses.map((course, index) => {
                const isCurriculumOpen = Boolean(expandedCurriculum[course.id]);
                const currentTab = activeTabByCourse[course.id] || 'overview';

                return (
                  <div
                    key={course.id}
                    id={course.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#F00037]/40 card-hover-lift transition-all duration-300 overflow-hidden flex flex-col justify-between"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div>
                      {/* Landscape Image Banner with AlmaBetter Badges */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                        <img
                          src={course.image}
                          alt={`${course.title} course at SCOPE INSTITUTE`}
                          className="w-full h-full object-cover opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-slate-950/40 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F00037] text-white shadow-md">
                            {course.badge}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#F00037]" /> {course.duration}
                          </span>
                        </div>

                        {/* Bottom Title on Image */}
                        <div className="absolute bottom-4 left-5 right-5 text-white">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-red-300 block mb-1">
                            {course.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                            {course.title}
                          </h2>
                          <p className="text-xs text-slate-300 mt-1 line-clamp-1">{course.tagline}</p>
                        </div>
                      </div>

                      {/* Next Batch Schedule Alert Ribbon */}
                      <div className="px-6 py-2.5 bg-[#FFF4F7] border-b border-[#F00037]/15 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-800 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-[#F00037]" />
                          <span>{course.nextBatch}</span>
                        </div>
                        <span className="font-bold text-[#F00037]">{course.seatsRemaining}</span>
                      </div>

                      {/* Card Content & Interactive Tabs */}
                      <div className="p-6 sm:p-8">
                        {/* Specs Grid (Duration, Hours, Mode, Level) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
                            <span className="font-bold text-slate-800">{course.duration}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Lab Hours</span>
                            <span className="font-bold text-slate-800">{course.hours}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Level</span>
                            <span className="font-bold text-slate-800">{course.level}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Mode</span>
                            <span className="font-bold text-slate-800">{course.mode}</span>
                          </div>
                        </div>

                        {/* Segmented Tab Controls (Overview | Projects | Skills) */}
                        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-6 text-xs font-bold">
                          <button
                            onClick={() => setCourseTab(course.id, 'overview')}
                            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                              currentTab === 'overview'
                                ? 'bg-white text-slate-900 shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            What You'll Learn
                          </button>
                          <button
                            onClick={() => setCourseTab(course.id, 'projects')}
                            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                              currentTab === 'projects'
                                ? 'bg-white text-[#F00037] shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span>Projects</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FFF4F7] text-[#F00037]">
                              {course.projects ? course.projects.length : 4}
                            </span>
                          </button>
                          <button
                            onClick={() => setCourseTab(course.id, 'skills')}
                            className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                              currentTab === 'skills'
                                ? 'bg-white text-slate-900 shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Tools & Skills
                          </button>
                        </div>

                        {/* Tab Content 1: Overview */}
                        {currentTab === 'overview' && (
                          <div className="space-y-4 animate-fadeIn">
                            <p className="text-[#0B0F17] text-xs sm:text-sm leading-relaxed">
                              {course.fullDescription}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B0F17]">
                              {course.whatYouWillLearn.map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F00037] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tab Content 2: Real Projects */}
                        {currentTab === 'projects' && (
                          <div className="space-y-3 animate-fadeIn">
                            <div className="grid grid-cols-1 gap-2.5">
                              {course.projects &&
                                course.projects.map((proj, pIdx) => (
                                  <div
                                    key={pIdx}
                                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:bg-[#FFF4F7]/40 transition-colors"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#F00037] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                      0{pIdx + 1}
                                    </div>
                                    <div>
                                      <h4 className="text-xs font-bold text-slate-900">{proj.name}</h4>
                                      <p className="text-[11px] text-[#0B0F17] mt-0.5 leading-snug">{proj.desc}</p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Tab Content 3: Skills & Target Roles */}
                        {currentTab === 'skills' && (
                          <div className="space-y-4 animate-fadeIn">
                            <div>
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2">
                                Core Skills & Tooling Mastered
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {course.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/15"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {course.targetRoles && (
                              <div className="pt-2">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2">
                                  Prepares You for Roles
                                </h4>
                                <div className="flex flex-wrap gap-2 text-xs font-medium text-[#0B0F17]">
                                  {course.targetRoles.map((role, rIdx) => (
                                    <span key={rIdx} className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg">
                                      <Briefcase className="w-3 h-3 text-[#F00037]" />
                                      {role}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Expandable Syllabus Accordion */}
                        {course.curriculum && (
                          <div className="mt-6 pt-4 border-t border-slate-100">
                            <button
                              onClick={() => toggleCurriculum(course.id)}
                              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
                            >
                              <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-[#F00037]" />
                                {isCurriculumOpen ? 'Collapse Detailed Syllabus Breakdown' : 'View Week-by-Week Curriculum & Deliverables'}
                              </span>
                              {isCurriculumOpen ? <ChevronUp className="w-4 h-4 text-[#F00037]" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            {isCurriculumOpen && (
                              <div className="mt-3 space-y-2.5 p-4 rounded-2xl bg-white border border-slate-200 animate-fadeIn text-xs">
                                {course.curriculum.map((c, ci) => (
                                  <div key={ci} className="pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
                                    <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                                      <span>{c.week}: {c.title}</span>
                                      {c.deliverables && (
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold">
                                          ✓ {c.deliverables}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[#0B0F17] text-[11px]">{c.details}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions (AlmaBetter Style) */}
                    <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => openEnquiryModal(course.title)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        <span>Get Syllabus</span>
                      </button>

                      <button
                        onClick={() => openEnquiryModal(course.title)}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enquire for Batch</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. "The SCOPE Lab Experience" Feature Matrix (AlmaBetter Style) */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/20 mb-3">
              <Laptop className="w-3.5 h-3.5" />
              <span>The Lab Environment</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight">
              What Every SCOPE Institute Program Includes
            </h2>
            <p className="mt-3 text-base text-[#0B0F17]">
              We design our training to simulate professional engineering teams with modern tooling, active coding, and personal reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 card-hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold mb-4 border border-[#F00037]/15">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Dedicated Lab Systems</h3>
              <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed">
                Work directly on pre-configured developer machines with Python, Node.js, Git, and VS Code ready to code from day one.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 card-hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold mb-4 border border-[#F00037]/15">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Live Code Demonstration</h3>
              <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed">
                Instructors code every algorithm and component live in class, demonstrating real debugging workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 card-hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold mb-4 border border-[#F00037]/15">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">1:1 Code Reviews</h3>
              <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed">
                Mentors review your variable naming, logic structure, and Git commits to build clean software engineering habits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 card-hover-lift transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center font-bold mb-4 border border-[#F00037]/15">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">GitHub Project Portfolio</h3>
              <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed">
                Build and deploy real applications to public GitHub repositories and cloud hosting to showcase in job applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modern Course Comparison Table */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F00037]" />
              <span>Curriculum Comparison</span>
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B0F17] tracking-tight">
              Compare Our Tech Tracks Side-by-Side
            </h2>
            <p className="mt-2 text-sm text-[#0B0F17]">
              Find the right match based on your current knowledge, career goals, and time commitment.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden" data-aos="fade-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0B0F17] text-white">
                    <th className="p-4 sm:p-5 font-bold">Track Name</th>
                    <th className="p-4 sm:p-5 font-bold">Duration</th>
                    <th className="p-4 sm:p-5 font-bold">Level</th>
                    <th className="p-4 sm:p-5 font-bold">Projects</th>
                    <th className="p-4 sm:p-5 font-bold">Prerequisites</th>
                    <th className="p-4 sm:p-5 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COURSES.map((c) => (
                    <tr key={c.id} className="hover:bg-[#FFF4F7]/30 transition-colors">
                      <td className="p-4 sm:p-5">
                        <span className="font-extrabold text-slate-900 block text-sm">{c.title}</span>
                        <span className="text-[11px] text-[#0B0F17] font-semibold">{c.category}</span>
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-slate-700">{c.duration}</td>
                      <td className="p-4 sm:p-5">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                          {c.level}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-slate-800">
                        {c.projects ? c.projects.length : 4} Real Projects
                      </td>
                      <td className="p-4 sm:p-5 text-[#0B0F17] text-xs max-w-xs">{c.prerequisites}</td>
                      <td className="p-4 sm:p-5 text-right">
                        <button
                          onClick={() => openEnquiryModal(c.title)}
                          className="px-4 py-2 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white text-xs font-bold shadow-xs cursor-pointer"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Conversion CTA Section */}
      <CTASection
        title="Unsure Which Course Matches Your Goals?"
        subtitle="Speak with our admissions counsellor for a free 1-on-1 career consultation to select the most suitable programming track."
      />
    </div>
  );
}
