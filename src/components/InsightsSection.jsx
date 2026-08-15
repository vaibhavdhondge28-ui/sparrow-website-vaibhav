import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function InsightsSection({ onOpenContact }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 'meta-ads-roas',
      tag: 'DIGITAL MARKETING',
      title: 'How to Double Your Meta Ads ROAS in 2026',
      date: 'AUG 12, 2026',
      color: 'bg-blue-600',
      summary: 'Learn the exact ad creative framework, CAPI setup, and broad targeting strategies that drive 4.5x+ ROAS.',
      content: 'Scaling Meta Ads requires a balance between thumb-stopping ad creatives, broad targeting, and conversion API tracking. By connecting Meta pixel events directly to custom web app landing pages, businesses eliminate drop-off and capture qualified leads instantly.',
    },
    {
      id: 'google-ads-ppc',
      tag: 'LEAD GENERATION',
      title: 'Google Search Ads vs Performance Max: Which Wins?',
      date: 'AUG 08, 2026',
      color: 'bg-indigo-600',
      summary: 'A deep dive into high-intent search bidding vs PMax automated campaigns for maximum lead volume.',
      content: 'Google Search Ads remain the gold standard for high-intent B2B and local service leads, while Performance Max excels at visual retargeting. Combining both with high-converting custom landing pages yields up to 8.2% CTR and lower cost-per-lead.',
    },
    {
      id: 'custom-web-apps',
      tag: 'APP ENGINEERING',
      title: 'Why React & Vite Outperform Generic WordPress Templates',
      date: 'AUG 02, 2026',
      color: 'bg-sky-600',
      summary: 'Discover how fast 1-second load times and custom web app architecture increase sales conversions.',
      content: 'Generic CMS templates are bloated with unused plugins and slow load times. Modern React and Vite web applications load under 1 second, offer total design freedom, and convert traffic into paying clients with zero friction.',
    },
  ];

  return (
    <section id="insights" className="py-24 bg-gradient-to-b from-white via-[#F0F6FF] via-[#0D40B3] to-[#0B3392] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs font-mono font-bold uppercase tracking-wider">
            INSIGHTS &amp; STRATEGY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What's new in marketing <br />
            &amp; <span className="text-[#38BDF8]">app development.</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            Proven growth playbooks, ad scaling tactics, and modern app architecture written by the Sparrow IT and digital solutions team.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#09224E]/90 border border-blue-400/30 shadow-xl space-y-6 text-left hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedArticle(art)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full ${art.color} text-white font-mono text-[10px] font-bold uppercase tracking-wider`}>
                    {art.tag}
                  </span>
                  <span className="text-[10px] font-mono text-sky-300">
                    {art.date}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug">
                  {art.title}
                </h3>

                <p className="text-blue-100 text-xs leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-sky-300 border-t border-blue-800/80">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk growth strategy" size="md" />
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
            />

            <motion.div
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl text-slate-900 space-y-5 z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#1866EC] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {selectedArticle.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedArticle.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedArticle.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {selectedArticle.content}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    const topic = selectedArticle.title;
                    setSelectedArticle(null);
                    onOpenContact(topic);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#1866EC] text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
                >
                  Consult on This Strategy
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
