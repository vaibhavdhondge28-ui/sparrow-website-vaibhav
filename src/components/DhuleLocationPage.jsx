import React, { useEffect } from 'react';
import {
  MapPin,
  Cpu,
  Globe,
  Smartphone,
  Share2,
  Building2,
  CheckCircle2,
  HelpCircle,
  Users,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Phone,
  Truck,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function DhuleLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions for Businesses in Dhule | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Custom ERP software, multi-godown stock tracking, and web platforms for highway logistics distributors and trade enterprises in Dhule.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/dhule/";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Sparrow serve businesses in Dhule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow is based in nearby Malegaon and serves commercial businesses, wholesale distributors, and logistics firms in Dhule through a hybrid service model—combining fast digital development with direct technical support and on-site consultations in Dhule."
          }
        },
        {
          "@type": "Question",
          "name": "What software and web services are available for Dhule enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We engineer custom business software, ERP portals, inventory tracking tools, high-performance websites, Android/iOS mobile apps, and performance digital ad campaigns for Dhule businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Dhule commercial traders partner with Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traders and distributors in Dhule partner with Sparrow for custom software that automates manual spreadsheets, handles GST billing, and integrates sales rep mobile apps with central inventory."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started with a technology project for a Dhule business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact our team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or request a technical project roadmap consultation."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-dhule';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-dhule');
      if (existing) existing.remove();
    };
  }, []);

  const dhuleServices = [
    {
      title: 'Commercial ERP & Inventory Software',
      desc: 'Custom stock tracking, wholesale dispatch logs, multi-godown inventory sync, and automated GST billing for Dhule commercial hubs.',
      icon: Cpu,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'High-Speed Web Applications',
      desc: 'Sub-second React & Next.js business websites built to showcase products, capture inquiries, and build brand authority across Maharashtra.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Mobile Ordering & Logistics Apps',
      desc: 'Field agent mobile apps, offline order capture, real-time status updates, and secure UPI payment processing.',
      icon: Smartphone,
      link: '/mobile-app-development-in-malegaon/',
    },
    {
      title: 'Performance Digital Growth',
      desc: 'High-intent Google Search campaigns, Meta lead generation ads, and local technical SEO designed to attract new trade buyers.',
      icon: Share2,
      link: '/digital-marketing-company-in-malegaon/',
    },
  ];

  const dhuleSectors = [
    {
      sector: 'Wholesale & Highway Logistics Distributors',
      desc: 'Dhule businesses operating along major highway corridors needing order dispatch tracking, transport logs, and automated ledgers.',
    },
    {
      sector: 'Agricultural & Oilseed Processing Units',
      desc: 'Agro-processing plants requiring raw material weighbridge logs, supplier payment trackers, and inventory reporting.',
    },
    {
      sector: 'Commercial Retail & Trade Chains',
      desc: 'Multi-branch retail operators in Dhule looking for unified point-of-sale (POS) software and customer loyalty tools.',
    },
    {
      sector: 'Educational Institutions & Services',
      desc: 'Educational centers and professional service firms requiring student admission portals, online fee collection, and web portals.',
    },
  ];

  const faqs = [
    {
      q: 'How does Sparrow serve businesses in Dhule?',
      a: 'Sparrow is based in nearby Malegaon and serves commercial businesses, wholesale distributors, and logistics firms in Dhule through a hybrid service model—combining fast digital development with direct technical support and on-site consultations in Dhule.',
    },
    {
      q: 'What software and web services are available for Dhule enterprises?',
      a: 'We engineer custom business software, ERP portals, inventory tracking tools, high-performance websites, Android/iOS mobile apps, and performance digital ad campaigns for Dhule businesses.',
    },
    {
      q: 'Why do Dhule commercial traders partner with Sparrow?',
      a: 'Traders and distributors in Dhule partner with Sparrow for custom software that automates manual spreadsheets, handles GST billing, and integrates sales rep mobile apps with central inventory.',
    },
    {
      q: 'How do we get started with a technology project for a Dhule business?',
      a: 'You can contact our team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or request a technical project roadmap consultation.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ DHULE SERVICE AREA ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions for Businesses in <span className="text-[#38BDF8]">Dhule</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow is based in nearby Malegaon and works with commercial enterprises, distributors, and businesses across Dhule to engineer custom software, fast websites, mobile apps, and digital growth campaigns.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Dhule Business Consultation')} label="Discuss Dhule Project" size="md" />
        </div>
      </section>

      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>COMMERCIAL LOGISTICS &amp; TRADE HUB</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tailored Technology for Dhule’s Commercial Network
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            As a prominent junction connecting major North-South national highways, Dhule is a vital hub for trade, distribution, and agriculture processing. Businesses in Dhule require reliable software systems that handle high volume dispatches, stock tracking, and real-time sales agent reporting.
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Located just a short drive away in Malegaon, Sparrow brings dedicated engineering capabilities to Dhule. We build lightweight, highly secure custom software tools and fast web applications that eliminate spreadsheet chaos and automate commercial operations.
          </p>
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ SERVICES FOR DHULE ENTERPRISES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technology Solutions for Dhule
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dhuleServices.map((item, i) => {
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
            Sectors We Serve in Dhule
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dhuleSectors.map((w, i) => (
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
            <span>[ DHULE SERVICE FAQS ]</span>
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
            Build Software for Your Dhule Business
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to discuss your project requirements with our engineering team.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Dhule Business Consultation')} label="Schedule Consultation for Dhule" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
