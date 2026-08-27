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
  Briefcase,
  Zap,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function NashikLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions for Businesses in Nashik | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Software development, web applications, and digital growth solutions for industrial manufacturers, agro-exporters, and commercial firms across Nashik.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/nashik/";

    // FAQ Schema.org Structured Data Injection
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Sparrow located and how do you serve businesses in Nashik?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow is headquartered in nearby Malegaon, Maharashtra. We serve companies in Nashik through a hybrid collaboration model—combining rapid digital engineering with on-site technical consultations and roadmap workshops in Nashik whenever required."
          }
        },
        {
          "@type": "Question",
          "name": "What technology services does Sparrow provide for Nashik companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We engineer custom business software, ERP portals, high-speed web applications (React/Next.js), native mobile apps (Android & iOS), and performance digital marketing campaigns for Nashik enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Sparrow partner with in Nashik?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with industrial manufacturers in Satpur and Ambad, wine & agro-processing exporters, logistics distributors, commercial healthcare centers, and B2B service firms across Nashik district."
          }
        },
        {
          "@type": "Question",
          "name": "Why do Nashik companies choose Sparrow over agencies in metro cities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nashik companies partner with Sparrow to get enterprise-grade software engineering and direct access to senior developers without paying the inflated agency overhead prices typical of Mumbai or Pune firms."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the source code and software assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You retain 100% full ownership of all custom software source code, database assets, and intellectual property. We deploy directly to your dedicated cloud infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "How can a Nashik business get started with Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our engineering team (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or schedule a technical project brief online."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-nashik';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-nashik');
      if (existing) existing.remove();
    };
  }, []);

  const nashikServices = [
    {
      title: 'Custom Business Software & ERPs',
      desc: 'Bespoke inventory management systems, multi-role admin consoles, and supply chain software designed for industrial and commercial operations.',
      icon: Cpu,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'High-Performance Web Applications',
      desc: 'Sub-second React & Next.js web platforms engineered for corporate visibility, customer portals, and seamless API integration.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Android & iOS Mobile Apps',
      desc: 'Cross-platform and native mobile applications featuring offline data sync, real-time push notifications, and secure payment processing.',
      icon: Smartphone,
      link: '/mobile-app-development-in-malegaon/',
    },
    {
      title: 'Performance Digital Marketing',
      desc: 'High-intent Google Search bidding, Meta Ads acquisition funnels, and technical SEO strategies designed to generate commercial inquiries.',
      icon: Share2,
      link: '/digital-marketing-company-in-malegaon/',
    },
  ];

  const nashikSectors = [
    {
      sector: 'Industrial & Manufacturing Enterprises',
      desc: 'Factories and engineering units in Satpur, Ambad, and Sinnar seeking custom ERP software, production tracking, and dispatch automation.',
    },
    {
      sector: 'Agro-Processing & Grape Exporters',
      desc: 'Agricultural commodity exporters requiring cold-chain logistics logs, farmer payout trackers, and international compliance documentation.',
    },
    {
      sector: 'Commercial B2B & Wholesale Distributors',
      desc: 'Regional distributors needing order management portals, sales rep mobile apps, and real-time inventory synchronization.',
    },
    {
      sector: 'Healthcare Facilities & Specialty Clinics',
      desc: 'Hospitals and medical centers looking for patient booking portals, electronic medical records (EMR), and high-visibility web presence.',
    },
    {
      sector: 'Real Estate & Construction Developers',
      desc: 'Property developers needing high-converting lead landing pages, CRM inquiry tracking, and interactive property showcases.',
    },
    {
      sector: 'Emerging Tech & Service Startups',
      desc: 'Nashik-based entrepreneurs seeking rapid MVP software builds, scalable cloud architectures, and modern UI design.',
    },
  ];

  const collaborationModel = [
    {
      title: 'Dedicated Project Manager & Direct Engineers',
      desc: 'Direct communication with the software engineers writing your code—no middleman account executives or delayed response tickets.',
    },
    {
      title: 'Hybrid On-Site & Digital Collaboration',
      desc: 'Based nearby in Malegaon, our engineering leads conduct on-site project discovery sessions and roadmap reviews in Nashik as needed.',
    },
    {
      title: 'Transparent Milestone Delivery',
      desc: 'Weekly sprint demos, staging preview links, and clear milestone progress tracking so you see your software evolving in real-time.',
    },
    {
      title: 'Cost-Effective Enterprise Quality',
      desc: 'Get top-tier software architecture and modern web design without paying the inflated pricing overhead of Mumbai or Pune agencies.',
    },
  ];

  const faqs = [
    {
      q: 'Where is Sparrow located and how do you serve businesses in Nashik?',
      a: 'Sparrow is headquartered in nearby Malegaon, Maharashtra. We serve companies in Nashik through a hybrid collaboration model—combining rapid digital engineering with on-site technical consultations and roadmap workshops in Nashik whenever required.',
    },
    {
      q: 'What technology services does Sparrow provide for Nashik companies?',
      a: 'We engineer custom business software, ERP portals, high-speed web applications (React/Next.js), native mobile apps (Android & iOS), and performance digital marketing campaigns for Nashik enterprises.',
    },
    {
      q: 'What industries does Sparrow partner with in Nashik?',
      a: 'We work with industrial manufacturers in Satpur and Ambad, wine & agro-processing exporters, logistics distributors, commercial healthcare centers, and B2B service firms across Nashik district.',
    },
    {
      q: 'Why do Nashik companies choose Sparrow over agencies in metro cities?',
      a: 'Nashik companies partner with Sparrow to get enterprise-grade software engineering and direct access to senior developers without paying the inflated agency overhead prices typical of Mumbai or Pune firms.',
    },
    {
      q: 'Who owns the source code and software assets?',
      a: 'You retain 100% full ownership of all custom software source code, database assets, and intellectual property. We deploy directly to your dedicated cloud infrastructure.',
    },
    {
      q: 'How can a Nashik business get started with Sparrow?',
      a: 'You can call our engineering team (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or schedule a technical project brief online.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ NASHIK REGIONAL SERVICE COVERAGE ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions for Businesses in <span className="text-[#38BDF8]">Nashik</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Headquartered in nearby Malegaon, Sparrow IT &amp; Digital Solutions delivers custom software, high-speed web applications, mobile platforms, and digital growth campaigns for enterprise clients across Nashik.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Nashik Business Consultation')} label="Discuss Nashik Project" size="md" />
          <button
            onClick={() => onNavigate('/locations/malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Malegaon HQ Page &rarr;
          </button>
        </div>
      </section>

      {/* 2. Service Area Acknowledgement & Regional Synergy */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>NASHIK DISTRICT SERVICE AREA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering Technology for Nashik’s Industrial &amp; Commercial Hubs
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            As a key economic engine of Northern Maharashtra, Nashik is home to thriving manufacturing zones like Satpur, Ambad, and Sinnar, alongside major agricultural exporters and commercial enterprises. 
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            While our physical engineering headquarters is based in nearby Malegaon, we actively serve businesses in Nashik. We combine close regional proximity with modern digital tools—providing Nashik companies with on-site roadmap consultations, rapid engineering sprints, and direct technical support without the heavy price premiums of metro agencies.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-sky-200">
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Satpur &amp; Ambad Industrial</span>
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Sinnar Hub</span>
            <span className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20">Nashik City</span>
          </div>
        </div>
      </section>

      {/* 3. Services Provided for Nashik Companies */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ SERVICES FOR NASHIK ENTERPRISES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technology Solutions We Deliver in Nashik
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Custom-built software systems and digital platforms engineered for scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nashikServices.map((item, i) => {
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
                  <span>View Technical Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Industries & Sectors in Nashik */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ NASHIK INDUSTRY ALIGNMENT ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Sectors We Serve Across Nashik
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Tailored software architecture for manufacturing, agricultural export, healthcare, and commercial B2B.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nashikSectors.map((w, i) => (
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

      {/* 5. How We Collaborate with Nashik Clients */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ HYBRID COLLABORATION MODEL ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How We Work With Nashik Clients
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Combining agile remote software engineering with face-to-face regional availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborationModel.map((f, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>{f.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-7">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>[ NASHIK SERVICE AREA FAQS ]</span>
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
            Ready to Build Software for Your Nashik Business?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions to schedule a project brief and technical consultation for your Nashik enterprise.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Nashik Business Consultation')} label="Schedule Consultation for Nashik" size="md" />
          </div>
        </div>
      </section>

    </div>
  );
}
