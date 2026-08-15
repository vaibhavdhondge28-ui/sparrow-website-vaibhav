import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Share2, Search, Smartphone, Bot, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import SparrowLogo from './SparrowLogo';
import LetsTalkButton from './LetsTalkButton';

export default function Navbar({ onOpenContact, onSelectProduct, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Products / Platforms list (Matching Haptiq Screenshot 1: PLATFORMS)
  const platformProducts = [
    {
      id: 'skillverse',
      name: 'SkillVerse AI',
      desc: 'AI-Powered Learning Platform',
      icon: Bot,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      id: 'ib',
      name: 'IB (Indians Boutique)',
      desc: 'Luxury E-Commerce Fashion Platform',
      icon: ShoppingBag,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      id: 'police',
      name: 'Police City System',
      desc: 'Enterprise Governance & Shop Directory',
      icon: ShieldCheck,
      color: 'text-blue-700 bg-blue-50',
    },
  ];

  // Services list (Matching Haptiq Screenshot 1: SERVICES)
  const serviceProducts = [
    {
      name: 'Meta Ads Campaigns',
      desc: 'Targeted High-ROAS Facebook & Instagram Ads',
      icon: Share2,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      name: 'Google Ads & PPC',
      desc: 'Search & Performance Max Lead Generation',
      icon: Search,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      name: 'Custom Web & Mobile Apps',
      desc: 'React, Vite, Android & iOS Engineering',
      icon: Smartphone,
      color: 'text-sky-600 bg-sky-50',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#092B80]/95 backdrop-blur-xl border-b border-blue-400/20 shadow-xl'
          : 'py-4.5 bg-[#0B3392]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Enterprise Sparrow Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('/'); }} className="cursor-pointer">
          <SparrowLogo variant="dark" />
        </a>

        {/* Desktop Links (Matching Haptiq Screenshot 1 Topbar) */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Products Mega Dropdown (Hover Activated - PLATFORMS vs SERVICES) */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100 hover:text-white transition-colors py-2 cursor-pointer"
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-white' : 'text-blue-300'}`} />
            </button>

            {/* Haptiq Style Wide 2-Column Mega Dropdown */}
            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] z-50"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-2xl border border-blue-200 text-slate-900 grid grid-cols-12 gap-6">
                    {/* Left Column: PLATFORMS */}
                    <div className="col-span-7 space-y-3 pr-4 border-r border-slate-100">
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-100">
                        PLATFORMS
                      </div>

                      <div className="space-y-1.5">
                        {platformProducts.map((p, idx) => {
                          const Icon = p.icon;
                          return (
                            <div
                              key={idx}
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                onSelectProduct(p.id);
                              }}
                              className="p-3 rounded-2xl hover:bg-blue-50/80 transition-all cursor-pointer flex items-start gap-3 group/item"
                            >
                              <div className={`w-8 h-8 rounded-xl ${p.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/item:bg-[#1866EC] group-hover/item:text-white transition-colors`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#1866EC] transition-colors leading-snug flex items-center gap-1">
                                  <span>{p.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-xs text-slate-500 font-normal">
                                  {p.desc}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: SERVICES */}
                    <div className="col-span-5 space-y-3 pl-1">
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-100">
                        SERVICES
                      </div>

                      <div className="space-y-1.5">
                        {serviceProducts.map((s, idx) => {
                          const Icon = s.icon;
                          return (
                            <div
                              key={idx}
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                onOpenContact(s.name);
                              }}
                              className="p-3 rounded-2xl hover:bg-blue-50/80 transition-all cursor-pointer flex items-start gap-3 group/item"
                            >
                              <div className={`w-8 h-8 rounded-xl ${s.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/item:bg-[#1866EC] group-hover/item:text-white transition-colors`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#1866EC] transition-colors leading-snug">
                                  {s.name}
                                </div>
                                <div className="text-xs text-slate-500 font-normal">
                                  {s.desc}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions / Clients Link */}
          <div
            className="relative"
            onMouseEnter={() => setClientsDropdownOpen(true)}
            onMouseLeave={() => setClientsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100 hover:text-white transition-colors py-2 cursor-pointer"
            >
              <span>Clients</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${clientsDropdownOpen ? 'rotate-180 text-white' : 'text-blue-300'}`} />
            </button>

            <AnimatePresence>
              {clientsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[300px] z-50"
                >
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border border-blue-200 text-slate-900 space-y-1">
                    <div className="px-2 pt-1 pb-2 border-b border-slate-100 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                      SOLUTIONS BY INDUSTRY
                    </div>
                    {['For E-commerce Brands', 'For Local Services & SMEs', 'For Tech Startups', 'For Enterprise Clients'].map((sol, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setClientsDropdownOpen(false);
                          onOpenContact(sol);
                        }}
                        className="p-2.5 rounded-xl hover:bg-blue-50 transition-all cursor-pointer text-left text-xs font-bold text-slate-900 hover:text-[#1866EC]"
                      >
                        {sol}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#how-we-work"
            className="text-xs font-semibold uppercase tracking-wider text-blue-100 hover:text-white transition-colors py-2 cursor-pointer"
          >
            Company
          </a>

          <a
            href="#insights"
            className="text-xs font-semibold uppercase tracking-wider text-blue-100 hover:text-white transition-colors py-2 cursor-pointer"
          >
            Resources
          </a>
        </nav>

        {/* Right Haptiq Style Let's talk Button */}
        <div className="hidden md:flex items-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk" size="sm" />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-blue-950 border border-blue-800 text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-[65px] bg-[#092B80]/95 backdrop-blur-2xl border-b border-blue-800 px-6 py-6 shadow-2xl flex flex-col gap-5 max-h-[85vh] overflow-y-auto text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest border-b border-blue-800/80 pb-2">
                Products &amp; Platforms
              </div>
              <div className="grid grid-cols-1 gap-2">
                {platformProducts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectProduct(p.id);
                    }}
                    className="text-left text-sm font-bold text-white hover:text-sky-300 py-1"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/80">
              <LetsTalkButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                label="Let's talk"
                size="md"
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
