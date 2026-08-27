import React, { useEffect } from 'react';
import {
  Globe,
  Code2,
  CheckCircle2,
  ArrowRight,
  MapPin,
  HelpCircle,
  Zap,
  Layers,
  Smartphone,
  ShieldCheck,
  Cpu,
  Layout,
  Gauge,
  Search,
  Navigation,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function WebDevMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Website Development Company in Malegaon | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "Sub-second, responsive React & Next.js website development for businesses in Malegaon. Designed for speed, Core Web Vitals, and customer conversion.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/web-development-company-in-malegaon/";

    // Service, BreadcrumbList & FAQ Schema.org Structured Data Injection
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Website Development in Malegaon",
          "provider": {
            "@type": "Organization",
            "name": "Sparrow IT & Digital Solutions",
            "url": "https://sparrowitanddigitalsolutions.in/"
          },
          "serviceType": "Website Development",
          "areaServed": {
            "@type": "City",
            "name": "Malegaon"
          },
          "description": "Sub-second React & Next.js website development for growing businesses in Malegaon."
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sparrowitanddigitalsolutions.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Website Development Company in Malegaon",
              "item": "https://sparrowitanddigitalsolutions.in/web-development-company-in-malegaon/"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should I choose custom web development over WordPress or generic CMS templates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generic CMS templates are often bloated with heavy plugins, slow load speeds, and security vulnerabilities. Sparrow builds custom React and Next.js websites engineered for sub-second page rendering, clean code, total design flexibility, and higher Google conversion rates."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website with Sparrow in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard corporate websites and landing pages are typically delivered in 2 to 3 weeks. Complex web applications, e-commerce platforms, or custom portals take 4 to 6 weeks depending on features."
          }
        },
        {
          "@type": "Question",
          "name": "Will my business website be mobile-responsive and fast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 100%. Every website we engineer uses mobile-first responsive layouts, automated image compression, and Core Web Vitals optimization to load under 1 second on mobile 5G/4G networks."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow serve businesses outside of Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While our headquarters is based in Malegaon, we regularly partner with businesses, manufacturers, and startups in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be optimized for Google Search (SEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build clean semantic HTML5, fast page load speeds, automatic sitemaps, open-graph social cards, and schema.org structured data to give your business high search visibility."
          }
        },
        {
          "@type": "Question",
          "name": "How can I start a website development project with Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click 'Start Your Web Project' to submit your project requirements."
          }
        }
      ]
    }
  ]
};

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-web-dev';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-web-dev');
      if (existing) existing.remove();
    };
  }, []);

  const whatWeBuild = [
    {
      title: 'Custom Web Applications',
      desc: 'Sub-second single-page platforms (SPAs), customer portals, and internal business engines built with React, Next.js, and Node.js.',
      icon: Code2,
    },
    {
      title: 'Enterprise Business Websites',
      desc: 'High-authority corporate web platforms featuring clean modern typography, multi-page routing, and strong brand storytelling.',
      icon: Globe,
    },
    {
      title: 'E-Commerce & Online Stores',
      desc: 'Custom digital store fronts, product catalog search, inventory sync, and secure UPI & credit card payment gateway integrations.',
      icon: Layout,
    },
    {
      title: 'High-Converting Landing Pages',
      desc: 'Fast-loading, conversion-optimized landing pages engineered specifically to turn paid Meta and Google ad traffic into leads.',
      icon: Zap,
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Architecture',
      desc: 'We analyze your business goals, target customer intent, and technical requirements to design a clean sitemap and data structure.',
    },
    {
      num: '02',
      title: 'UI/UX Wireframing',
      desc: 'Our design team crafts modern, mobile-first interfaces focused on readability, generous whitespace, and effortless user flow.',
    },
    {
      num: '03',
      title: 'Clean Code Engineering',
      desc: 'We write modular, type-safe React and Next.js code without third-party template bloat or slow CMS plugins.',
    },
    {
      num: '04',
      title: 'Performance & SEO Audits',
      desc: 'Rigorous testing of Core Web Vitals, sub-second page speeds (<800ms), image compression, and search engine schema compliance.',
    },
    {
      num: '05',
      title: 'Deployment & Support',
      desc: 'Seamless deployment on global edge cloud networks with ongoing monitoring, security maintenance, and feature updates.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Sub-Second Page Load Speed',
      desc: 'Our custom-coded websites load in under 800ms. Fast page speed directly improves Google rankings and reduces bounce rates.',
      icon: Gauge,
    },
    {
      title: 'Conversion-First UI/UX',
      desc: 'Every layout element, button, and lead form is placed strategically to convert casual visitors into qualified phone inquiries.',
      icon: CheckCircle2,
    },
    {
      title: 'No Bloated CMS Templates',
      desc: 'Say goodbye to slow WordPress updates and broken plugins. We deliver lightweight, highly secure, custom-coded web software.',
      icon: ShieldCheck,
    },
    {
      title: 'Built-In Technical SEO',
      desc: 'Structured JSON-LD schema, clean HTML5 semantics, open-graph cards, and automated sitemaps baked into every page.',
      icon: Search,
    },
  ];

  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'REST APIs',
    'GraphQL',
    'Vercel Edge Network',
    'PostgreSQL',
  ];

  const faqs = [
    {
      q: 'Why should I choose custom web development over WordPress or generic CMS templates?',
      a: 'Generic CMS templates are often bloated with heavy plugins, slow load speeds, and security risks. Sparrow builds custom React and Next.js websites engineered for sub-second page rendering, clean code, total design flexibility, and higher conversion rates.',
    },
    {
      q: 'How long does it take to build a website with Sparrow in Malegaon?',
      a: 'Standard corporate websites and landing pages are typically delivered in 2 to 3 weeks. Complex web applications, e-commerce platforms, or custom portals take 4 to 6 weeks depending on functionality.',
    },
    {
      q: 'Will my business website be mobile-responsive and fast?',
      a: 'Yes, 100%. Every website we engineer uses mobile-first responsive layouts, automated image compression, and Core Web Vitals optimization to load under 1 second on mobile 5G and 4G networks.',
    },
    {
      q: 'Does Sparrow serve businesses outside of Malegaon?',
      a: 'Yes. While our headquarters is based in Malegaon, we regularly partner with commercial enterprises, manufacturers, and startups in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra.',
    },
    {
      q: 'Will my website be optimized for Google Search (SEO)?',
      a: 'Yes. We build clean semantic HTML5, fast page load speeds, sitemaps, open-graph social cards, and schema.org structured data to ensure high search engine indexability.',
    },
    {
      q: 'How can I start a website development project with Sparrow?',
      a: 'You can call our engineering team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click "Start Your Web Project" to submit your project requirements.',
    },
  ];

  const nearbyCities = ['Malegaon HQ', 'Nashik', 'Dhule', 'Manmad', 'Nandgaon', 'Yeola'];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Hero Banner */}
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ MALEGAON WEB ENGINEERING HUB ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Website Development Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions designs and engineers fast, modern, responsive, and conversion-focused websites for growing businesses in Malegaon and across Maharashtra.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Website Development in Malegaon')} label="Start Your Web Project" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Software Company Malegaon &rarr;
          </button>
        </div>
      </section>

      {/* 2. Natural Regional Footprint Banner */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-10 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>REGIONAL SERVICE COVERAGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering High-Speed Websites for Malegaon &amp; Surrounding Cities
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Headquartered in Malegaon, Sparrow delivers modern web development services tailored to the operational needs of regional businesses. We partner with commercial companies, textile manufacturers, retail distributors, and service providers in Malegaon and nearby industrial hubs including Nashik, Dhule, Manmad, Nandgaon, and Yeola.
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

      {/* 3. What We Build */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ WEB DEVELOPMENT CAPABILITIES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What We Build
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            From single-page web applications to enterprise portals, we engineer digital platforms built to perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeBuild.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-4 hover:border-sky-400/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-900/80 border border-blue-400/30 flex items-center justify-center text-sky-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Development Process */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ ENGINEERING PIPELINE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Development Process
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            A structured, 5-step methodology that guarantees speed, quality, and milestone transparency.
          </p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step, idx) => (
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

      {/* 5. Why Businesses Choose Sparrow */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ THE SPARROW ADVANTAGE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Businesses Choose Sparrow
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            We focus on technical excellence and clear commercial outcomes rather than generic templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={i} className="p-6 sm:p-8 rounded-3xl bg-blue-950/60 border border-blue-400/20 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/80 border border-blue-400/30 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{w.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-13">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Technologies & Tools */}
      <section className="mt-20 site-container text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ TECHNOLOGY &amp; STACK ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Modern Web Tooling
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm">
            We build with type-safe, industry-standard modern frameworks for reliability and long-term scalability.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tech, i) => (
            <span key={i} className="px-4 py-2 rounded-xl bg-blue-900/60 border border-blue-400/30 text-xs font-mono font-semibold text-white">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>[ FREQUENTLY ASKED QUESTIONS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Website Development FAQs
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

      {/* 8. Final Call to Action */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#092B80] via-[#1866EC] to-[#0A2540] border border-blue-400/30 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build Your High-Performance Website?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to schedule a technical roadmap and website consultation.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Website Development in Malegaon')} label="Initiate Web Project Brief" size="md" />
          </div>
        </div>
      </section>

    </div>
  );
}
