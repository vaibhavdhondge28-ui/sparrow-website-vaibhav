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
  Navigation,
  ArrowRight,
  Truck,
  Database,
  Radio,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function ManmadLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions for Businesses in Manmad | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Transport dispatch management software, warehouse inventory tracking, and web solutions for junction logistics and storage businesses in Manmad.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/manmad/";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Sparrow serve transport and commercial businesses in Manmad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow is based in nearby Malegaon and engineers custom software for transport, storage, and trade enterprises in Manmad—providing automated dispatch tracking, warehouse stock logging, and custom web applications."
          }
        },
        {
          "@type": "Question",
          "name": "What software solutions are built for Manmad logistics & warehouse operations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build warehouse inventory tracking portals, transport dispatch management tools, automated GST billing software, and mobile apps for field agents and driver status logging."
          }
        },
        {
          "@type": "Question",
          "name": "How do we collaborate with Sparrow for a Manmad project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team works closely with Manmad enterprise owners through direct digital communication and in-person consultations in Manmad as needed."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-manmad';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-manmad');
      if (existing) existing.remove();
    };
  }, []);

  const manmadServices = [
    {
      title: 'Warehouse & Storage Inventory Software',
      desc: 'Real-time stock entry, goods inward/outward tracking, batch management, and automated GST billing for storage depots.',
      icon: Database,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'Transport & Logistics Dispatch Tools',
      desc: 'Vehicle assignment logs, consignment tracking, trip expense recording, and automated driver status webhooks.',
      icon: Truck,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'High-Speed Web Platforms',
      desc: 'Sub-second React & Next.js business websites built for commercial visibility, supplier portals, and service inquiries.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Mobile Operations Apps',
      desc: 'Android & iOS apps featuring offline data logging, barcode scanning, and instant manager alert triggers.',
      icon: Smartphone,
      link: '/mobile-app-development-in-malegaon/',
    },
  ];

  const manmadSectors = [
    {
      sector: 'Railway & Junction Logistics Operators',
      desc: 'Commercial freight forwarders and cargo handling businesses operating near the Manmad railway junction.',
    },
    {
      sector: 'Grain Storage & Food Corporation Depots',
      desc: 'Warehouse operators and agricultural storage facilities requiring automated inventory logging and batch audits.',
    },
    {
      sector: 'Transport & Fleet Management Firms',
      desc: 'Commercial transport agencies needing vehicle dispatch software, fuel log management, and driver trip ledgers.',
    },
    {
      sector: 'Commercial Retail & Service Suppliers',
      desc: 'Manmad trade enterprises and retail stores looking for integrated inventory POS tools and web presences.',
    },
  ];

  const faqs = [
    {
      q: 'How does Sparrow serve transport and commercial businesses in Manmad?',
      a: 'Sparrow is based in nearby Malegaon and engineers custom software for transport, storage, and trade enterprises in Manmad—providing automated dispatch tracking, warehouse stock logging, and custom web applications.',
    },
    {
      q: 'What software solutions are built for Manmad logistics & warehouse operations?',
      a: 'We build warehouse inventory tracking portals, transport dispatch management tools, automated GST billing software, and mobile apps for field agents and driver status logging.',
    },
    {
      q: 'How do we collaborate with Sparrow for a Manmad project?',
      a: 'Our team works closely with Manmad enterprise owners through direct digital communication and in-person consultations in Manmad as needed.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ MANMAD SERVICE AREA ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions for Businesses in <span className="text-[#38BDF8]">Manmad</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow is based in nearby Malegaon and engineers custom software, warehouse inventory tools, high-speed websites, and mobile apps for transport and commercial enterprises in Manmad.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Manmad Business Consultation')} label="Discuss Manmad Project" size="md" />
        </div>
      </section>

      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>JUNCTION LOGISTICS &amp; STORAGE HUB</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Custom Software Tailored for Manmad’s Transport &amp; Storage Hub
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Known as one of Western India's most important railway junctions and bulk petroleum/grain storage hubs, Manmad demands high-reliability software to manage inventory movement, dispatch records, and commercial billing.
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Headquartered nearby in Malegaon, Sparrow builds software tools that streamline warehouse entry, track fleet dispatches, and eliminate paper errors for Manmad businesses.
          </p>
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ SERVICES FOR MANMAD ENTERPRISES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software &amp; Digital Solutions for Manmad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manmadServices.map((item, i) => {
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
            Sectors We Serve in Manmad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manmadSectors.map((w, i) => (
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
            <span>[ MANMAD SERVICE FAQS ]</span>
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
            Build Software for Your Manmad Business
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to discuss your software and web requirements.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Manmad Business Consultation')} label="Schedule Consultation for Manmad" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
