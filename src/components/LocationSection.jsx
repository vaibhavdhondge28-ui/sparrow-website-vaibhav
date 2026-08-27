import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationSection() {
  const nearbyCities = ['Malegaon HQ', 'Nashik', 'Dhule', 'Manmad', 'Nandgaon', 'Yeola'];

  return (
    <section className="py-12 sm:py-16 bg-[#08225C] text-white border-y border-blue-400/20 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Subtle Location Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-400/30 text-sky-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>REGIONAL FOOTPRINT</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Based in Malegaon. <br className="hidden sm:inline" />
            <span className="text-[#38BDF8]">Built for businesses beyond it.</span>
          </h2>

          {/* Natural 65-word copy */}
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            Headquartered in Malegaon, Sparrow partners with ambitious enterprises across Northern Maharashtra—including Nashik, Dhule, Manmad, Nandgaon, and Yeola. We engineer custom software development, high-performance website development, mobile applications, and digital solutions designed to streamline operations and drive sustainable business growth.
          </p>

          {/* City Nodes Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { name: 'Malegaon HQ', path: '/locations/malegaon/' },
              { name: 'Nashik', path: '/locations/nashik/' },
              { name: 'Dhule', path: '/locations/dhule/' },
              { name: 'Manmad', path: '/locations/manmad/' },
              { name: 'Nandgaon', path: '/locations/nandgaon/' },
              { name: 'Yeola', path: '/locations/yeola/' },
            ].map((city, idx) => (
              <a
                key={idx}
                href={city.path}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', city.path);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-900/50 hover:bg-blue-800/80 border border-blue-400/20 hover:border-sky-400/50 text-xs font-mono text-sky-200 hover:text-white transition-all cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-sky-400" />
                <span>{city.name}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
