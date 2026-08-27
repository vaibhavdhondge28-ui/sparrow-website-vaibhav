import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Share2, Search, Globe, Smartphone, Cpu, Palette, TrendingUp, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('marketing');

  const marketingServices = [
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram)',
      icon: Share2,
      badge: 'HIGH ROAS CAMPAIGNS',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-600 text-white',
      desc: 'Precision audience targeting, retargeting funnels, and high-converting video/image ad creatives designed to maximize ROAS.',
      deliverables: ['Custom Ad Strategy & Copywriting', 'A/B Creative Testing Engine', 'Pixel & CAPI Conversion Setup', 'Weekly ROAS & Lead Reporting'],
    },
    {
      id: 'google-ads',
      title: 'Google Ads & PPC Marketing',
      icon: Search,
      badge: 'HIGH INTENT LEADS',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      desc: 'Search, Display, and Performance Max campaigns targeting customers with conversion-optimized landing pages.',
      deliverables: ['Keyword Bidding & Negative Match', 'Search & Performance Max Campaigns', 'Conversion API & Tag Manager', 'Cost-Per-Lead Optimization'],
    },
    {
      id: 'seo-leadgen',
      title: 'SEO & Lead Generation',
      icon: TrendingUp,
      badge: 'ORGANIC SEARCH GROWTH',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-600 text-white',
      desc: 'Organic search ranking strategies combined with automated lead capture funnels to drive consistent inbound business.',
      deliverables: ['Technical On-Page SEO Audits', 'Organic Content Optimization', 'Local Google Profile Management', 'Automated Lead Capture Funnels'],
    },
    {
      id: 'brand-design',
      title: 'Brand Creatives & Design',
      icon: Sparkles,
      badge: 'HIGH IMPACT VISUALS',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-600 text-white',
      desc: 'High-converting ad graphics, video motion assets, and brand collateral that captivate attention and build consumer trust.',
      deliverables: ['Social Media & Ad Creative Bundles', 'Motion Graphic Ad Banners', 'Brand Identity Guidelines', 'Conversion Landing Page Designs'],
    },
  ];

  const appDevServices = [
    {
      id: 'web-apps',
      title: 'Custom Web Applications',
      icon: Globe,
      badge: 'REACT & NEXT.JS',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      iconBg: 'bg-cyan-600 text-white',
      desc: 'Fast, responsive, enterprise-grade web applications built with modern JavaScript frameworks for seamless user experience.',
      deliverables: ['React, Vite & Next.js Build', 'RESTful & GraphQL API Integration', 'Responsive Mobile-First Canvas', 'Sub-Second Page Load Speed'],
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Development',
      icon: Smartphone,
      badge: 'ANDROID & IOS NATIVE',
      badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
      iconBg: 'bg-violet-600 text-white',
      desc: 'Cross-platform and native mobile apps with intuitive interfaces, real-time push notifications, and offline data sync.',
      deliverables: ['React Native / Flutter Build', 'Play Store & App Store Publishing', 'User Auth & Payment Gateways', 'Push Notification Triggers'],
    },
    {
      id: 'custom-software',
      title: 'Custom Software & ERPs',
      icon: Cpu,
      badge: 'ENTERPRISE WORKFLOWS',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-[#1866EC] text-white',
      desc: 'Tailored internal tools, inventory management software, and business workflow automation designed to streamline operations.',
      deliverables: ['Admin Dashboard Controls', 'Role-Based Access (RBAC)', 'Database Schema Architecture', 'Third-Party Software Sync'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Interface Design',
      icon: Palette,
      badge: 'HUMAN CENTRIC UX',
      badgeBg: 'bg-pink-50 text-pink-700 border-pink-200',
      iconBg: 'bg-pink-600 text-white',
      desc: 'Wireframing, interactive prototyping, and design systems crafted to delight users and maximize conversion rates.',
      deliverables: ['Figma Design Prototypes', 'Design System & Component Kits', 'User Journey Mapping', 'Usability Testing & Iteration'],
    },
  ];

  const currentServices = activeTab === 'marketing' ? marketingServices : appDevServices;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0A2750] via-[#F4F8FF] to-white text-slate-900 relative overflow-hidden">
      <div className="site-container relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>OUR CORE EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Digital marketing &amp; custom software <br />
            <span className="text-[#1866EC]">built under one roof.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Choose a service pillar to explore how Sparrow IT and digital solutions drives measurable revenue growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-blue-200 shadow-xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-2.5 rounded-lg font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'marketing'
                  ? 'bg-[#1866EC] text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Digital Marketing &amp; Ads
            </button>
            <button
              onClick={() => setActiveTab('appdev')}
              className={`px-6 py-2.5 rounded-lg font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'appdev'
                  ? 'bg-[#1866EC] text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Custom Web &amp; App Dev
            </button>
          </div>
        </div>

        {/* Bento Service Cards (Refined rounded-2xl) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="rounded-2xl bg-white border border-blue-100 p-7 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group space-y-5 text-left"
                >
                  <div className="space-y-4">
                    {/* Header Icon & Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl ${svc.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5.5 h-5.5" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${svc.badgeBg}`}>
                        {svc.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#1866EC] transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      {svc.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#1866EC] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-1">
                    <button
                      onClick={() => onOpenContact(svc.title)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1866EC] hover:text-blue-800 transition-colors cursor-pointer group/link"
                    >
                      <span>Inquire About {svc.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="pt-2 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk about your project" size="md" />
        </div>
      </div>
    </section>
  );
}
