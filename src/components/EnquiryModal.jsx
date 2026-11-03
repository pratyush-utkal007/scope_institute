import React, { useState, useEffect } from 'react';
import { X, Send, User, Phone, Mail, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { useEnquiry } from '../hooks/useEnquiry';
import { COURSES } from '../data/courses';
import CustomSelect from './CustomSelect';

export default function EnquiryModal() {
  const { isOpen, closeEnquiryModal, selectedCourse, handleEnquirySubmit, isSubmitting } = useEnquiry();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        course: selectedCourse || (COURSES[0] ? COURSES[0].title : 'Python Programming')
      }));
      setErrors({});
      setTouched({});
    }
  }, [isOpen, selectedCourse]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    let error = '';
    if (name === 'fullName') {
      if (!value.trim()) error = 'Full name is required';
      else if (value.trim().length < 3) error = 'Name must be at least 3 characters';
    } else if (name === 'mobileNumber') {
      const clean = value.replace(/[\s-]/g, '');
      if (!clean) error = 'Mobile number is required';
      else if (!/^[6-9]\d{9}$/.test(clean)) error = 'Enter a valid 10-digit Indian mobile (starts with 6-9)';
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
    if (hasErrors) return;

    const result = await handleEnquirySubmit(formData);
    if (result && result.success) {
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        course: '',
        message: ''
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={closeEnquiryModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* AlmaBetter-Style Modal Header */}
        <div className="bg-gradient-to-r from-[#0B0F17] via-[#102A43] to-[#0B0F17] text-white p-6 relative border-b border-white/10">
          <button
            onClick={closeEnquiryModal}
            disabled={isSubmitting}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F00037]/25 text-red-300 border border-[#F00037]/40 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F00037]" /> Admissions Desk
            </span>
          </div>

          <h2 id="enquiry-modal-title" className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
            Enquire for Admission
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill in your details below and our academic counsellor will get in touch with you with full syllabus & batch details.
          </p>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="modal-fullName" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#F00037]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="modal-fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                placeholder="e.g. Rahul Sharma"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName && touched.fullName
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-slate-200 focus:border-[#F00037] focus:ring-red-100 bg-white'
                }`}
              />
            </div>
            {errors.fullName && touched.fullName && (
              <p className="text-xs text-[#F00037] mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Contact Row: Mobile & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Mobile Number */}
            <div>
              <label htmlFor="modal-mobileNumber" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-[#F00037]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="modal-mobileNumber"
                  name="mobileNumber"
                  maxLength={10}
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="10-digit number"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.mobileNumber && touched.mobileNumber
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                      : 'border-slate-200 focus:border-[#F00037] focus:ring-red-100 bg-white'
                  }`}
                />
              </div>
              {errors.mobileNumber && touched.mobileNumber && (
                <p className="text-xs text-[#F00037] mt-1">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-[#F00037]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email && touched.email
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                      : 'border-slate-200 focus:border-[#F00037] focus:ring-red-100 bg-white'
                  }`}
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-xs text-[#F00037] mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Course Selection */}
          <div>
            <label htmlFor="modal-course" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Select Track <span className="text-[#F00037]">*</span>
            </label>
            <CustomSelect
              id="modal-course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              options={COURSES}
              error={touched.course ? errors.course : ''}
              placeholder="Select a programming track"
            />
            {errors.course && touched.course && (
              <p className="text-xs text-[#F00037] mt-1">{errors.course}</p>
            )}
          </div>

          {/* Optional Message */}
          <div>
            <label htmlFor="modal-message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Preferred Timing or Questions (Optional)
            </label>
            <textarea
              id="modal-message"
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="e.g., Weekend batch preferred, beginner background..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F00037] focus:ring-2 focus:ring-red-100 transition-all resize-none"
            />
          </div>

          {/* Trust reassurance */}
          <div className="flex items-center gap-2 p-3 bg-[#FFF4F7] rounded-xl border border-[#F00037]/20 text-xs text-[#0B0F17] font-medium">
            <CheckCircle className="w-4 h-4 text-[#F00037] shrink-0" />
            <span>100% Free counselling session. No spam. Instant curriculum on WhatsApp/Email.</span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F00037] hover:bg-[#D0002F] text-white font-bold text-sm shadow-xl shadow-red-500/25 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Enquiry...</span>
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
  );
}
