import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService';
import { COURSES, INSTITUTE_INFO } from '../data/courses';
import CustomSelect from '../components/CustomSelect';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    course: 'Python Programming',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Admissions – SCOPE INSTITUTE';
    window.scrollTo(0, 0);
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'fullName') {
      if (!value.trim()) error = 'Full name is required';
      else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
    } else if (name === 'mobileNumber') {
      const clean = value.replace(/[\s-]/g, '');
      if (!clean) error = 'Mobile number is required';
      else if (!/^[6-9]\d{9}$/.test(clean)) error = 'Enter a valid 10-digit Indian mobile number (e.g., 9876543210)';
    } else if (name === 'email') {
      if (!value.trim()) error = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) error = 'Enter a valid email address';
    } else if (name === 'course') {
      if (!value) error = 'Please select a course';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const err = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      mobileNumber: validateField('mobileNumber', formData.mobileNumber),
      email: validateField('email', formData.email),
      course: validateField('course', formData.course)
    };

    setTouched({
      fullName: true,
      mobileNumber: true,
      email: true,
      course: true
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => Boolean(err));
    if (hasErrors) {
      toast.error('Please fix the validation errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting enquiry...');

    try {
      const response = await submitEnquiry(formData);
      toast.dismiss(loadingToast);
      toast.success(response.message || 'Your message has been sent successfully!', {
        duration: 5000,
        icon: '🎓'
      });
      // Reset form
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        course: 'Python Programming',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error(err?.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* AlmaBetter-Style Dark Page Header */}
      <section className="bg-[#041934] text-white py-16 md:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D39B3A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-red-300 text-xs font-bold mb-4 backdrop-blur-sm">
            <Building2 className="w-4 h-4 text-[#D39B3A]" />
            <span>Admissions & Campus Enquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Contact SCOPE INSTITUTE
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding batch schedules, syllabus details, or fee structures? We're here to help you get started.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D39B3A] block mb-1">
                    Direct Contact
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#041934]">
                    Visit Our Campus or Reach Out
                  </h2>
                  <p className="text-sm text-[#041934] mt-2 font-normal">
                    Our academic counsellors are available 6 days a week to assist prospective students and parents.
                  </p>
                </div>

                {/* Contact Items */}
                <div className="space-y-4 pt-2">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF9F0] text-[#D39B3A] flex items-center justify-center shrink-0 font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Campus Address</h4>
                      <p className="text-sm text-[#041934] mt-1 leading-snug">{INSTITUTE_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Admissions Helpline</h4>
                      <a href={`tel:${INSTITUTE_INFO.phone}`} className="text-sm text-[#D39B3A] font-bold hover:underline mt-1 block">
                        {INSTITUTE_INFO.phone}
                      </a>
                      <p className="text-xs text-[#041934] mt-0.5">Call or WhatsApp for immediate enquiry</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 font-bold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Email Enquiries</h4>
                      <a href={`mailto:${INSTITUTE_INFO.email}`} className="text-sm text-blue-600 font-bold hover:underline mt-1 block">
                        {INSTITUTE_INFO.email}
                      </a>
                      <p className="text-xs text-[#041934] mt-0.5">Response within 24 working hours</p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Visiting Hours</h4>
                      <p className="text-sm text-[#041934] mt-1 leading-snug">{INSTITUTE_INFO.workingHours}</p>
                    </div>
                  </div>
                </div>

                {/* Assurance badge */}
                <div className="p-4 rounded-2xl bg-[#FDF9F0] border border-[#D39B3A]/20 text-xs text-[#041934] font-medium flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#D39B3A] shrink-0" />
                  <span>Free demo class & lab tour available upon prior appointment.</span>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D39B3A]" />
                    Institute Location Map
                  </span>
                  <span className="text-[11px] text-[#041934] font-semibold">Chandrasekharpur, Bhubaneswar</span>
                </div>

                <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <iframe
                    title="SCOPE INSTITUTE Google Maps Location"
                    src="https://maps.google.com/maps?q=Chandrasekharpur,+Bhubaneswar,+Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D39B3A] block mb-1">
                    Get in Touch
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#041934]">
                    Send an Admission Enquiry
                  </h2>
                  <p className="text-sm text-[#041934] mt-1 font-normal">
                    Fill out the form below with your course interest. We will provide full batch schedules and fee details.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#D39B3A]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="contact-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        placeholder="Enter your full name"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName && touched.fullName
                            ? 'border-red-400 focus:ring-amber-200 bg-red-50/20'
                            : 'border-slate-200 focus:border-[#D39B3A] focus:ring-amber-100 bg-white'
                        }`}
                      />
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="text-xs text-[#D39B3A] mt-1.5">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Contact Row: Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="contact-mobileNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Mobile Number <span className="text-[#D39B3A]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="contact-mobileNumber"
                          name="mobileNumber"
                          maxLength={10}
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          placeholder="10-digit mobile number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.mobileNumber && touched.mobileNumber
                              ? 'border-red-400 focus:ring-amber-200 bg-red-50/20'
                              : 'border-slate-200 focus:border-[#D39B3A] focus:ring-amber-100 bg-white'
                          }`}
                        />
                      </div>
                      {errors.mobileNumber && touched.mobileNumber && (
                        <p className="text-xs text-[#D39B3A] mt-1.5">{errors.mobileNumber}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#D39B3A]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          placeholder="your.email@example.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email && touched.email
                              ? 'border-red-400 focus:ring-amber-200 bg-red-50/20'
                              : 'border-slate-200 focus:border-[#D39B3A] focus:ring-amber-100 bg-white'
                          }`}
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="text-xs text-[#D39B3A] mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label htmlFor="contact-course" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Course Interested In <span className="text-[#D39B3A]">*</span>
                    </label>
                    <CustomSelect
                      id="contact-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      options={COURSES}
                      error={touched.course ? errors.course : ''}
                      placeholder="Select a programming course"
                    />
                    {errors.course && touched.course && (
                      <p className="text-xs text-[#D39B3A] mt-1.5">{errors.course}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message / Questions (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Tell us about your educational background or preferred timings (e.g. Weekend batch)..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D39B3A] focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Privacy Reassurance */}
                  <div className="flex items-center gap-2 p-3 bg-[#FDF9F0] rounded-xl text-xs text-slate-700 border border-[#D39B3A]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#D39B3A] shrink-0" />
                    <span>Your contact details are strictly confidential and will only be used to answer your enquiry.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#D39B3A] hover:bg-[#B88226] text-white font-bold text-sm shadow-xl shadow-amber-500/25 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Your Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
