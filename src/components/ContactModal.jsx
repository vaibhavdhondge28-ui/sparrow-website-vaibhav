import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Phone, Mail, ShieldCheck, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import SparrowLogo from './SparrowLogo';

export default function ContactModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: initialService || 'Meta & Google Ads Strategy',
    email: '',
    phoneNumber: '',
    projectDetails: '',
    captchaVerified: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, jobTitle: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.captchaVerified) {
      newErrors.captchaVerified = 'Please verify that you are not a robot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0066FF', '#0052CC', '#38BDF8', '#0A2540'],
        });
      } catch (err) {
        console.log('Confetti submitted');
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      jobTitle: 'Meta & Google Ads Strategy',
      email: '',
      phoneNumber: '',
      projectDetails: '',
      captchaVerified: false,
    });
    setStatus('idle');
    setErrors({});
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Card (Matching Haptiq Contact Form Screenshot EXACTLY) */}
          <motion.div
            className="relative w-full max-w-5xl bg-[#E6F0FF] rounded-3xl shadow-2xl overflow-hidden my-auto z-10 text-slate-900 border border-blue-200"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Logo & Close Button */}
            <div className="px-8 py-5 border-b border-blue-200/80 bg-white/70 backdrop-blur-md flex items-center justify-between">
              <SparrowLogo variant="light" />
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white border border-blue-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body Layout (2 Columns) */}
            <div className="p-8 lg:p-12">
              {status === 'success' ? (
                <motion.div
                  className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-100 text-center max-w-xl mx-auto space-y-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 border border-blue-200 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-3xl font-extrabold text-slate-900">Thank You!</h4>
                    <p className="text-slate-600 text-base leading-relaxed">
                      We have received your submission, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our team at Sparrow IT and digital solutions will get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-left space-y-1.5 text-xs text-slate-700">
                    <div><span className="text-slate-500">Contact Email:</span> <span className="font-semibold text-slate-900">{formData.email}</span></div>
                    <div><span className="text-slate-500">Phone Number:</span> <span className="font-semibold text-slate-900">{formData.phoneNumber}</span></div>
                    <div><span className="text-slate-500">Requirement:</span> <span className="font-semibold text-slate-900">{formData.jobTitle}</span></div>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-950 font-semibold text-xs transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                    >
                      Close Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Heading & Paragraph (Matching Haptiq Screenshot) */}
                  <div className="lg:col-span-5 space-y-6 pt-2">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                      We want to hear from you
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      Please fill out the form below, and we will get back to you as soon as possible.
                    </p>

                    {/* Direct Contacts Card */}
                    <div className="p-6 rounded-2xl bg-white/90 border border-blue-200 shadow-md space-y-4 text-xs text-slate-800">
                      <div className="font-mono font-bold text-blue-600 uppercase">Direct Contact Info</div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900">Phone / WhatsApp</div>
                          <div><a href="tel:8421477238" className="hover:underline text-blue-700 font-bold">8421477238</a></div>
                          <div><a href="tel:8806413189" className="hover:underline text-blue-700 font-bold">8806413189</a></div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                        <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900">Direct Email</div>
                          <a href="mailto:sparrowdigisolution@gmail.com" className="hover:underline text-blue-700 font-bold text-xs break-all">
                            sparrowdigisolution@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Form Fields (Matching Haptiq Screenshot) */}
                  <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
                    {/* Full Name * */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Full name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-text ${
                          errors.fullName ? 'border-red-500' : 'border-blue-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                    </div>

                    {/* Company Name * */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Company name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-text ${
                          errors.companyName ? 'border-red-500' : 'border-blue-200'
                        }`}
                      />
                      {errors.companyName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.companyName}</p>}
                    </div>

                    {/* Job Title / Service Required * */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Job title / Required Service <span className="text-blue-600">*</span>
                      </label>
                      <select
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
                      >
                        <option value="Meta Ads (Facebook & Instagram Ads)">Meta Ads (Facebook &amp; Instagram Ads)</option>
                        <option value="Google Ads & PPC Marketing">Google Ads &amp; PPC Marketing</option>
                        <option value="Custom Web Application Development">Custom Web Application Development</option>
                        <option value="Mobile App Development (Android & iOS)">Mobile App Development (Android &amp; iOS)</option>
                        <option value="Custom Software & Enterprise Apps">Custom Software &amp; Enterprise Apps</option>
                        <option value="Full Digital Marketing Strategy">Full Digital Marketing Strategy</option>
                      </select>
                    </div>

                    {/* Email * */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-text ${
                          errors.email ? 'border-red-500' : 'border-blue-200'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
                    </div>

                    {/* Phone Number * (With +91 Flag Badge as in Haptiq Screenshot) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone number <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 flex items-center gap-1.5 text-xs text-slate-700 font-semibold pointer-events-none border-r border-slate-300 pr-2">
                          <span className="text-sm">🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="84214 77238"
                          className={`w-full pl-20 pr-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-text ${
                            errors.phoneNumber ? 'border-red-500' : 'border-blue-200'
                          }`}
                        />
                      </div>
                      {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phoneNumber}</p>}
                    </div>

                    {/* Message / Requirement (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Tell us about your project or ad requirements
                      </label>
                      <textarea
                        name="projectDetails"
                        rows="2"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Briefly describe your goals..."
                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-text"
                      />
                    </div>

                    {/* Please verify your request * (reCAPTCHA style widget matching screenshot) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Please verify your request. <span className="text-blue-600">*</span>
                      </label>
                      <div className="p-3.5 bg-slate-50 border border-slate-300 rounded-xl flex items-center justify-between shadow-inner">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            name="captchaVerified"
                            checked={formData.captchaVerified}
                            onChange={handleChange}
                            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-800">I'm not a robot</span>
                        </label>
                        <div className="flex flex-col items-center justify-center text-[9px] font-mono text-slate-400">
                          <RefreshCw className="w-4 h-4 text-blue-600 mb-0.5" />
                          <span>reCAPTCHA</span>
                        </div>
                      </div>
                      {errors.captchaVerified && (
                        <p className="text-red-500 text-xs mt-1 font-semibold">{errors.captchaVerified}</p>
                      )}
                    </div>

                    {/* Privacy Policy Text (Matching Haptiq Screenshot) */}
                    <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                      Sparrow needs the contact information you provide to us to contact you about our products and services. To learn more, review our <a href="#" className="text-blue-600 underline font-semibold">Privacy Policy</a>.
                    </p>

                    {/* Submit Button (Matching Haptiq Screenshot) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-500/20 transition-all disabled:opacity-70 cursor-pointer"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Submitting...</span>
                          </span>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
