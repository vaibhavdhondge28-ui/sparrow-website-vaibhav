import React, { useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SparrowLogo from './SparrowLogo';
import LetsTalkButton from './LetsTalkButton';

export default function Footer({ onOpenContact }) {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <footer className="bg-haptiq-footer text-blue-200 pt-16 pb-10 border-t border-blue-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-blue-900/50">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="cursor-pointer">
              <SparrowLogo variant="dark" />
            </a>

            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              Sparrow IT and digital solutions delivers high-ROAS Meta Ads (Facebook/Instagram), Google Ads campaigns, and custom web &amp; mobile app development for growing businesses.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-white">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Call / WhatsApp: <a href="tel:8421477238" className="hover:underline text-sky-300">8421477238</a> / <a href="tel:9022454300" className="hover:underline text-sky-300">9022454300</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: <a href="mailto:sparrowitdigitalsolutions@gmail.com" className="hover:underline text-sky-300">sparrowitdigitalsolutions@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Offerings</h4>
            <ul className="space-y-2.5 text-xs text-blue-100">
              <li>
                <button onClick={() => onOpenContact('Meta Ads (Facebook & Instagram Ads)')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Meta Ads (Facebook &amp; Instagram Ads)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Google Ads & PPC Marketing')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Google Ads &amp; PPC Campaigns
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Custom Web Application Development')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Custom Web Application Development
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Mobile App Development (Android & iOS)')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Mobile App Development (Android &amp; iOS)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Custom Software & Enterprise Apps')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Custom Software &amp; Enterprise Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Company</h4>
            <ul className="space-y-2.5 text-xs text-blue-100">
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#digital-marketing" className="hover:text-white transition-colors cursor-pointer">Digital Marketing</a></li>
              <li><a href="#app-development" className="hover:text-white transition-colors cursor-pointer">App Development</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors cursor-pointer">Platform Solutions</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors cursor-pointer">Insights</a></li>
            </ul>
          </div>

          {/* Action Button */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Connect</h4>
            <LetsTalkButton
              onClick={() => onOpenContact()}
              size="sm"
              className="w-full"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div>
            &copy; 2026 Sparrow IT and digital solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setActivePolicy('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => setActivePolicy('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
            />

            <motion.div
              className="relative w-full max-w-xl bg-white rounded-3xl p-8 shadow-2xl text-slate-800 space-y-4 z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button
                onClick={() => setActivePolicy(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-slate-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-slate-900">
                {activePolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Sparrow IT and digital solutions values your privacy. All information submitted through our contact forms is used solely to respond to project inquiries and manage Meta/Google Ads campaigns and custom software development services.
              </p>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActivePolicy(null)}
                  className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
