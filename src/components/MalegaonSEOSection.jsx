import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function MalegaonSEOSection({ onNavigate }) {
  return (
    <section className="py-20 bg-[#092347] text-white relative overflow-hidden">
      <div className="site-container relative z-10 space-y-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>REGIONAL PRESENCE &amp; SERVICE HUB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Custom Software for <span className="text-[#38BDF8]">Malegaon, Nashik &amp; Maharashtra</span>
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Sparrow IT &amp; Digital Solutions partners with startups, commercial enterprises, and growing businesses in Malegaon, Nashik, and across Maharashtra to build custom software, web applications, mobile apps, and performance ad campaigns.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('/software-company-in-malegaon/')}
              className="p-4 rounded-xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-1.5"
            >
              <div className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">MALEGAON HUB</div>
              <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                <span>Software Company Malegaon</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('/software-company-in-nashik/')}
              className="p-4 rounded-xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-1.5"
            >
              <div className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">NASHIK HUB</div>
              <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                <span>Software Company Nashik</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('/web-development-company-in-malegaon/')}
              className="p-4 rounded-xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-1.5"
            >
              <div className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">SERVICE PAGE</div>
              <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                <span>Web Development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => onNavigate('/mobile-app-development-in-malegaon/')}
              className="p-4 rounded-xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-1.5"
            >
              <div className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">SERVICE PAGE</div>
              <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                <span>Mobile App Dev</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
