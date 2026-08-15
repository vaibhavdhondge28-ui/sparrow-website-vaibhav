import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Globe, Smartphone, Cpu, ArrowRight, Sparkles, Building2, HelpCircle, MapPin, Phone } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function SoftwareCompanyNashik({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software Company in Nashik | Sparrow IT & Digital Solutions";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/software-company-in-nashik/";
  }, []);

  const services = [
    { title: 'Custom Software Engineering', desc: 'Enterprise business applications, workflow automation tools, and administrative management platforms engineered for regional businesses.', icon: Cpu },
    { title: 'Web Application Development', desc: 'High-performance React, Next.js, and Node.js web applications designed for speed, security, and scalability.', icon: Globe },
    { title: 'Mobile App Development', desc: 'Native Android and iOS mobile applications with real-time sync, push notifications, and payment gateway integration.', icon: Smartphone },
    { title: 'Enterprise ERP & CRM Systems', desc: 'Integrated Enterprise Resource Planning and CRM software to streamline sales, stock, and personnel operations.', icon: Building2 },
    { title: 'Digital Marketing & Ads', desc: 'High-ROAS Meta Ads, Google PPC campaigns, and targeted lead generation strategies for growing commercial brands.', icon: Sparkles },
    { title: 'Website Engineering & UI/UX', desc: 'Conversion-driven business websites, landing pages, and e-commerce portals built with modern responsive stacks.', icon: Code2 },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>NASHIK REGION &amp; NORTH MAHARASHTRA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Software &amp; Digital Solutions in <span className="text-[#38BDF8]">Nashik</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions works with commercial enterprises, startups, and institutions across Nashik and North Maharashtra to build custom software, web apps, mobile applications, and digital growth engines.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Software Development in Nashik')} label="Discuss Your Project" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Malegaon Regional Page
          </button>
        </div>
      </section>

      {/* Regional Service Story */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-blue-950/70 border border-blue-400/25 shadow-xl space-y-4 text-left">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">REGIONAL TECHNOLOGY PARTNER</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering High-Performance Digital Products for Nashik Businesses
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            As a technology company operating across Nashik District and North Maharashtra, Sparrow IT &amp; Digital Solutions combines technical expertise with deep regional market understanding. Whether you require an internal ERP tool, a customer-facing mobile application, or a high-converting web platform, our engineering team delivers software products that drive measurable efficiency and business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">SOLUTIONS CATALOG</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software &amp; IT Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-blue-900/40 border border-blue-400/20 shadow-md space-y-3 text-left hover:border-blue-400/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-sky-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs text-blue-100 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#092B80] to-[#1866EC] text-white text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Software Project in Nashik?</h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Contact Sparrow IT &amp; Digital Solutions today to schedule a technical consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <LetsTalkButton onClick={() => onOpenContact('Software Development in Nashik')} label="Start Your Project" size="md" />
            <a href="tel:8421477238" className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-300" />
              <span>Call: 8421477238</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
