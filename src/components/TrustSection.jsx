import React from 'react';
import { Share2, Search, Globe, Smartphone, Cpu, Palette, TrendingUp, Sparkles } from 'lucide-react';

export default function TrustSection() {
  const capabilities = [
    { name: 'Meta Ads Campaigns', icon: Share2 },
    { name: 'Google Ads & PPC', icon: Search },
    { name: 'React & Vite WebApps', icon: Globe },
    { name: 'Android & iOS Mobile Apps', icon: Smartphone },
    { name: 'Custom Enterprise Software', icon: Cpu },
    { name: 'UI/UX Interface Design', icon: Palette },
    { name: 'SEO & Lead Generation', icon: TrendingUp },
    { name: 'Brand Identity & Creatives', icon: Sparkles },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-[#0A2E85] via-[#08236B] to-[#06183D] text-white overflow-hidden relative">
      <div className="site-container text-center mb-4">
        <p className="text-xs font-mono tracking-widest text-sky-300 uppercase font-semibold">
          CORE CAPABILITIES &amp; TECHNOLOGY SERVICES
        </p>
      </div>

      {/* Smooth Continuous Marquee Ticker */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-2">
          {capabilities.concat(capabilities).map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-900/40 border border-blue-400/20 text-xs font-semibold text-blue-100 backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{cap.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
