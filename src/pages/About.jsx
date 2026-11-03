import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Sparkles,
  Award,
  Terminal,
  Cpu,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Laptop,
  Users2,
  Lightbulb,
  Building2,
  FolderGit2,
  Clock,
  HeartHandshake,
  Code2,
  GitBranch,
  MonitorCheck,
  CalendarCheck,
  Briefcase,
  PhoneCall
} from 'lucide-react';
import CTASection from '../components/CTASection';
import { useEnquiry } from '../hooks/useEnquiry';
import { INSTITUTE_INFO } from '../data/courses';

export default function About() {
  const { openEnquiryModal } = useEnquiry();
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    document.title = 'About Us – SCOPE INSTITUTE | Practical Computer Coaching';
    window.scrollTo(0, 0);
  }, []);

  const teachingPrinciples = [
    {
      step: 'Pillar 01',
      title: 'Lab-First Pedagogy (80:20 Ratio)',
      short: '80% Hands-On Coding',
      desc: 'We dedicate 20% of class time to explain conceptual architecture, and 80% to active keyboard coding in our computer laboratory. Students write, run, and debug real code in every single session.',
      icon: Terminal,
      deliverable: 'Minimum 50+ lines of executable code written per class'
    },
    {
      step: 'Pillar 02',
      title: 'Live Instructor Demonstration',
      short: 'Zero Slide Shows',
      desc: 'Our instructors never recite prepared PowerPoint slides. We open VS Code and terminal in real time, build components live, encounter errors naturally, and demonstrate professional debugging.',
      icon: Cpu,
      deliverable: 'Real-time syntax problem-solving and immediate bug diagnosis'
    },
    {
      step: 'Pillar 03',
      title: 'Line-by-Line Code Review',
      short: 'Daily Instructor Reviews',
      desc: 'Writing code is only half the battle. Mentors review student code directly at lab desks, teaching industry-standard formatting, variable naming conventions, algorithmic efficiency, and Git commit hygiene.',
      icon: ShieldCheck,
      deliverable: 'Direct feedback on code cleanliness and logical structure'
    },
    {
      step: 'Pillar 04',
      title: 'Milestone Capstone Projects',
      short: 'Production GitHub Portfolio',
      desc: 'Students do not wait until the final week to build projects. We build micro-projects weekly that compound into fully deployed, production-grade applications linked directly to their public GitHub profiles.',
      icon: Award,
      deliverable: 'Every graduate leaves with 3+ live, deployed GitHub repositories'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Inception of SCOPE INSTITUTE',
      desc: 'Founded with a dedicated 10-seater lab in Bhubaneswar to provide practical, keyboard-first computer programming coaching without theoretical fluff.'
    },
    {
      year: '2022',
      title: '4 Core Industry Tech Tracks',
      desc: 'Curated 4 high-demand foundational tracks: Python Programming, Modern JavaScript, React.js UI, and HTML5/CSS3 Web Design.'
    },
    {
      year: '2023',
      title: '1:1 Doubt Resolution Desks',
      desc: 'Introduced dedicated consultation desks so every student receives personalized, unhurried attention to master challenging algorithms and syntax.'
    },
    {
      year: '2024 - Present',
      title: 'Modern Lab Upgrade & React 19',
      desc: 'Equipped our laboratory with high-speed multi-core developer workstations, gigabit optical fiber, and updated modern frameworks including React 19.'
    }
  ];

  const labSpecs = [
    {
      icon: Laptop,
      title: 'Dedicated Developer Workstations',
      desc: 'Each student works on their own high-speed machine equipped with multi-core processors, SSD storage, dual displays, and zero lag.',
      tag: 'Hardware'
    },
    {
      icon: Code2,
      title: 'Pre-Configured Toolchains',
      desc: 'VS Code, Python 3, Node.js, Git CLI, and browser developer extensions ready out-of-the-box so zero class time is lost in setup.',
      tag: 'Environment'
    },
    {
      icon: Users2,
      title: '1:1 Doubt Consultation Pods',
      desc: 'Private, quiet consultation pods where students sit down face-to-face with mentors to diagnose challenging logic and syntax errors.',
      tag: 'Mentorship'
    },
    {
      icon: FolderGit2,
      title: 'Git Version Control & Terminal Focus',
      desc: 'Students learn to interact with code through the terminal and manage branch workflows on GitHub, just like engineering teams.',
      tag: 'Workflow'
    },
    {
      icon: MonitorCheck,
      title: 'Gigabit Optical Fiber Internet',
      desc: 'Unrestricted, high-speed fiber connection ensuring fast package downloads via npm/pip and seamless access to documentation.',
      tag: 'Connectivity'
    },
    {
      icon: Building2,
      title: 'Centrally Located Bhubaneswar Campus',
      desc: 'Easily accessible campus with well-ventilated, ergonomic coding desks and dedicated backup power so classes are never interrupted.',
      tag: 'Campus'
    }
  ];

  const institutionalValues = [
    {
      icon: HeartHandshake,
      title: 'Honest, Transparent Guidance',
      desc: 'We never make inflated placement guarantees, fake statistics, or misleading claims. We provide rigorous, high-quality coaching and genuine technical skill development.'
    },
    {
      icon: Lightbulb,
      title: 'Beginner-Friendly Inclusivity',
      desc: 'We welcome college students, non-IT graduates, and career switchers alike. Our curriculum begins from elementary logic and builds progressively upward.'
    },
    {
      icon: Users2,
      title: 'Small Cohorts (Max 15 Students)',
      desc: 'We strictly cap batch sizes to 15 students so mentors know each learner personally and can tailor instruction to individual learning speeds.'
    },
    {
      icon: Clock,
      title: 'Flexible Cohort Schedules',
      desc: 'Choose from weekday morning batches, evening batches, or dedicated weekend bootcamps designed to suit working professionals and college timetables.'
    }
  ];

  return (
    <div className="bg-white text-[#0B0F17]">
      {/* 1. High-Prestige Dark Hero Header */}
      <section className="bg-[#0B0F17] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F00037]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-red-300 text-xs sm:text-sm font-bold mb-5 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-[#F00037]" />
            <span>SCOPE INSTITUTE • Practical Computer Coaching & Software Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Empowering Aspiring Coders With Real-World{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F00037] via-[#FF4D79] to-[#38BDF8]">
              Engineering Mastery.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            SCOPE INSTITUTE was founded to eliminate passive slide-reading coaching. We replace theoretical rote learning with 80% hands-on laboratory time, live code reviews, and production-grade project development.
          </p>

          {/* Quick Badges Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Max 15 Students / Batch</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>80% Practical Lab Time</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>1:1 Weekly Doubt Desks</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bhubaneswar Campus</span>
            </span>
          </div>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm shadow-xl shadow-red-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All 4 Programs</span>
            </Link>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Schedule Free Lab Tour</span>
              <ArrowRight className="w-4 h-4 text-[#F00037]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Impact Metric Ribbon (Crisp Black Descriptions) */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" data-aos="fade-up">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl card-hover-lift text-left">
            <p className="text-3xl sm:text-4xl font-black text-[#F00037]">80%+</p>
            <p className="text-sm font-bold text-[#0B0F17] mt-1">Hands-On Lab Time</p>
            <p className="text-xs text-[#0B0F17] font-medium mt-1 leading-snug">
              Active keyboard coding & debugging during every class session.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl card-hover-lift text-left">
            <p className="text-3xl sm:text-4xl font-black text-[#0B0F17]">15 Max</p>
            <p className="text-sm font-bold text-[#0B0F17] mt-1">Students Per Batch</p>
            <p className="text-xs text-[#0B0F17] font-medium mt-1 leading-snug">
              Guaranteed individual mentor attention without overcrowded halls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl card-hover-lift text-left">
            <p className="text-3xl sm:text-4xl font-black text-[#0B0F17]">1:1</p>
            <p className="text-sm font-bold text-[#0B0F17] mt-1">Doubt Consultation</p>
            <p className="text-xs text-[#0B0F17] font-medium mt-1 leading-snug">
              Direct access to senior instructors to solve complex syntax issues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl card-hover-lift text-left">
            <p className="text-3xl sm:text-4xl font-black text-[#F00037]">100%</p>
            <p className="text-sm font-bold text-[#0B0F17] mt-1">GitHub Portfolio</p>
            <p className="text-xs text-[#0B0F17] font-medium mt-1 leading-snug">
              Every student leaves with real, public repositories built & deployed.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Section 1: Philosophy & The Anti-Slide Approach */}
      <section className="py-16 md:py-24 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/20 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Engineering-First Philosophy</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight leading-tight">
                Coding Cannot Be Mastered by Watching Slides. You Learn by Writing Code.
              </h2>

              <p className="text-base text-[#0B0F17] leading-relaxed font-normal">
                Conventional coaching institutes often fill classrooms with 50+ students, read off PowerPoint decks, and assign theoretical questions. At <strong className="font-extrabold text-[#0B0F17]">SCOPE INSTITUTE</strong>, we completely reject this model.
              </p>

              <p className="text-base text-[#0B0F17] leading-relaxed font-normal">
                Software engineering is a practical discipline—identical to surgical training or architecture. You only grow comfortable when you type syntax, observe errors in your browser console, decipher tracebacks in your terminal, and fix logic line-by-line. That is why our computer laboratory is the centerpiece of our institute.
              </p>

              {/* High-Contrast Feature Pillars */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm shadow-xs border border-[#F00037]/15">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0F17]">Live Instructor Coding in VS Code</h4>
                    <p className="text-xs sm:text-sm text-[#0B0F17] mt-0.5 leading-relaxed font-normal">
                      Mentors code from a blank editor in front of the batch. You watch how experienced developers think, format files, and diagnose unexpected runtime bugs in real time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm shadow-xs border border-[#F00037]/15">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0F17]">Strict Cohort Limit (Max 15 per Batch)</h4>
                    <p className="text-xs sm:text-sm text-[#0B0F17] mt-0.5 leading-relaxed font-normal">
                      We cap batches so no student gets overlooked. Instructors monitor each student’s keyboard progress, catching mistakes before bad habits form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm shadow-xs border border-[#F00037]/15">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B0F17]">Industry Developer Tooling from Day 1</h4>
                    <p className="text-xs sm:text-sm text-[#0B0F17] mt-0.5 leading-relaxed font-normal">
                      From week one, students use Git command line, commit their work to GitHub, practice clean code formatting, and structure real multi-file projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative bg-[#0B0F17]">
                  <img
                    src="/images/about-lab.jpg"
                    alt="Students coding together in computer lab at SCOPE INSTITUTE"
                    className="w-full h-[460px] object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />

                  {/* Floating Metric Tag */}
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Lab Session • Bhubaneswar</span>
                  </div>

                  {/* Floating Glassmorphism Quote Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl text-[#0B0F17]">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F00037] block mb-1">
                      Our Core Commitment
                    </span>
                    <p className="text-xs sm:text-sm font-bold leading-snug text-[#0B0F17]">
                      "We measure our success not by attendance certificates issued, but by real, working applications built and deployed by our students."
                    </p>
                    <p className="text-[11px] text-[#0B0F17] font-semibold mt-2">
                      — Academic Director, SCOPE INSTITUTE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 2: The 4 Pillars of Teaching Methodology */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/20 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>How We Teach</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight">
              Our 4 Pillars of Practical Methodology
            </h2>
            <p className="mt-3 text-base text-[#0B0F17] font-normal">
              A structured, laboratory-tested progression ensuring every learner turns concepts into muscle memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingPrinciples.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#F00037]/40 card-hover-lift transition-all group flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#F00037] bg-[#FFF4F7] px-2.5 py-0.5 rounded-md border border-[#F00037]/20">
                        {pillar.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-[#F00037] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#0B0F17] mb-2 group-hover:text-[#F00037] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-[#0B0F17] block">
                      Target Deliverable:
                    </span>
                    <span className="text-[11px] text-[#0B0F17] font-medium block mt-0.5">
                      {pillar.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Section 3: Institutional Milestones / Journey */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Our Track Record</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight">
              The Journey of SCOPE INSTITUTE
            </h2>
            <p className="mt-3 text-base text-[#0B0F17] font-normal">
              Built step-by-step with an unwavering focus on laboratory excellence and student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative card-hover-lift"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#F00037] font-black text-lg flex items-center justify-center mb-4 shadow-xs">
                  {idx + 1}
                </div>
                <span className="text-xs font-extrabold text-[#F00037] tracking-wider uppercase">
                  {milestone.year}
                </span>
                <h3 className="text-base font-extrabold text-[#0B0F17] mt-1 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed font-normal">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section 4: Campus Lab Infrastructure & Workstation Specs */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/20 mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Infrastructure</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight">
              A Modern Coding Laboratory Built for Productivity
            </h2>
            <p className="mt-3 text-base text-[#0B0F17] font-normal">
              High-performance hardware, fast network connectivity, and distraction-free desks in Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labSpecs.map((spec, specIdx) => {
              const SpecIcon = spec.icon;
              return (
                <div
                  key={specIdx}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs card-hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={specIdx * 80}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#F00037] flex items-center justify-center font-bold shadow-xs">
                      <SpecIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {spec.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B0F17] mb-1.5">{spec.title}</h3>
                  <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Invitation Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6" data-aos="zoom-in">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F00037]">
                Experience It In Person
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Book a Free Campus Tour & 1:1 Counseling
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Walk through our computer lab, test our workstations, review sample student GitHub projects, and speak directly with our senior instructors.
              </p>
            </div>
            <button
              onClick={() => openEnquiryModal()}
              className="px-8 py-3.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm shadow-xl shadow-red-500/25 transition-all shrink-0 cursor-pointer"
            >
              Book Free Lab Visit
            </button>
          </div>
        </div>
      </section>

      {/* 8. Section 6: Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm card-hover-lift transition-all relative overflow-hidden"
              data-aos="fade-up"
            >
              <div className="h-2 w-full bg-[#F00037] absolute top-0 left-0" />
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F7] text-[#F00037] flex items-center justify-center mb-6 font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B0F17] mb-3">Our Mission</h3>
              <p className="text-base text-[#0B0F17] leading-relaxed font-normal">
                To democratize practical computer education by delivering structured, accessible, and high-impact programming coaching. We empower students of all academic backgrounds to master essential software technologies with clarity, confidence, and rigorous laboratory practice.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#0B0F17]">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Maintain relentless focus on practical code implementation.</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Provide transparent, beginner-friendly coaching with zero prerequisites.</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Nurture analytical problem-solving and software logic from scratch.</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm card-hover-lift transition-all relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-2 w-full bg-[#0B0F17] absolute top-0 left-0" />
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B0F17] flex items-center justify-center mb-6 font-bold border border-slate-200">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B0F17] mb-3">Our Vision</h3>
              <p className="text-base text-[#0B0F17] leading-relaxed font-normal">
                To be recognized as a premier coaching destination that sets the benchmark for quality student outcomes, hands-on programming literacy, and ethical mentoring for aspiring software developers and technology professionals.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#0B0F17]">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Continuously refresh curriculum with modern software engineering standards.</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Foster an encouraging classroom where questions and experimentation are welcomed.</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F00037] shrink-0" />
                  <span>Bridge the gap between academic theory and real-world software careers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section 7: Institutional Values */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF4F7] text-[#F00037] border border-[#F00037]/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Code of Honor</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F17] tracking-tight">
              Institutional Values that Define Us
            </h2>
            <p className="mt-3 text-base text-[#0B0F17] font-normal">
              The ethical and educational principles guiding every lecture, lab drill, and student interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalValues.map((val, vIdx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={vIdx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#F00037]/30 card-hover-lift transition-all"
                  data-aos="fade-up"
                  data-aos-delay={vIdx * 80}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#F00037] flex items-center justify-center font-bold mb-4 shadow-xs">
                    <ValIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B0F17] mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#0B0F17] leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Call to Action Section */}
      <CTASection
        title="Ready to Learn with SCOPE INSTITUTE?"
        subtitle="Contact our admissions counsellor today to receive complete syllabus brochures, batch schedules, and book your computer laboratory visit."
      />
    </div>
  );
}
