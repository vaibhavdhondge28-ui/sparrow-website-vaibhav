import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Cpu,
  Globe,
  ArrowUpRight,
  MapPin,
  Briefcase,
  AlertCircle,
  Zap,
} from 'lucide-react';
import SparrowLogo from './SparrowLogo';
import LetsTalkButton from './LetsTalkButton';

export default function ProductDetailPage({ product, onClose, onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!product) return null;

  // Real Case Studies Data Map
  const productDataMap = {
    skillverse: {
      id: 'skillverse',
      badge: 'AI-POWERED LEARNING PLATFORM',
      title: 'SkillVerse AI',
      headline: 'Unified AI learning solutions with real-time intelligence.',
      subtitle: 'One platform that generates personalized courses, interactive quizzes, and instant AI tutor assistance.',
      description: 'SkillVerse is a full-stack AI-driven educational software that transforms raw topics into structured learning modules, interactive assessments, and real-time student analytics.',
      demoUrl: 'https://skillverse-ai-course-generator.vercel.app/',
      image: '/skillverse-poster.webp',
      industry: 'EdTech & Artificial Intelligence',
      location: 'Malegaon & Remote Cloud',
      servicesProvided: [
        'Custom Web Application Development',
        'Gemini AI API Integration',
        'Responsive UI/UX Engineering',
        'Node.js & Express API Gateway',
      ],
      challenge: 'Traditional e-learning platforms rely on static video courses that lack real-time customization and interactive Q&A capabilities. Students faced rigid learning paths with zero instant feedback.',
      solution: 'Sparrow engineered SkillVerse AI—a full-stack web application leveraging Gemini AI API to generate customized course modules, interactive quizzes, and automated PDF exports in under 3 seconds.',
      relatedServices: [
        { name: 'Web Development in Malegaon', path: '/web-development-company-in-malegaon/' },
        { name: 'Custom Software Development', path: '/custom-software-development-in-malegaon/' },
      ],
      relatedLocations: [
        { name: 'Malegaon HQ', path: '/locations/malegaon/' },
        { name: 'Nashik Region', path: '/locations/nashik/' },
      ],
      stats: [
        { label: 'AI Generation Speed', val: '< 3 Seconds' },
        { label: 'Quiz Accuracy', val: '99.4%' },
        { label: 'Active Modules', val: '500+' },
        { label: 'Tutor Response', val: 'Instant' },
      ],
      features: [
        { title: 'Automated Course Generator', desc: 'Converts any subject prompt into complete modules with lessons, summaries, and PDF export.' },
        { title: 'Interactive AI Tutor', desc: 'Embedded conversational assistant powered by LLM intelligence for instant student Q&A.' },
        { title: 'Smart Quiz Engine', desc: 'Generates custom multiple-choice assessments with immediate scoring and analytical feedback.' },
        { title: 'Progress & Analytics Dashboard', desc: 'Comprehensive telemetry tracking course completion rates, quiz scores, and user growth.' },
      ],
      architecture: [
        'React & Vite Frontend Interface',
        'Node.js & Express API Gateway',
        'Gemini AI API Engine',
        'MySQL Data Relational Store',
      ],
    },
    ib: {
      id: 'ib',
      badge: 'LUXURY E-COMMERCE PLATFORM',
      title: 'IB (Indians Boutique)',
      headline: 'Occasion wear, beautifully curated for digital commerce.',
      subtitle: 'Premium e-commerce web application powering luxury ethnic fashion, store locators, and digital catalogs.',
      description: 'IB (Indians Boutique) is a high-end luxury fashion web application engineered to deliver an opulent shopping experience, multi-store inventory coordination, and seamless mobile checkout.',
      demoUrl: 'https://darshanahireworkspace.github.io/IB/',
      image: '/ib-poster.webp',
      industry: 'Luxury Retail & E-Commerce',
      location: 'Maharashtra Retail Outlets',
      servicesProvided: [
        'E-Commerce Web Development',
        'Mobile-First Responsive Design',
        'Digital Product Catalog Architecture',
        'Multi-Store Location Finder',
      ],
      challenge: 'High-end ethnic fashion retail required a digital showcase that matched the luxury aesthetic of physical boutiques while maintaining sub-second mobile load speeds across 4G/5G networks.',
      solution: 'Sparrow built a lightweight React single-page application (SPA) featuring high-resolution visual catalog galleries, filterable occasion taxonomies, and an integrated multi-boutique map locator.',
      relatedServices: [
        { name: 'Website Development in Malegaon', path: '/web-development-company-in-malegaon/' },
        { name: 'Mobile App Development', path: '/mobile-app-development-in-malegaon/' },
      ],
      relatedLocations: [
        { name: 'Malegaon HQ', path: '/locations/malegaon/' },
        { name: 'Yeola Handloom Hub', path: '/locations/yeola/' },
      ],
      stats: [
        { label: 'Brand Heritage', val: 'Since 1998' },
        { label: 'Connected Stores', val: '3 Outlets' },
        { label: 'Happy Customers', val: '25,000+' },
        { label: 'Mobile Conversion', val: '+45%' },
      ],
      features: [
        { title: 'Digital Catalog Showcase', desc: 'High-resolution image galleries presenting wedding, festive, and contemporary ethnic collections.' },
        { title: 'Multi-Store Location Finder', desc: 'Integrated map locator connecting online shoppers directly to physical retail boutiques.' },
        { title: 'Mobile-First Shopping UX', desc: 'Sub-second page rendering and smooth checkout flows optimized for smartphones.' },
        { title: 'Curated Occasion Collections', desc: 'Filterable product taxonomy for bridal wear, sherwanis, sarees, and designer accessories.' },
      ],
      architecture: [
        'React SPA Architecture',
        'Tailwind Utility Design System',
        'Responsive Mobile-First Canvas',
        'Digital Product Catalog API',
      ],
    },
    police: {
      id: 'police',
      badge: 'CONFIDENTIAL ENTERPRISE SOLUTION',
      title: 'Police City & Administrative Management System',
      headline: 'Streamlined city governance, commercial tracking & event permissions.',
      subtitle: 'Enterprise public safety & administrative management software for municipal oversight and permissions.',
      description: 'Confidential enterprise software engineered to register commercial establishments (clothing stores, groceries, medicals), digitize religious place records, and process municipal festival & event permits with multi-role RBAC security.',
      demoUrl: null,
      image: null,
      industry: 'Municipal & Public Safety Governance',
      location: 'Malegaon & Maharashtra Municipalities',
      servicesProvided: [
        'Custom Enterprise Software',
        'Multi-Role RBAC Security Architecture',
        'Permit Workflow Automation',
        'Database Schema & Audit Logging',
      ],
      challenge: 'Municipal paper-based registration ledgers for commercial shops and public event permits resulted in administrative delays, data silos, and manual auditing bottlenecks.',
      solution: 'Sparrow developed a unified enterprise management system with multi-tier role-based access control (RBAC), enabling digitized shop directory registration, religious place mapping, and automated event permit workflows.',
      relatedServices: [
        { name: 'Software Company in Malegaon', path: '/software-company-in-malegaon/' },
        { name: 'Custom Software Development', path: '/custom-software-development-in-malegaon/' },
      ],
      relatedLocations: [
        { name: 'Malegaon HQ', path: '/locations/malegaon/' },
        { name: 'Nashik Region', path: '/locations/nashik/' },
      ],
      stats: [
        { label: 'Shop Registration', val: '100% Digital' },
        { label: 'Permit Processing', val: 'Real-Time' },
        { label: 'Admin Roles', val: 'Multi-Tier' },
        { label: 'Data Security', val: 'Enterprise' },
      ],
      features: [
        { title: 'Commercial Shop Directory', desc: 'Centralized registry of local apparel shops, grocery stores, pharmacies, and commercial venues.' },
        { title: 'Festival & Event Permissions', desc: 'Automated workflow for submitting, reviewing, and approving public event & procession permits.' },
        { title: 'Religious Places & Safety Records', desc: 'Digitized archives of local places of worship, safety guidelines, and officer deployment logs.' },
        { title: 'Secure Admin Dashboard', desc: 'Role-based access control (RBAC) enabling administrators to grant, revoke, and audit data access.' },
      ],
      architecture: [
        'Custom Enterprise Software Framework',
        'Multi-Role Permission Engine (RBAC)',
        'Secure Encrypted Data Pipeline',
        'Municipal Workflow Automation',
      ],
    },
  };

  const info = productDataMap[product] || productDataMap['skillverse'];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-[#0B3392] text-white overflow-y-auto min-h-screen w-full flex flex-col justify-between"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25 }}
      >
        {/* Top Header Bar */}
        <header className="w-full bg-[#092B80]/90 backdrop-blur-md border-b border-blue-400/20 px-6 sm:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
          <SparrowLogo variant="dark" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenContact(info.title)}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#1866EC] hover:bg-[#0D52D4] text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              <span>Inquire This Project</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="py-16 sm:py-24 px-6 sm:px-12 text-center max-w-5xl mx-auto space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>{info.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {info.headline}
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed">
            {info.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <LetsTalkButton
              onClick={() => onOpenContact(info.title)}
              label="Talk to our engineering team"
              size="lg"
            />

            {info.demoUrl && (
              <a
                href={info.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Live Product</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {info.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-blue-900/40 border border-blue-400/20 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.val}</div>
                <div className="text-[11px] font-mono text-sky-200 uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Details Section */}
        <section className="py-20 bg-white text-slate-900 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Meta Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Industry</div>
                <div className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>{info.industry}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Location</div>
                <div className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{info.location}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Services Delivered</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {info.servicesProvided.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-mono font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-900/60 border border-red-400/30 flex items-center justify-center text-red-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">The Business Challenge</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{info.challenge}</p>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#092B80] to-[#1866EC] text-white space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/80 border border-blue-400/30 flex items-center justify-center text-sky-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Sparrow's Technical Solution</h3>
                <p className="text-sm text-blue-100 leading-relaxed font-normal">{info.solution}</p>
              </div>
            </div>

            {/* Graphic Mockup / Preview Container */}
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">INTERFACE PREVIEW</span>
                <h3 className="text-2xl font-extrabold text-slate-900">Visual System Architecture</h3>
              </div>

              {info.image ? (
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950">
                  <img src={info.image} alt={`${info.title} user interface screenshot`} loading="lazy" className="w-full h-auto max-h-[500px] object-cover" />
                </div>
              ) : (
                <div className="rounded-3xl bg-slate-950 p-12 border border-slate-800 text-center space-y-4 text-white">
                  <ShieldCheck className="w-14 h-14 text-sky-300 mx-auto" />
                  <div className="text-lg font-bold text-white">Confidential Enterprise System</div>
                  <div className="text-xs text-blue-200 max-w-md mx-auto">Restricted Multi-Role Admin Access &amp; Secured Workflow Triggers</div>
                </div>
              )}
            </div>

            {/* Feature Capabilities Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">PRODUCT CAPABILITIES</span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Core Engineering Features
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {info.features.map((feat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{feat.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services & Locations Internal Links */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Related Technology Services</h4>
                <div className="flex flex-wrap gap-2">
                  {info.relatedServices.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onClose();
                        if (onNavigate) onNavigate(s.path);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-xs hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      {s.name} &rarr;
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Related Service Hubs</h4>
                <div className="flex flex-wrap gap-2">
                  {info.relatedLocations.map((l, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onClose();
                        if (onNavigate) onNavigate(l.path);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {l.name} &rarr;
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-[#08225C] text-white text-center space-y-6 px-6">
          <h2 className="text-3xl font-extrabold text-white">
            Build a Similar Solution for Your Enterprise
          </h2>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Contact Sparrow IT &amp; Digital Solutions today to schedule a technical architecture consultation.
          </p>

          <div className="flex justify-center pt-2">
            <LetsTalkButton onClick={() => onOpenContact(info.title)} label={`Inquire About ${info.title}`} size="md" />
          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
}
