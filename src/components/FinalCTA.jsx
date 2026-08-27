import React from 'react';
import { motion } from 'framer-motion';
import LetsTalkButton from './LetsTalkButton';

export default function FinalCTA({ onOpenContact }) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B3392] via-[#071C3A] to-[#051329] text-white relative overflow-hidden">
      <div className="site-container relative z-10 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Ready to end the waiting?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Not sure if Meta/Google Ads or custom web/mobile app development is right for your business? Get in touch with Sparrow IT and digital solutions — we're happy to talk it through.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2 flex justify-center"
        >
          <LetsTalkButton
            onClick={() => onOpenContact()}
            label="Let's talk"
            size="lg"
          />
        </motion.div>

        {/* Contact Quick Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-[#0B2347]/90 border border-blue-400/30 shadow-xl space-y-4 text-left">
            <div className="flex items-center justify-between text-xs font-mono text-sky-300 border-b border-blue-800/80 pb-3">
              <span className="font-bold text-white">SPARROW CLIENT CONSULTATION</span>
              <span className="text-sky-400 font-semibold">DIRECT ACCESS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800">
                <div className="font-mono text-[10px] text-blue-300">PHONE CONTACT</div>
                <div className="font-bold text-white mt-0.5">8421477238 / 8806413189</div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800">
                <div className="font-mono text-[10px] text-blue-300">EMAIL CONTACT</div>
                <div className="font-bold text-white mt-0.5 truncate">sparrowdigisolution@gmail.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
