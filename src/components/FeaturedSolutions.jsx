import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedSolutions({ onOpenContact }) {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-[#0A2750] via-[#1E40AF] via-[#3B82F6] to-[#E6F0FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs font-mono font-bold uppercase tracking-wider">
            INTEGRATED PLATFORM
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Goodbye guesswork. <br />
            Hello <span className="text-sky-300">single source of growth.</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            Sparrow IT and digital solutions connects your Meta &amp; Google ad campaigns directly to high-performing web and mobile app landing pages for maximum conversion.
          </p>
        </div>

        {/* Big Dashboard Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white/95 text-slate-900 border border-blue-200 shadow-2xl space-y-8 max-w-5xl mx-auto backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="px-3 py-1 rounded-full bg-[#1866EC] text-white font-mono text-xs font-bold uppercase tracking-wider">
                All-In-One Solution
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                One agency for both marketing &amp; custom software.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Why hire separate marketing agencies and app developers? Sparrow delivers unified ad campaign strategies and custom web/mobile apps under one roof.
              </p>

              <div className="space-y-2 pt-2">
                {['Meta (Facebook/Instagram) Ad Campaigns', 'Google Search & PPC Setup', 'Custom Web Applications (React/Vite)', 'Android & iOS Mobile App Build'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                    <div className="w-4 h-4 rounded-full bg-[#1866EC] text-white flex items-center justify-center shrink-0 text-[10px]">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenContact()}
                  className="px-6 py-3 rounded-xl bg-[#1866EC] hover:bg-[#0D52D4] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Request Full Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-blue-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                <span className="font-bold text-white">SPARROW MARKETING &amp; APP METRICS</span>
                <span className="text-sky-400 font-semibold">LIVE REPORTING</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Meta Ads ROAS</div>
                  <div className="text-xl font-bold text-sky-400 mt-1">4.5x</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-500/10 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Google Ads CTR</div>
                  <div className="text-xl font-bold text-sky-400 mt-1">8.2%</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-500/10 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">App Uptime</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">99.9%</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B3392] text-white space-y-2 border border-blue-500/30">
                <div className="text-xs font-mono text-sky-300 uppercase">Campaign &amp; App Integration Status</div>
                <div className="text-sm font-semibold">
                  Ads connected directly to custom web app landing pages for instant lead capture.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
