import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Search, Globe, Smartphone, Cpu, Sparkles, ShieldCheck, ShoppingBag, Bot } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function OrbitalEcosystem({ onOpenContact }) {
  // 8 Ecosystem Nodes
  const orbitNodes = [
    { name: 'SkillVerse AI', icon: Bot, category: 'AI Platform', color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { name: 'IB Boutique', icon: ShoppingBag, category: 'E-Commerce', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { name: 'Police City Mgmt', icon: ShieldCheck, category: 'Enterprise App', color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { name: 'Meta Ads', icon: Share2, category: 'High ROAS', color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'Google Ads & PPC', icon: Search, category: 'Intent Leads', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'Web Applications', icon: Globe, category: 'React / Vite', color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { name: 'Mobile Apps', icon: Smartphone, category: 'Android / iOS', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { name: 'Custom ERP', icon: Cpu, category: 'Automation', color: 'text-[#1866EC] bg-blue-50 border-blue-200' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A2750] via-[#DCEBFF] to-[#E6F0FF] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>INTEGRATED ECOSYSTEM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            One connected engine. <br />
            Infinite digital <span className="text-[#1866EC]">possibilities.</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            All Sparrow IT and digital solutions projects, ad marketing channels, and custom software platforms operate seamlessly in a unified digital ecosystem.
          </p>
        </div>

        {/* Circular Clockwise Rotating Ecosystem Graphic (Fully Mobile Responsive) */}
        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[580px] lg:h-[580px] mx-auto flex items-center justify-center my-6 sm:my-10">
          {/* Outer Orbit Line */}
          <div className="absolute inset-0 rounded-full border border-blue-400/40 bg-blue-100/20 backdrop-blur-xs shadow-inner" />
          
          {/* Middle Orbit Line */}
          <div className="absolute inset-[16%] rounded-full border border-blue-400/50 bg-blue-50/30" />

          {/* Inner Orbit Line */}
          <div className="absolute inset-[32%] rounded-full border border-blue-500/40 bg-blue-100/40" />

          {/* Center Hub: Clean Dedicated Sphere Layout (100% Readable SPARROW Text) */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Glowing Pulse Aura */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse" />

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#092B80] via-[#1866EC] to-[#38BDF8] p-1 shadow-[0_0_40px_rgba(24,102,236,0.4)] flex items-center justify-center"
            >
              <div className="w-full h-full rounded-full bg-[#06152B] p-2.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-inner border border-sky-400/30 space-y-1">
                {/* Custom Sparrow Geometric Wing SVG */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center p-1.5 shadow-md">
                  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-white">
                    <path d="M4 22C12 10 26 6 36 8C28 18 16 26 4 22Z" fill="currentColor" />
                    <path d="M12 28C20 20 30 16 38 16C32 26 22 32 12 28Z" fill="#38BDF8" opacity="0.9" />
                  </svg>
                </div>

                {/* Clean 100% Readable Text */}
                <div>
                  <div className="text-xs sm:text-sm font-black text-white uppercase tracking-widest leading-none">
                    SPARROW
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-bold text-sky-300 uppercase tracking-widest mt-0.5">
                    IT &amp; DIGITAL
                  </div>
                </div>

                <div className="px-2 py-0.5 rounded-full bg-blue-950 border border-blue-400/30 text-[7px] sm:text-[8px] font-mono font-bold text-blue-200 uppercase tracking-widest">
                  ECOSYSTEM HUB
                </div>
              </div>
            </motion.div>
          </div>

          {/* Clockwise Rotating Outer Orbit Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 z-10 pointer-events-auto"
          >
            {orbitNodes.map((node, index) => {
              const Icon = node.icon;
              const angle = (index * 360) / orbitNodes.length;
              const radiusPercent = index % 2 === 0 ? 46 : 33; // Alternate outer and inner orbit rings

              const x = 50 + radiusPercent * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radiusPercent * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={index}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute"
                >
                  {/* Counter-Rotate Cards so Text & Icons Stay Upright While Orbiting */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    onClick={() => onOpenContact(node.name)}
                    className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 border border-blue-200/90 shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md group min-w-[110px] sm:min-w-[150px] select-none"
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 border ${node.color} group-hover:bg-[#1866EC] group-hover:text-white transition-colors shadow-xs`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left leading-none">
                      <div className="text-[10px] sm:text-xs font-bold text-slate-900 group-hover:text-[#1866EC] transition-colors whitespace-nowrap">
                        {node.name}
                      </div>
                      <div className="text-[8px] sm:text-[9px] font-mono font-semibold text-blue-600 whitespace-nowrap mt-0.5">
                        {node.category}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Action */}
        <div className="pt-2 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Explore Ecosystem &amp; Let's Talk" size="md" />
        </div>
      </div>
    </section>
  );
}
