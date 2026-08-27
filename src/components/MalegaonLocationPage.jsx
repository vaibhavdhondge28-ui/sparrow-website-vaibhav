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
  MessageSquare,
  Clock,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function MalegaonLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions Company in Malegaon | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Learn why Malegaon businesses partner with Sparrow for custom software, high-speed websites, mobile apps, and local technology support.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/malegaon/";

    // FAQ Schema.org Structured Data Injection
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose a local Malegaon technology partner like Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Working with a local Malegaon partner gives you direct access to engineers who understand regional market dynamics, offer face-to-face technical consultations, and provide rapid hands-on support for your business software and digital platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Sparrow serve in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We partner with powerloom and textile manufacturers, commercial trade distributors, agricultural product suppliers, healthcare providers, retail stores, and service enterprises across Malegaon and Nashik district."
          }
        },
        {
          "@type": "Question",
          "name": "What technology services does Sparrow provide locally in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow provides custom business software, ERP portals, high-performance website development, mobile applications (Android & iOS), automated GST billing systems, and performance digital marketing campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sparrow help automate our existing manual spreadsheets and billing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in converting manual paper ledgers, WhatsApp order logs, and fragmented Excel spreadsheets into unified, automated software consoles with multi-role staff permissions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow provide ongoing technical support and staff training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We conduct hands-on training sessions for your staff in Malegaon, provide user manuals, and offer continuous technical maintenance and cloud monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "How do we get started with a technology project in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our Malegaon office directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or schedule a free technical consultation."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-malegaon';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-malegaon');
      if (existing) existing.remove();
    };
  }, []);

  const servicesAvailable = [
    {
      title: 'Custom Software & ERP Engines',
      desc: 'Bespoke administrative operating systems, inventory management tools, and automated billing software designed for Malegaon commercial enterprises.',
      icon: Cpu,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'Website Development & SPAs',
      desc: 'Sub-second React & Next.js business websites engineered for speed, mobile responsiveness, and high customer conversion rates.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Android & iOS Mobile Applications',
      desc: 'Native and cross-platform mobile apps for field teams, customer ordering, offline data sync, and secure UPI payment processing.',
      icon: Smartphone,
      link: '/mobile-app-development-in-malegaon/',
    },
    {
      title: 'Digital Marketing & Lead Generation',
      desc: 'Performance Meta Ads, Google Intent Search campaigns, and technical SEO strategies designed to generate qualified customer inquiries.',
      icon: Share2,
      link: '/digital-marketing-company-in-malegaon/',
    },
  ];

  const whoWeWorkWith = [
    {
      sector: 'Textile & Manufacturing Units',
      desc: 'Powerloom operators, yarn suppliers, and textile trading houses seeking automated stock tracking, dispatch logging, and GST billing.',
    },
    {
      sector: 'Commercial Distributors & Wholesalers',
      desc: 'Regional distributors managing multi-category inventory, sales agent ordering, and daily ledger reconciliation.',
    },
    {
      sector: 'Agricultural & Commodity Traders',
      desc: 'Grain, spice, and produce suppliers needing real-time market pricing updates, weighbridge logs, and farmer payment trackers.',
    },
    {
      sector: 'Retail Stores & Franchise Networks',
      desc: 'Local retail chains looking for integrated point-of-sale (POS) systems, e-commerce storefronts, and customer loyalty tracking.',
    },
    {
      sector: 'Healthcare & Professional Services',
      desc: 'Hospitals, clinics, and professional firms requiring appointment scheduling portals, patient records, and digital presences.',
    },
    {
      sector: 'Growth Startups & Tech Ventures',
      desc: 'Ambitious entrepreneurs in Malegaon needing rapid MVP prototyping, scalable mobile app builds, and pitch-ready UI design.',
    },
  ];

  const localSupportFeatures = [
    {
      title: 'Face-to-Face Technical Consultations',
      desc: 'Meet directly with software architects in Malegaon to discuss your operational challenges and review technical specifications.',
      icon: Users,
    },
    {
      title: 'Rapid On-Site Staff Onboarding',
      desc: 'We conduct hands-on training sessions for your managers and operational staff to ensure smooth adoption of new software tools.',
      icon: Clock,
    },
    {
      title: 'Direct Communication & Fast Turnaround',
      desc: 'No middleman call centers. Speak directly with the engineers building your web applications, mobile platforms, and ad campaigns.',
      icon: Phone,
    },
    {
      title: 'Dedicated Post-Launch Support',
      desc: 'Continuous cloud server monitoring, data backup verification, security updates, and feature enhancements as your business expands.',
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      q: 'Why choose a local Malegaon technology partner like Sparrow?',
      a: 'Working with a local Malegaon partner gives you direct access to engineers who understand regional market dynamics, offer face-to-face technical consultations, and provide rapid hands-on support for your business software and digital platforms.',
    },
    {
      q: 'What industries does Sparrow serve in Malegaon?',
      a: 'We partner with powerloom and textile manufacturers, commercial trade distributors, agricultural product suppliers, healthcare providers, retail stores, and service enterprises across Malegaon and Nashik district.',
    },
    {
      q: 'What technology services does Sparrow provide locally in Malegaon?',
      a: 'Sparrow provides custom business software, ERP portals, high-performance website development, mobile applications (Android & iOS), automated GST billing systems, and performance digital marketing campaigns.',
    },
    {
      q: 'Can Sparrow help automate our existing manual spreadsheets and billing?',
      a: 'Yes. We specialize in converting manual paper ledgers, WhatsApp order logs, and fragmented Excel spreadsheets into unified, automated software consoles with multi-role staff permissions.',
    },
    {
      q: 'Does Sparrow provide ongoing technical support and staff training?',
      a: 'Yes. We conduct hands-on training sessions for your staff in Malegaon, provide user manuals, and offer continuous technical maintenance and cloud monitoring.',
    },
    {
      q: 'How do we get started with a technology project in Malegaon?',
      a: 'You can call our Malegaon office directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or schedule a free technical consultation.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ MALEGAON HEADQUARTERS &amp; TECH HUB ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions is a full-service technology company based in Malegaon. We partner with local businesses, industrial enterprises, and growing startups to engineer custom software, fast websites, mobile applications, and digital growth campaigns.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Malegaon Location Consultation')} label="Schedule Consultation in Malegaon" size="md" />
        </div>
      </section>

      {/* 2. Authentic Malegaon Story & Approach */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>OUR APPROACH TO LOCAL BUSINESS TECHNOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built for Malegaon’s Commercial Reality
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Malegaon is a dynamic commercial hub driven by textiles, manufacturing, regional trade, and emerging service enterprises. However, many growing companies in Malegaon struggle with disjointed spreadsheets, manual ledger entry, or slow off-the-shelf software that doesn’t match how local businesses operate.
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            At Sparrow, we bridge this gap by bringing modern software engineering directly to Malegaon. We build lightweight, high-speed software tools and digital platforms that solve real operational friction—allowing business owners to automate inventory, streamline billing, and reach new clients across Maharashtra.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-sky-200">
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Malegaon HQ</span>
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Nashik District</span>
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Maharashtra</span>
          </div>
        </div>
      </section>

      {/* 3. Services Available in Malegaon */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ LOCAL TECHNOLOGY SERVICES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Services Available in Malegaon
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Comprehensive digital services engineered under one roof by our team in Malegaon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesAvailable.map((item, i) => {
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
                <button
                  onClick={() => onNavigate(item.link)}
                  className="pt-2 flex items-center gap-2 text-xs font-mono text-sky-300 font-bold hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Who We Work With */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ REGIONAL INDUSTRY FOCUS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Who We Work With in Malegaon
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Tailored software and web solutions designed for specific local commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeWorkWith.map((w, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>{w.sector}</span>
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-7">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Local Business Support & Collaboration */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ LOCAL ADVANTAGE &amp; COLLABORATION ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Dedicated Support for Malegaon Businesses
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Why working with a local engineering team delivers superior results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localSupportFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/80 border border-blue-400/30 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-13">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>[ MALEGAON FAQS ]</span>
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

      {/* 7. Final Call to Action */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#092B80] via-[#1866EC] to-[#0A2540] border border-blue-400/30 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Partner With Malegaon’s Dedicated Technology Team
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to schedule an in-person technical consultation or digital roadmap discussion in Malegaon.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Malegaon Location Consultation')} label="Schedule Consultation in Malegaon" size="md" />
          </div>
        </div>
      </section>

    </div>
  );
}
