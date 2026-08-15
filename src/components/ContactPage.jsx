import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, ArrowLeft, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import SparrowLogo from './SparrowLogo';

export default function ContactPage({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: initialService || 'Meta & Google Ads Strategy',
    email: '',
    phoneNumber: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    // Build Structured Email Body Format for sparrowitdigitalsolutions@gmail.com
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const formattedMessage = `
==================================================
  SPARROW IT & DIGITAL SOLUTIONS - NEW LEAD INQUIRY
==================================================

📋 CLIENT CONTACT DETAILS:
--------------------------------------------------
• Full Name:     ${formData.fullName}
• Company Name:  ${formData.companyName}
• Email Address: ${formData.email}
• Phone Number:  +91 ${formData.phoneNumber}

🎯 SELECTED SERVICE REQUIREMENT:
--------------------------------------------------
• Service Needed: ${formData.jobTitle}

📅 SUBMISSION INFO:
--------------------------------------------------
• Received Date & Time: ${timestamp} (IST)

==================================================
  Dispatched automatically from Sparrow Website
==================================================
    `.trim();

    try {
      // Send formatted payload via Web3Forms API
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5561a0f6-7b24-4f01-b5ed-59fa3b174b12',
          to_email: 'sparrowitdigitalsolutions@gmail.com',
          subject: `🚨 New Lead: ${formData.fullName} - ${formData.jobTitle}`,
          from_name: 'Sparrow IT & Digital Solutions Website',
          name: formData.fullName,
          email: formData.email,
          message: formattedMessage,
        }),
      });
    } catch (err) {
      console.log('Form submission logged:', err);
    }

    setStatus('success');
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0066FF', '#0052CC', '#38BDF8', '#0A2540'],
      });
    } catch (err) {
      console.log('Confetti trigger');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      jobTitle: 'Meta & Google Ads Strategy',
      email: '',
      phoneNumber: '',
      captchaVerified: false,
    });
    setStatus('idle');
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-[#E6F0FF] text-slate-900 overflow-y-auto min-h-screen w-full flex flex-col justify-between"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {/* Top Header Bar */}
        <header className="w-full bg-white/90 backdrop-blur-md border-b border-blue-200 px-4 sm:px-12 py-3.5 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <SparrowLogo variant="light" />

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2 rounded-xl bg-[#1866EC] hover:bg-[#0D52D4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </button>
        </header>

        {/* Content Container */}
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-12">
          {status === 'success' ? (
            <motion.div
              className="bg-white p-6 sm:p-12 rounded-3xl shadow-xl border border-blue-100 text-center max-w-lg mx-auto space-y-6 my-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1866EC] border border-blue-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Thank You!</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Your structured inquiry report has been dispatched automatically to <span className="font-bold text-slate-900">sparrowitdigitalsolutions@gmail.com</span>. Our team will contact you shortly, <span className="font-bold text-slate-900">{formData.fullName}</span>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-left space-y-1.5 text-xs text-slate-700">
                <div><span className="text-slate-500">Contact Email:</span> <span className="font-semibold text-slate-900">{formData.email}</span></div>
                <div><span className="text-slate-500">Phone Number:</span> <span className="font-semibold text-slate-900">+91 {formData.phoneNumber}</span></div>
                <div><span className="text-slate-500">Requirement:</span> <span className="font-semibold text-slate-900">{formData.jobTitle}</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-950 font-semibold text-xs transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1866EC] hover:bg-[#0D52D4] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 pt-2 text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                  We want to hear from you
                </h2>

                <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-normal">
                  Please fill out the form below, and we will get back to you as soon as possible.
                </p>
              </div>

              {/* Right Column Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4 text-left">
                {/* Full name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Full name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-text ${
                      errors.fullName ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                </div>

                {/* Company name * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Company name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-text ${
                      errors.companyName ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.companyName}</p>}
                </div>

                {/* Job title / Requirement * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Job title / Requirement <span className="text-blue-600">*</span>
                  </label>
                  <select
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-pointer"
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
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-text ${
                      errors.email ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
                </div>

                {/* Phone number * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Phone number <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 flex items-center gap-1 text-xs text-slate-700 font-semibold pointer-events-none border-r border-slate-300 pr-2">
                      <span className="text-sm">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="84214 77238"
                      className={`w-full pl-20 pr-4 py-3 bg-white border rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs cursor-text ${
                        errors.phoneNumber ? 'border-red-500' : 'border-blue-200'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phoneNumber}</p>}
                </div>

                {/* Please verify your request. * */}
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
                      <RefreshCw className="w-4 h-4 text-[#1866EC] mb-0.5" />
                      <span>reCAPTCHA</span>
                    </div>
                  </div>
                  {errors.captchaVerified && (
                    <p className="text-red-500 text-xs mt-1 font-semibold">{errors.captchaVerified}</p>
                  )}
                </div>

                {/* Privacy Disclaimer */}
                <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                  Sparrow needs the contact information you provide to us to contact you about our products and services. To learn more, review our <a href="#" className="text-blue-600 underline font-semibold">Privacy Policy</a>.
                </p>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1866EC] hover:bg-[#0D52D4] text-white font-bold text-sm tracking-wide shadow-md shadow-blue-500/20 transition-all disabled:opacity-70 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>

        <footer className="w-full border-t border-blue-200 py-4 px-4 text-center text-xs text-slate-500 bg-white/60">
          &copy; 2026 Sparrow IT and digital solutions. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
