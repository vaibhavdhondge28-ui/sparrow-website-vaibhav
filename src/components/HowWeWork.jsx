import React from 'react';
import { motion } from 'framer-motion';
import LetsTalkButton from './LetsTalkButton';

export default function HowWeWork({ onOpenContact }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Growth Strategy',
      desc: 'We analyze your target market, competitors, and software requirements to build a bulletproof execution roadmap.',
    },
    {
      num: '02',
      title: 'Campaign & App Build',
      desc: 'Our team crafts high-ROAS Meta & Google ad creatives while engineering fast, responsive web & mobile apps.',
    },
    {
      num: '03',
      title: 'Launch & Continuous Scaling',
      desc: 'We go live, optimize ad budgets in real-time, track analytics, and iterate your web app for maximum conversion.',
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-gradient-to-b from-[#E6F0FF] via-[#2563EB] to-[#0A2E80] text-white relative overflow-hidden">
      <div className="site-container relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-300/40 text-sky-200 text-xs font-mono font-bold uppercase tracking-widest shadow-md">
            HOW WE WORK
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Turning traffic into revenue. <br />
            Turning ideas into <span className="text-[#38BDF8]">scalable apps.</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            A transparent, 3-step process engineered for predictable revenue growth and flawless software execution.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-[#09224E]/90 border border-blue-400/30 text-white space-y-4 shadow-xl backdrop-blur-md hover:border-blue-300/60 transition-all text-left"
            >
              <div className="text-4xl font-extrabold font-mono text-sky-400">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                {step.title}
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk strategy" size="md" />
        </div>
      </div>
    </section>
  );
}
