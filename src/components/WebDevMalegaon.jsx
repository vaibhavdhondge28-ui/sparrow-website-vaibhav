import React, { useEffect } from 'react';
import { Globe, Code2, CheckCircle2, ArrowRight, MapPin, HelpCircle, Phone } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function WebDevMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Web Development Company in Malegaon | Sparrow IT & Digital Solutions";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/web-development-company-in-malegaon/";
  }, []);

  const features = [
    { title: 'React & Next.js Development', desc: 'Fast, responsive, sub-second web applications built with modern JavaScript frameworks.' },
    { title: 'E-Commerce Website Solutions', desc: 'Custom online store portals, inventory sync, and secure payment gateway integrations.' },
    { title: 'SEO-Optimized Architecture', desc: 'Built-in technical SEO, clean semantic HTML structure, and fast mobile loading speed.' },
    { title: 'Mobile-First Responsive Design', desc: 'Sub-second page rendering engineered to deliver a seamless user experience on smartphones.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>MALEGAON, MAHARASHTRA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Web Development Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Sparrow IT &amp; Digital Solutions builds high-performance business websites, e-commerce platforms, and custom web applications for growing companies in Malegaon.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Web Development in Malegaon')} label="Start Your Web Project" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Software Company Malegaon
          </button>
        </div>
      </section>

      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-blue-950/60 border border-blue-400/20 text-left space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <span>{f.title}</span>
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed pl-7">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#092B80] to-[#1866EC] text-white space-y-4">
          <h2 className="text-2xl font-extrabold">Build Your Business Website with Sparrow</h2>
          <p className="text-xs text-blue-100 max-w-md mx-auto">Get a high-converting, fast, responsive web application engineered for your Malegaon business.</p>
          <div className="pt-2 flex justify-center">
            <LetsTalkButton onClick={() => onOpenContact('Web Development in Malegaon')} label="Discuss Web Project" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
