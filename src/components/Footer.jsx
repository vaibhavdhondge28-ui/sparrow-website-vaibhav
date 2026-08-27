import React, { useState } from 'react';
import { Mail, Phone, MapPin, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SparrowLogo from './SparrowLogo';
import LetsTalkButton from './LetsTalkButton';

export default function Footer({ onOpenContact, onNavigate }) {
  const [activePolicy, setActivePolicy] = useState(null);

  const serviceLinks = [
    { label: 'Software Development', path: '/software-company-in-malegaon/' },
    { label: 'Website Development', path: '/web-development-company-in-malegaon/' },
    { label: 'Mobile App Engineering', path: '/mobile-app-development-in-malegaon/' },
    { label: 'Digital Marketing & Ads', path: '/digital-marketing-company-in-malegaon/' },
    { label: 'Custom Enterprise Software', path: '/custom-software-development-in-malegaon/' },
  ];

  const locationLinks = [
    { label: 'Malegaon HQ', path: '/locations/malegaon/' },
    { label: 'Nashik Region', path: '/locations/nashik/' },
    { label: 'Dhule Region', path: '/locations/dhule/' },
    { label: 'Manmad Region', path: '/locations/manmad/' },
    { label: 'Nandgaon Region', path: '/locations/nandgaon/' },
    { label: 'Yeola Region', path: '/locations/yeola/' },
  ];

  return (
    <footer className="bg-[#06152B] text-blue-200 pt-16 pb-10 border-t border-blue-900/60 relative">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-blue-900/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="/" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('/'); }} className="cursor-pointer">
              <SparrowLogo variant="dark" />
            </a>

            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              Sparrow IT &amp; Digital Solutions provides custom software development, web applications, mobile apps, and digital growth services for businesses in Malegaon, Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Malegaon &amp; Nashik, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Call / WhatsApp: <a href="tel:8421477238" className="hover:underline text-sky-300">8421477238</a> / <a href="tel:8806413189" className="hover:underline text-sky-300">8806413189</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="hover:underline text-sky-300">sparrowdigisolution@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Technology Services Links */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Services &amp; Capabilities</h4>
            <ul className="space-y-2.5 text-xs text-blue-100">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(service.path)}
                    className="hover:text-sky-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{service.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Priority Locations */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Regional Service Hubs</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-blue-100">
              {locationLinks.map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(loc.path)}
                  className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-400/20 hover:border-sky-400/50 hover:text-white transition-all text-left cursor-pointer"
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Modal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
          <div>
            &copy; {new Date().getFullYear()} Sparrow IT &amp; Digital Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setActivePolicy('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => setActivePolicy('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => setActivePolicy('refund')} className="hover:text-white transition-colors cursor-pointer">
              Refund Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-blue-400/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 text-left relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActivePolicy(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-400/30 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {activePolicy === 'privacy' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    Sparrow IT &amp; Digital Solutions is committed to protecting your privacy. We collect client contact information solely for project communication, proposal generation, and service delivery. We do not sell or share your personal data with third-party marketers.
                  </p>
                </div>
              )}

              {activePolicy === 'terms' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Terms of Service</h3>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    All software, custom code, and digital deliverables created by Sparrow IT &amp; Digital Solutions are developed under agreed project milestones. Clients maintain 100% full intellectual property ownership upon final milestone completion.
                  </p>
                </div>
              )}

              {activePolicy === 'refund' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Refund &amp; Cancellation Policy</h3>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    Project deposits and milestone payments cover completed engineering sprints, wireframing, and custom code development. Refunds for milestone phases are handled transparently according to project contract terms.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
