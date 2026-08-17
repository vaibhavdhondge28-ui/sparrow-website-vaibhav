import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Layers, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import SparrowLogo from './SparrowLogo';
import LetsTalkButton from './LetsTalkButton';

export default function ProductDetailPage({ product, onClose, onOpenContact }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!product) return null;

  // Detailed info for each product matching Haptiq's product page structure
  const productDataMap = {
    skillverse: {
      id: 'skillverse',
      badge: 'AI-POWERED LEARNING PLATFORM',
      title: 'SkillVerse AI',
      headline: 'Unified AI learning solutions with real-time intelligence.',
      subtitle: 'One platform that generates personalized courses, interactive quizzes, and instant AI tutor assistance.',
      description: 'SkillVerse is a full-stack AI-driven educational software that transforms raw topics into structured learning modules, interactive assessments, and real-time student analytics.',
      demoUrl: 'https://skillverse-ai-course-generator.vercel.app/',
      image: '/skillverse-poster.jpg',
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
      image: '/ib-poster.jpg',
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
              <span>Inquire This Product</span>
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

        {/* SECTION 1: Product Hero Banner (Matching Haptiq Screenshot 2) */}
        <section className="py-16 sm:py-24 px-6 sm:px-12 text-center max-w-5xl mx-auto space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>{info.badge}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {info.headline}
          </h2>

          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed">
            {info.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <LetsTalkButton
              onClick={() => onOpenContact(info.title)}
              label="Talk to our team"
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

          {/* Stats Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {info.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-blue-900/40 border border-blue-400/20 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.val}</div>
                <div className="text-[11px] font-mono text-sky-200 uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Feature Architecture (Matching Haptiq Screenshot 3 - White Section) */}
        <section className="py-20 bg-white text-slate-900 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">PRODUCT CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                From fragmented data to <span className="text-[#1866EC]">coordinated execution.</span>
              </h2>
              <p className="text-slate-600 text-sm">
                Sparrow connects your product architecture to an intelligent, automated execution layer.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {info.features.map((feat, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md space-y-3 hover:border-blue-300 transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1866EC] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Platform Foundation (Matching Haptiq Screenshot 3 - Royal Blue Foundation) */}
        <section className="py-20 bg-[#0B3392] text-white px-6 sm:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">ARCHITECTURE BASE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Start with the foundation. Extend as you scale.
              </h2>
              <p className="text-blue-100 text-sm max-w-xl mx-auto">
                A single generalized layer built for enterprise stability, rapid scaling, and seamless API integrations.
              </p>
            </div>

            {/* Platform Base Graphic Card */}
            <div className="p-8 rounded-3xl bg-[#092B80] border border-blue-400/30 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#1866EC] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                  PLATFORM FOUNDATION BASE
                </span>
                <h3 className="text-2xl font-bold text-white">{info.title} Core Stack</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Built with modular scalability to handle high user concurrency, real-time data sync, and multi-tenant expansion.
                </p>

                <div className="space-y-2 pt-2">
                  {info.architecture.map((arch, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-blue-200 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Mockup Container */}
              <div className="lg:col-span-6">
                {info.image ? (
                  <div className="rounded-2xl overflow-hidden border border-blue-400/30 shadow-xl">
                    <img src={info.image} alt={`${info.title} - ${info.badge}`} loading="lazy" className="w-full h-auto max-h-[300px] object-cover" />
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-950 p-8 border border-blue-400/30 text-center space-y-4">
                    <ShieldCheck className="w-12 h-12 text-sky-300 mx-auto" />
                    <div className="text-sm font-bold text-white">Confidential Enterprise System</div>
                    <div className="text-xs text-blue-300">Restricted Multi-Role Admin Access &amp; Secured Workflow Triggers</div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <LetsTalkButton onClick={() => onOpenContact(info.title)} label={`Inquire About ${info.title}`} size="md" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-blue-800 py-6 px-6 text-center text-xs text-blue-300 bg-[#092B80]">
          &copy; 2026 Sparrow IT and digital solutions. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
