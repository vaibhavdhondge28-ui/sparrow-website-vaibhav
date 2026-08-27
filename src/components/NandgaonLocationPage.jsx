import React, { useEffect } from 'react';
import {
  MapPin,
  Cpu,
  Globe,
  Smartphone,
  Share2,
  CheckCircle2,
  HelpCircle,
  Navigation,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function NandgaonLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions for Businesses in Nandgaon | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Commodity trade ledgers, retail billing software, and custom business websites for agricultural merchants and commercial stores in Nandgaon.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/nandgaon/";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Sparrow support businesses in Nandgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow is based in nearby Malegaon and engineers custom business software, billing engines, websites, and mobile apps for agricultural suppliers, trade merchants, and retail businesses in Nandgaon."
          }
        },
        {
          "@type": "Question",
          "name": "What software solutions are built for Nandgaon agricultural & retail traders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build agricultural commodity trade portals, inventory management systems, GST billing modules, and customer-facing business websites."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-nandgaon';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-nandgaon');
      if (existing) existing.remove();
    };
  }, []);

  const nandgaonServices = [
    {
      title: 'Agricultural & Commodity Trade Software',
      desc: 'Custom inventory logging, farmer payment ledgers, weighbridge data sync, and automated GST billing for Nandgaon market traders.',
      icon: Cpu,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'High-Speed Web Applications',
      desc: 'Sub-second React & Next.js business websites built for commercial visibility, product showcases, and customer lead capture.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Retail & POS Inventory Systems',
      desc: 'Integrated point-of-sale tools, stock tracking, and mobile apps for local retail merchants and distributors in Nandgaon.',
      icon: ShoppingBag,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'Digital Marketing & Growth Campaigns',
      desc: 'Google Search bidding, Meta Ads, and local SEO strategies designed to generate qualified business inquiries.',
      icon: Share2,
      link: '/digital-marketing-company-in-malegaon/',
    },
  ];

  const nandgaonSectors = [
    {
      sector: 'Agricultural Produce & Commodity Merchants',
      desc: 'Grain, onion, and produce traders in Nandgaon market needing automated daily rate logs, farmer payouts, and dispatch records.',
    },
    {
      sector: 'Retail Chains & Merchant Stores',
      desc: 'Local retail businesses looking for inventory management, billing software, and mobile customer ordering tools.',
    },
    {
      sector: 'Regional Service Enterprises',
      desc: 'Healthcare clinics, educational institutes, and professional service providers seeking modern web presences.',
    },
  ];

  const faqs = [
    {
      q: 'How does Sparrow support businesses in Nandgaon?',
      a: 'Sparrow is based in nearby Malegaon and engineers custom business software, billing engines, websites, and mobile apps for agricultural suppliers, trade merchants, and retail businesses in Nandgaon.',
    },
    {
      q: 'What software solutions are built for Nandgaon agricultural & retail traders?',
      a: 'We build agricultural commodity trade portals, inventory management systems, GST billing modules, and customer-facing business websites.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ NANDGAON SERVICE AREA ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions for Businesses in <span className="text-[#38BDF8]">Nandgaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow is based in nearby Malegaon and partners with agricultural traders, retail merchants, and businesses in Nandgaon to build custom software, fast websites, and mobile apps.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Nandgaon Business Consultation')} label="Discuss Nandgaon Project" size="md" />
        </div>
      </section>

      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>AGRICULTURAL TRADE &amp; RETAIL MARKET</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Digital Solutions Built for Nandgaon’s Commercial Markets
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Nandgaon is an important agricultural market center with thriving commodity trade and retail activity. Businesses in Nandgaon require simple, reliable software tools to digitize daily ledgers, automate billing, and reach buyers beyond the local market.
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Headquartered in neighboring Malegaon, Sparrow provides accessible, custom-engineered technology to Nandgaon businesses—backed by responsive regional support.
          </p>
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ SERVICES FOR NANDGAON BUSINESSES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technology Services Available in Nandgaon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nandgaonServices.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-4 hover:border-sky-400/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-900/80 border border-blue-400/30 flex items-center justify-center text-sky-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">{item.desc}</p>
                </div>
                <button onClick={() => onNavigate(item.link)} className="pt-2 flex items-center gap-2 text-xs font-mono text-sky-300 font-bold hover:text-white transition-colors cursor-pointer">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ INDUSTRY FOCUS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Sectors We Serve in Nandgaon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nandgaonSectors.map((w, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>{w.sector}</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-7">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>[ NANDGAON FAQS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-blue-950/60 border border-blue-400/20 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3">
                <span className="text-sky-400 font-mono text-sm shrink-0 mt-0.5">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#092B80] via-[#1866EC] to-[#0A2540] border border-blue-400/30 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Build Software for Your Nandgaon Business
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to discuss your software and web requirements.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Nandgaon Business Consultation')} label="Schedule Consultation for Nandgaon" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
