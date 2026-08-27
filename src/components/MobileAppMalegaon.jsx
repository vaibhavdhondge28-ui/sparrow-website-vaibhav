import React, { useEffect } from 'react';
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  HelpCircle,
  Zap,
  Layers,
  ShieldCheck,
  Cpu,
  Layout,
  Gauge,
  Search,
  Navigation,
  Globe,
  Radio,
  Lock,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function MobileAppMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mobile App Development in Malegaon | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "High-performance Android and iOS mobile app development in Malegaon. We build offline-first mobile tools, e-commerce apps, and field management solutions.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/mobile-app-development-in-malegaon/";

    // FAQ Schema.org Structured Data Injection
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Sparrow build mobile apps for both Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We design and develop mobile applications for both Android and iOS platforms using cross-platform frameworks like React Native and Flutter, as well as native Swift and Kotlin codebases."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between cross-platform and native app development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cross-platform mobile apps allow a single codebase to run smoothly on both Android and iOS, reducing development time and cost by up to 40%. Native development uses dedicated platform languages (Swift/Kotlin) for specialized hardware access."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow handle Google Play Store and Apple App Store publishing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 100%. We handle the complete publishing process—including developer account setup, app store guidelines compliance, metadata optimization, screenshot assets, and store approvals."
          }
        },
        {
          "@type": "Question",
          "name": "Can your mobile applications work offline in low-connectivity areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We engineer offline-first data caching architectures so field teams and users can continue recording data even without internet access. Data automatically syncs with central servers once connectivity is restored."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow serve businesses outside of Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While headquartered in Malegaon, we regularly partner with businesses, logistics teams, and startups in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "How can I start a mobile app project with Sparrow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call our mobile team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click 'Start Your Mobile App' to submit your project requirements."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-mobile-app';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-mobile-app');
      if (existing) existing.remove();
    };
  }, []);

  const mobileSolutions = [
    {
      title: 'Android App Development',
      desc: 'Native Kotlin & React Native Android applications engineered for high performance, smooth gestures, and Google Play Store distribution.',
      icon: Smartphone,
    },
    {
      title: 'iOS App Development',
      desc: 'Native Swift and cross-platform iOS mobile apps designed for Apple iPhone & iPad devices with fluid UI transitions.',
      icon: Layout,
    },
    {
      title: 'Cross-Platform Mobile Apps',
      desc: 'Single-codebase React Native & Flutter apps that deliver native speed on both Android & iOS to reduce time-to-market.',
      icon: Layers,
    },
    {
      title: 'Field Operations & Enterprise Apps',
      desc: 'Mobile workforce management tools featuring offline data caching, GPS tracking, and instant manager alerts.',
      icon: Cpu,
    },
    {
      title: 'E-Commerce & Service Apps',
      desc: 'Customer shopping apps with interactive product catalogs, real-time cart sync, and secure UPI payment gateways.',
      icon: Zap,
    },
    {
      title: 'API & Push Notification Gateways',
      desc: 'Real-time WebSocket data streams, mobile OTP authentication, and automated push notification notification rules.',
      icon: Radio,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Idea & Architectural Discovery',
      desc: 'Defining target user personas, core feature scope, offline requirements, and backend API contract blueprints.',
    },
    {
      step: '02',
      title: 'UX/UI Wireframing & Design',
      desc: 'Designing intuitive mobile-first visual layouts, fluid gesture paths, and pixel-perfect screen interfaces.',
    },
    {
      step: '03',
      title: 'Agile Mobile Development',
      desc: 'Engineering frontend mobile components and connecting secure cloud database endpoints with local offline caching.',
    },
    {
      step: '04',
      title: 'Multi-Device Testing & Quality Audits',
      desc: 'Testing across physical Android and iOS devices for performance, battery efficiency, memory stability, and security.',
    },
    {
      step: '05',
      title: 'App Store & Play Store Launch',
      desc: 'Managing complete publishing on Google Play Store and Apple App Store, including metadata compliance and review approvals.',
    },
    {
      step: '06',
      title: 'Ongoing Support & Iteration',
      desc: 'Providing post-launch monitoring, OS version compatibility updates, cloud maintenance, and feature iterations.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Offline-First Architecture',
      desc: 'Our mobile apps continue working reliably even in low-network regions, automatically syncing when connected.',
      icon: Gauge,
    },
    {
      title: 'Biometric & Payment Security',
      desc: 'Fingerprint and FaceID authentication integrated with secure UPI, Razorpay, PhonePe, and credit card gateways.',
      icon: Lock,
    },
    {
      title: 'Fluid 60fps Native Performance',
      desc: 'Zero UI lag and instant screen transitions engineered for high retention and 5-star app store reviews.',
      icon: CheckCircle2,
    },
    {
      title: 'Complete Source Code Ownership',
      desc: 'You maintain 100% ownership of your mobile app source code, publisher accounts, and database assets.',
      icon: ShieldCheck,
    },
  ];

  const techStack = [
    'React Native',
    'Flutter',
    'Swift (iOS)',
    'Kotlin (Android)',
    'Node.js',
    'Firebase',
    'Supabase',
    'REST APIs',
    'WebSockets',
    'PostgreSQL',
  ];

  const faqs = [
    {
      q: 'Does Sparrow build mobile apps for both Android and iOS?',
      a: 'Yes. We design and develop mobile applications for both Android and iOS platforms using cross-platform frameworks like React Native and Flutter, as well as native Swift and Kotlin codebases.',
    },
    {
      q: 'What is the difference between cross-platform and native app development?',
      a: 'Cross-platform mobile apps allow a single codebase to run smoothly on both Android and iOS, reducing development time and cost by up to 40%. Native development uses dedicated platform languages (Swift/Kotlin) for specialized hardware access.',
    },
    {
      q: 'Does Sparrow handle Google Play Store and Apple App Store publishing?',
      a: 'Yes, 100%. We handle the complete publishing process—including developer account setup, app store guidelines compliance, metadata optimization, screenshot assets, and store approvals.',
    },
    {
      q: 'Can your mobile applications work offline in low-connectivity areas?',
      a: 'Yes. We engineer offline-first data caching architectures so field teams and users can continue recording data even without internet access. Data automatically syncs with central servers once connectivity is restored.',
    },
    {
      q: 'Does Sparrow provide mobile app development for businesses outside Malegaon?',
      a: 'Yes. While headquartered in Malegaon, we regularly partner with commercial enterprises, logistics teams, and startups in nearby cities such as Nashik, Dhule, Manmad, Nandgaon, Yeola, and across Maharashtra.',
    },
    {
      q: 'How can I start a mobile app project with Sparrow?',
      a: 'You can call our mobile team directly (+91 8421477238 / +91 8806413189), email sparrowdigisolution@gmail.com, or click "Start Your Mobile App" to submit your project requirements.',
    },
  ];

  const nearbyCities = ['Malegaon HQ', 'Nashik', 'Dhule', 'Manmad', 'Nandgaon', 'Yeola'];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ MALEGAON MOBILE ENGINEERING HUB ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Mobile App Development Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions designs and develops high-performance Android and iOS mobile applications for businesses, enterprise teams, and growing startups in Malegaon and across Maharashtra.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Mobile App Development in Malegaon')} label="Start Your Mobile App" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Software Company Malegaon &rarr;
          </button>
        </div>
      </section>

      {/* 2. Regional Coverage Footprint Banner */}
      <section className="mt-20 site-container">
        <div className="p-8 sm:p-10 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>REGIONAL MOBILE APP PARTNER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering Mobile Apps for Businesses in Malegaon &amp; Nearby Cities
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Based in Malegaon, Sparrow combines modern mobile app architecture with deep regional understanding. We build custom Android and iOS applications for local retail brands, commercial enterprises, field logistics teams, and service startups across Malegaon, Nashik, Dhule, Manmad, Nandgaon, and Yeola.
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

      {/* 3. Core Mobile Solutions Grid */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ MOBILE APP SOLUTIONS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mobile Development Capabilities
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            From consumer iOS &amp; Android apps to enterprise field workforce tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileSolutions.map((item, i) => {
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

      {/* 4. 6-Step Development Process */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ MOBILE ENGINEERING PIPELINE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Development Process
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Idea &rarr; UX/UI &rarr; Development &rarr; Testing &rarr; Launch &rarr; Support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {processSteps.map((s, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-blue-950/60 border border-blue-400/20 flex items-start gap-5">
              <div className="text-2xl font-mono font-extrabold text-sky-400 shrink-0">
                {s.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Businesses Choose Sparrow */}
      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ THE MOBILE ADVANTAGE ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose Sparrow for Mobile Engineering
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            High performance, robust security, and reliable post-launch publishing support.
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

      {/* 6. Mobile Tech Stack */}
      <section className="mt-20 site-container text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ MOBILE TECHNOLOGY STACK ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Proven Mobile Tooling
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm">
            We build with type-safe, industry-standard mobile frameworks for iOS and Android scalability.
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
            Mobile App Development FAQs
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
            Ready to Build Your Mobile Application?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to schedule a mobile app architectural roadmap consultation.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Mobile App Development in Malegaon')} label="Initiate Mobile App Brief" size="md" />
          </div>
        </div>
      </section>

    </div>
  );
}
