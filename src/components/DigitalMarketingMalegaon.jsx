import React, { useEffect } from 'react';
import {
  Share2,
  Search,
  TrendingUp,
  MapPin,
  HelpCircle,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  Navigation,
  Globe,
  MessageSquare,
  FileText,
  MousePointerClick,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function DigitalMarketingMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Digital Marketing Company in Malegaon | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Data-driven Meta Ads, Google Intent Search campaigns, technical SEO, and lead generation engines built to deliver measurable revenue growth for Malegaon businesses.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/digital-marketing-company-in-malegaon/";

    // FAQ Schema.org Structured Data Injection
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital marketing services does Sparrow provide in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow IT & Digital Solutions offers performance Meta Ads, Google Intent Search campaigns, technical & local SEO, high-converting landing page optimization, social media marketing, and automated lead generation engines."
          }
        },
        {
          "@type": "Question",
          "name": "How does Sparrow measure campaign performance and ROAS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track measurable commercial metrics—including Cost Per Lead (CPL), Return On Ad Spend (ROAS), conversion rates, and qualified phone inquiries—using server-side Meta Conversions API (CAPI) and Google Tag Manager."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can we see results from digital marketing campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid advertising campaigns on Meta and Google Search generate targeted lead inquiries within 24 to 48 hours of launch. Organic SEO and content strategies build sustainable search authority over 3 to 6 months."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage ad campaigns directly inside client ad accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We maintain complete transparency by setting up and managing campaigns directly within your own Meta Business Manager and Google Ads accounts."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow serve businesses outside of Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Based in Malegaon, we regularly manage growth campaigns for commercial enterprises, retail brands, and service businesses in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "How can I start a digital marketing project with Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our growth team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click 'Discuss Growth Strategy' to request a campaign roadmap."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-digital-marketing';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-digital-marketing');
      if (existing) existing.remove();
    };
  }, []);

  const marketingServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Technical on-page SEO, local schema markup, high-intent keyword architecture, and sub-second Core Web Vitals to rank organically on Google Search.',
      icon: Search,
    },
    {
      title: 'Meta Ads (Facebook & Instagram)',
      desc: 'Server-side Conversions API (CAPI) setup, precise audience clustering, dynamic video/motion ad creatives, and high-ROAS acquisition funnels.',
      icon: Share2,
    },
    {
      title: 'Google Intent Search Ads',
      desc: 'High-intent search keyword bidding, Performance Max multi-channel campaigns, negative match filtering, and call-tracking setups.',
      icon: Target,
    },
    {
      title: 'Lead Generation Engines',
      desc: 'Fast-loading custom landing pages, interactive lead capture forms, automated WhatsApp webhooks, and instant manager alert triggers.',
      icon: Zap,
    },
    {
      title: 'Content Strategy & Copywriting',
      desc: 'Commercial copywriting, brand positioning frameworks, and persuasive ad copy designed to turn traffic into qualified inquiries.',
      icon: FileText,
    },
    {
      title: 'Social Media Marketing & Creatives',
      desc: 'Data-driven visual ad assets, high-engagement carousels, video ad design, and structured channel publishing management.',
      icon: MousePointerClick,
    },
  ];

  const growthSteps = [
    {
      num: '01',
      title: 'Market & Audience Audit',
      desc: 'We analyze customer search intent, competitor ad positioning, and target demographics to identify profitable acquisition channels.',
    },
    {
      num: '02',
      title: 'Server-Side Tracking Setup',
      desc: 'Implementing Meta Conversions API (CAPI) and Google Tag Manager to ensure 99%+ attribution accuracy for every lead.',
    },
    {
      num: '03',
      title: 'Creative & Landing Page Build',
      desc: 'Writing high-converting ad copy, designing visual ad creatives, and building fast sub-second landing pages for maximum conversion.',
    },
    {
      num: '04',
      title: 'Campaign Scaling & Optimization',
      desc: 'Monitoring daily click-through rates (CTR), filtering negative search terms, and reallocating ad budget to high-converting segments.',
    },
    {
      num: '05',
      title: 'Transparent Reporting & Telemetry',
      desc: 'Delivering weekly audits tracking actual lead counts, Cost Per Lead (CPL), Return On Ad Spend (ROAS), and customer inquiries.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Focus on Commercial Metrics',
      desc: 'We evaluate campaign performance based on Cost Per Lead (CPL) and revenue growth rather than vanity impressions or clicks.',
    },
    {
      title: 'Server-Side Conversions API (CAPI)',
      desc: 'Advanced server-side tracking bypasses browser ad-blockers to accurately measure true conversion events.',
    },
    {
      title: 'Integrated Web & Ad Engineering',
      desc: 'As a software company, we build custom landing pages that load in under 800ms, significantly boosting ad conversion rates.',
    },
    {
      title: 'Complete Ad Account Ownership',
      desc: 'All ad campaigns, pixels, and custom audiences are set up directly inside your company’s own business manager accounts.',
    },
  ];

  const faqs = [
    {
      q: 'What digital marketing services does Sparrow provide in Malegaon?',
      a: 'Sparrow IT & Digital Solutions offers performance Meta Ads, Google Intent Search campaigns, technical & local SEO, high-converting landing page optimization, social media marketing, and automated lead generation engines.',
    },
    {
      q: 'How does Sparrow measure campaign performance and ROAS?',
      a: 'We track measurable commercial metrics—including Cost Per Lead (CPL), Return On Ad Spend (ROAS), conversion rates, and qualified phone inquiries—using server-side Meta Conversions API (CAPI) and Google Tag Manager.',
    },
    {
      q: 'How quickly can we see results from digital marketing campaigns?',
      a: 'Paid advertising campaigns on Meta and Google Search generate targeted lead inquiries within 24 to 48 hours of launch. Organic SEO and content strategies build sustainable search authority over 3 to 6 months.',
    },
    {
      q: 'Do you manage ad campaigns directly inside client ad accounts?',
      a: 'Yes. We maintain complete transparency by setting up and managing campaigns directly within your own Meta Business Manager and Google Ads accounts.',
    },
    {
      q: 'Does Sparrow serve businesses outside of Malegaon?',
      a: 'Yes. Based in Malegaon, we regularly manage growth campaigns for commercial enterprises, retail brands, and service businesses in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra.',
    },
    {
      q: 'How can I start a digital marketing project with Sparrow?',
      a: 'You can call our growth team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click "Discuss Growth Strategy" to request a campaign roadmap.',
    },
  ];

  const nearbyCities = ['Malegaon HQ', 'Nashik', 'Dhule', 'Manmad', 'Nandgaon', 'Yeola'];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ MALEGAON DIGITAL MARKETING HUB ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Digital Marketing Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions executes data-driven digital marketing campaigns—combining performance ad management, search engine optimization, content strategy, and lead generation to deliver measurable commercial growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Digital Marketing in Malegaon')} label="Discuss Growth Strategy" size="md" />
          <button
            onClick={() => onNavigate('/web-development-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Web Development Malegaon &rarr;
          </button>
        </div>
      </section>

      {/* 2. Regional Footprint Section */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-10 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>REGIONAL DIGITAL GROWTH PARTNER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Digital Growth Campaigns for Malegaon &amp; Surrounding Cities
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Headquartered in Malegaon, Sparrow designs and manages performance marketing campaigns for growing commercial brands, retail distributors, manufacturers, and professional services across Malegaon, Nashik, Dhule, Manmad, Nandgaon, and Yeola.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {nearbyCities.map((city, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-blue-900/60 border border-blue-400/20 text-xs font-mono text-sky-200">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Marketing Services Grid */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ DIGITAL MARKETING SERVICES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Performance Marketing Capabilities
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            From technical SEO to server-side Meta &amp; Google ad campaigns designed for lead generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingServices.map((item, i) => {
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
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Development Workflow Process */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ PERFORMANCE METHODOLOGY ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Growth Methodology
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            A 5-stage data-driven process engineered to maximize return on ad spend and lead conversion.
          </p>
        </div>

        <div className="space-y-4">
          {growthSteps.map((step, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-blue-950/60 border border-blue-400/20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-2xl font-mono font-extrabold text-sky-400 shrink-0">
                {step.num}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ THE SPARROW MARKETING ADVANTAGE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Businesses Partner With Sparrow
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Transparent reporting, server-side tracking, and sub-second landing pages for maximum ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((w, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>{w.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-7">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Digital Marketing FAQs
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
            Ready to Drive Measurable Commercial Growth?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to schedule a digital marketing strategy consultation.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Digital Marketing in Malegaon')} label="Schedule Growth Strategy Brief" size="md" />
          </div>
        </div>
      </section>

    </div>
  );
}
