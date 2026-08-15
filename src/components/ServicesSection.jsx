import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Share2, Search, Globe, Smartphone, Cpu, Palette, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('marketing');

  const marketingServices = [
    {
      title: 'Meta Ads (Facebook & Instagram)',
      icon: Share2,
      tag: 'HIGH ROAS CAMPAIGNS',
      desc: 'Precision audience targeting, retargeting funnels, and high-converting ad creatives designed to maximize return on ad spend.',
      deliverables: ['Custom Ad Strategy & Copywriting', 'A/B Creative Testing', 'Pixel & CAPI Event Setup', 'Weekly ROAS Reporting'],
    },
    {
      title: 'Google Ads & PPC Marketing',
      icon: Search,
      tag: 'HIGH INTENT LEADS',
      desc: 'Search, Display, and Performance Max campaigns targeting ready-to-buy customers with conversion-optimized landing pages.',
      deliverables: ['Keyword Research & Bidding', 'Search & PMax Campaigns', 'Negative Keyword Shielding', 'Conversion Tracking Setup'],
    },
    {
      title: 'SEO & Lead Generation',
      icon: TrendingUp,
      tag: 'ORGANIC GROWTH',
      desc: 'Long-term organic search ranking strategies combined with automated lead capture funnels to drive consistent inbound leads.',
      deliverables: ['Technical SEO Audits', 'On-Page Content Optimization', 'Local Google Business Setup', 'Lead Magnet Funnels'],
    },
    {
      title: 'Brand Creatives & Design',
      icon: Sparkles,
      tag: 'VISUAL ASSETS',
      desc: 'High-converting ad graphics, video motion assets, and brand collateral that captivate attention and build brand trust.',
      deliverables: ['Ad Creative Bundles', 'Social Media Templates', 'Brand Identity Systems', 'Landing Page Banners'],
    },
  ];

  const appDevServices = [
    {
      title: 'Custom Web Applications',
      icon: Globe,
      tag: 'REACT & NEXT.JS',
      desc: 'Fast, responsive, enterprise-grade web applications built with modern JavaScript frameworks for seamless user experience.',
      deliverables: ['Custom React / Vite / Next.js', 'RESTful & GraphQL API Integration', 'Responsive Mobile-First UI', 'Cloud Deployment & Hosting'],
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      tag: 'ANDROID & IOS NATIVE',
      desc: 'Cross-platform and native mobile apps with intuitive interfaces, real-time push notifications, and secure offline storage.',
      deliverables: ['React Native / Flutter Build', 'App Store & Play Store Publishing', 'User Auth & Payment Gateways', 'Performance Optimization'],
    },
    {
      title: 'Custom Software & ERPs',
      icon: Cpu,
      tag: 'ENTERPRISE TOOLS',
      desc: 'Tailored internal tools, inventory management software, and business workflow automation designed to streamline operations.',
      deliverables: ['Admin Dashboard Controls', 'Role-Based Access (RBAC)', 'Database Schema Design', 'Third-Party Software Sync'],
    },
    {
      title: 'UI/UX Interface Design',
      icon: Palette,
      tag: 'HUMAN CENTRIC',
      desc: 'Wireframing, interactive prototyping, and design systems crafted to delight users and maximize conversion rates.',
      deliverables: ['Figma Design Prototypes', 'Design Tokens & Components', 'User Flow Mapping', 'Usability Testing'],
    },
  ];

  const currentServices = activeTab === 'marketing' ? marketingServices : appDevServices;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#06183D] via-[#092252] to-[#06152B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-widest">
            OUR CORE EXPERTISE
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Digital marketing &amp; custom software <br />
            <span className="text-[#38BDF8]">built under one roof.</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            Select a service category to explore how Sparrow IT and digital solutions drives scalable business growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-blue-950/80 border border-blue-400/20 shadow-inner">
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'marketing'
                  ? 'bg-[#1866EC] text-white shadow-lg'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              1. Digital Marketing &amp; Ads
            </button>
            <button
              onClick={() => setActiveTab('appdev')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'appdev'
                  ? 'bg-[#1866EC] text-white shadow-lg'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              2. Custom Web &amp; App Dev
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentServices.map((svc, index) => {
              const Icon = svc.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-[#0A234A]/80 border border-blue-500/20 p-8 shadow-xl hover:border-blue-400/50 transition-all flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-sky-300 flex items-center justify-center group-hover:bg-[#1866EC] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-400/30 text-sky-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {svc.title}
                    </h3>

                    <p className="text-blue-100 text-sm leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-blue-900/60">
                      {svc.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-blue-200">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenContact(svc.title)}
                      className="w-full py-3 rounded-xl bg-blue-900/60 hover:bg-[#1866EC] border border-blue-400/30 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Inquire About {svc.title.split(' ')[0]}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="pt-4 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk about your project" size="md" />
        </div>
      </div>
    </section>
  );
}
