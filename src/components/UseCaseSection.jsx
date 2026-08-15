import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function UseCaseSection({ onOpenContact }) {
  const useCases = [
    {
      title: 'For E-commerce Brands',
      desc: 'Catalog Meta ads, Google Shopping PPC, and custom high-speed web stores built to increase average order value and ROAS.',
    },
    {
      title: 'For Local Businesses & SMEs',
      desc: 'Hyper-targeted Google Search ads, local SEO, and instant lead capture forms designed to fill your sales pipeline daily.',
    },
    {
      title: 'For Tech Startups',
      desc: 'Rapid web app prototyping (React/Vite), MVP mobile app development (iOS & Android), and pitch-ready UI/UX design.',
    },
    {
      title: 'For Enterprise Clients',
      desc: 'Custom software architecture, secure administrative tools, multi-role RBAC portals, and database workflow automation.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#60A5FA] via-[#BFDBFE] via-[#EFF6FF] to-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            USE CASES
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Built for businesses that <br />
            <span className="text-[#1866EC]">demand real growth.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover how Sparrow IT and digital solutions tailors Meta/Google ad campaigns and custom app engineering for your industry.
          </p>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-blue-100 shadow-xl space-y-4 text-left hover:border-blue-300 hover:shadow-2xl transition-all group"
            >
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1866EC] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact(item.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1866EC] hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Explore Solution</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
