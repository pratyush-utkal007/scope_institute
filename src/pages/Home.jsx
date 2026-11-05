import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Award,
  Terminal,
  Target,
  Users2,
  Cpu,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Compass,
  Layers,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Laptop,
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import { COURSES } from '../data/courses';
import { useEnquiry } from '../hooks/useEnquiry';

export default function Home() {
  const { openEnquiryModal } = useEnquiry();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = 'SCOPE INSTITUTE – Professional Coaching & Computer Training';
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whyChooseFeatures = [
    {
      icon: Users2,
      title: 'Experienced Guidance',
      description: 'Learn directly from passionate instructors who have built real software and understand how to teach step-by-step.'
    },
    {
      icon: Terminal,
      title: 'Practical Training',
      description: 'Spend maximum time writing code in hands-on lab sessions rather than memorizing static textbook slides.'
    },
    {
      icon: Cpu,
      title: 'Industry-Relevant Skills',
      description: 'Curricula aligned with modern developer workflows, Git tools, clean coding standards, and industry best practices.'
    },
    {
      icon: Compass,
      title: 'Beginner-Friendly Learning',
      description: 'Zero programming experience? Our structured pacing ensures no student gets left behind in complex concepts.'
    },
    {
      icon: Layers,
      title: 'Project-Based Learning',
      description: 'Solidify your knowledge by building portfolio-worthy applications, from command-line scripts to interactive web apps.'
    },
    {
      icon: Briefcase,
      title: 'Career-Oriented Education',
      description: 'Develop the practical technical foundation and confidence required to clear technical interviews and entry-level developer assessments.'
    }
  ];

  const learningSteps = [
    {
      step: '01',
      title: 'Enrol in a Track',
      desc: 'Select your preferred technology track and receive a complete syllabus walkthrough with flexible batch timings.',
      icon: BookOpen
    },
    {
      step: '02',
      title: 'Learn the Fundamentals',
      desc: 'Master core logic, programming syntax, and theoretical principles through live interactive coaching sessions.',
      icon: GraduationCap
    },
    {
      step: '03',
      title: 'Build Live Lab Projects',
      desc: 'Apply your knowledge immediately in guided laboratory sessions, writing real code and debugging real errors.',
      icon: Terminal
    },
    {
      step: '04',
      title: 'Showcase Your Portfolio',
      desc: 'Graduate with practical competence, a personal GitHub repository, and technical readiness for career opportunities.',
      icon: Award
    }
  ];

  const techTools = [
    { name: 'Python 3.x', category: 'Backend & Automation' },
    { name: 'React 19', category: 'UI Library' },
    { name: 'JavaScript ES6+', category: 'Core Web Logic' },
    { name: 'HTML5 Semantics', category: 'Web Structure' },
    { name: 'Modern CSS3', category: 'Responsive Styling' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'VS Code & CLI', category: 'Development Tools' },
    { name: 'REST APIs', category: 'Data Fetching' }
  ];

  const faqs = [
    {
      q: 'Do I need any prior programming background before joining?',
      a: 'No prior programming knowledge is required. All our programs start from ground zero (variables, basic logic, and syntax) before progressing into advanced concepts.'
    },
    {
      q: 'What is the schedule for weekday and weekend batches?',
      a: 'We offer flexible morning, evening, and weekend batches. Weekend batches are specifically scheduled for college students and working executives.'
    },
    {
      q: 'Are the training sessions purely practical or theoretical?',
      a: 'We follow an 80:20 practical-to-theory model. After introducing a concept, the majority of class time is spent in the computer lab writing code and building projects.'
    },
    {
      q: 'Will I receive a course completion certificate?',
      a: 'Yes, upon successful submission and review of your capstone projects, you will receive an official Certificate of Completion from SCOPE INSTITUTE.'
    },
    {
      q: 'How do I schedule a visit to the computer lab?',
      a: 'You can click the "Enquire Now" button or call our admissions helpline directly to book a free lab tour and personalized counselling session.'
    }
  ];

  return (
    <div className="space-y-0 bg-white">
      {/* 1. AlmaBetter-Style Hero Section */}
      <Hero />

      {/* 2. Flagship Programs Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FDF9F0] text-[#041934] border border-[#D39B3A]/30 mb-3">
              <span>Flagship Tech Programs</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041934] tracking-tight">
              Our Professional Training Courses
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal">
              Each program includes hands-on lab assignments, code reviews, and capstone projects designed to make you technically confident.
            </p>
          </div>

          {/* 4 Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} isDetailed={false} />
            ))}
          </div>

          {/* Full Curriculum Link Bar */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-[#041934] font-bold text-sm shadow-xs hover:border-[#D39B3A] hover:text-[#D39B3A] transition-all group"
            >
              <span>Explore Detailed Week-by-Week Syllabi & Curriculum</span>
              <ArrowRight className="w-4 h-4 text-[#D39B3A] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Dark Breakout Section (Masterclass / Pedagogy Banner) */}
      <section className="py-16 md:py-20 bg-[#020E1D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D39B3A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="zoom-in">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#041934] via-[#082347] to-[#041934] border border-[#D39B3A]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5C067] text-xs font-semibold border border-[#D39B3A]/30">
                  <ShieldCheck className="w-4 h-4 text-[#D39B3A]" />
                  <span>The SCOPE Institute Methodology</span>
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Why Memorizing Slides Fails, and Practical Labs Succeed
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Software development is a craft. At SCOPE INSTITUTE, you don't just watch videos—you code alongside experienced mentors, inspect runtime errors in console developer tools, and deploy real applications.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D39B3A]" />
                    <span>Live Code Demonstration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D39B3A]" />
                    <span>Dedicated Lab Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D39B3A]" />
                    <span>Instant Code Review</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => openEnquiryModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D39B3A] via-[#C89332] to-[#B88226] hover:from-[#BE8426] hover:to-[#A3701B] text-white font-bold text-sm shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Counselling</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose SCOPE INSTITUTE */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FDF9F0] text-[#041934] border border-[#D39B3A]/30 mb-3">
              <Target className="w-3.5 h-3.5 text-[#D39B3A]" />
              <span>The SCOPE Advantage</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041934] tracking-tight">
              Why Choose SCOPE INSTITUTE?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We stand apart through our commitment to practical coding ability, personalized student attention, and modern curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#D39B3A]/40 hover:bg-white card-hover-lift transition-all group"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FDF9F0] text-[#D39B3A] flex items-center justify-center mb-5 group-hover:bg-[#041934] group-hover:text-[#F5C067] transition-colors duration-300 shadow-xs border border-[#D39B3A]/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#041934] mb-2 group-hover:text-[#D39B3A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Learning Journey Roadmap */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FDF9F0] text-[#041934] border border-[#D39B3A]/30 mb-3">
              <Award className="w-3.5 h-3.5 text-[#D39B3A]" />
              <span>Step-by-Step Pathway</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041934] tracking-tight">
              Your Learning Journey with Us
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A structured 4-step path crafted to take you from a curious beginner to a confident technology practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D39B3A]/40 card-hover-lift transition-all flex flex-col justify-between group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-200 group-hover:text-[#D39B3A]/40 transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FDF9F0] text-[#D39B3A] flex items-center justify-center border border-[#D39B3A]/20">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#041934] mb-2 group-hover:text-[#D39B3A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#D39B3A]">
                    <span>Phase {step.step} Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Technologies Covered Ticker */}
      <section className="relative overflow-hidden py-14 sm:py-16 bg-gradient-to-r from-[#020E1D] via-[#041934] to-[#020E1D] border-y border-[#D39B3A]/30 shadow-2xl">
        {/* Ambient Glow Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#D39B3A]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-72 h-40 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D39B3A]/15 border border-[#D39B3A]/35 text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-[#F5C067] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D39B3A] animate-pulse" />
              Technologies & Developer Tools Covered
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
            {techTools.map((tool, idx) => (
              <div
                key={idx}
                className="group relative p-3.5 text-center rounded-2xl bg-[#0B254A]/40 border border-slate-700/60 hover:border-[#D39B3A]/60 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={idx * 40}
              >
                {/* Subtle top gold glow line on hover */}
                <div className="absolute inset-x-3 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D39B3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <p className="text-xs font-bold text-white group-hover:text-[#F5C067] transition-colors tracking-tight">
                  {tool.name}
                </p>
                <p className="text-[10px] text-slate-300 group-hover:text-white font-medium mt-1 leading-tight">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Collapsible FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FDF9F0] text-[#041934] border border-[#D39B3A]/30 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#D39B3A]" />
              <span>Frequently Asked Questions</span>
            </span>
            <h2 className="text-3xl font-extrabold text-[#041934] tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Find quick answers to common queries regarding our programs, batches, and lab infrastructure.
            </p>
          </div>

          <div className="space-y-3" data-aos="fade-up">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#041934] hover:text-[#D39B3A] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#D39B3A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner Section */}
      <CTASection
        title="Your Journey Towards a Successful Tech Career Starts Here."
        subtitle="Admissions are open for upcoming batches. Speak with our admissions counsellor, tour our lab, and select the right programming track."
      />
    </div>
  );
}
