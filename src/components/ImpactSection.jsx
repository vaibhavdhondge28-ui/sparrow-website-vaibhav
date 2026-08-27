import React from 'react';
import { motion } from 'framer-motion';

export default function ImpactSection({ onOpenContact }) {
  const cards = [
    {
      badge: 'DIGITAL MARKETING',
      title: 'Maximize ROAS. Minimize Ad Waste.',
      desc: 'We optimize budget allocation across Meta Ads and Google PPC campaigns daily, ensuring every dollar spent brings trackable leads.',
    },
    {
      badge: 'APP DEVELOPMENT',
      title: 'High-Performance Web & Mobile UX.',
      desc: 'Fast page load times under 1 second, modern React/Vite web apps, and native mobile apps designed for maximum conversion.',
    },
    {
      badge: 'GROWTH ENGINE',
      title: 'Real-Time Performance Tracking.',
      desc: 'Transparent reporting dashboards with direct visibility into ROAS, lead counts, CTR, and app user analytics.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A2E80] via-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/95 text-slate-900 border border-blue-200 shadow-xl space-y-4 text-left backdrop-blur-md hover:shadow-2xl transition-all"
            >
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#1866EC] font-mono text-[10px] font-bold uppercase tracking-wider">
                {card.badge}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
