import React, { useEffect } from 'react';
import { Globe, Smartphone, Cpu, ArrowRight, Sparkles, Building2, HelpCircle, MapPin, Phone, Code2 } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function SoftwareCompanyMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software Company in Malegaon | Sparrow IT & Digital Solutions";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/software-company-in-malegaon/";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What technology and software services does Sparrow provide in Malegaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow IT & Digital Solutions provides custom software development, web applications, mobile app development (Android & iOS), ERP & CRM systems, business automation, and digital marketing services for companies in Malegaon, Nashik, and across Maharashtra."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow build custom web applications and business software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we engineer tailor-made web applications, enterprise ERPs, inventory portals, and CRM tools built specifically to solve operational bottlenecks for commercial businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sparrow develop native mobile apps for Android and iOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we design and build cross-platform and native mobile applications for Android and iOS devices, featuring real-time data sync, user authentication, and secure payment integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Can Sparrow build ERP or CRM software for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in custom ERP software development, CRM workflow automation, and multi-role administrative dashboards designed to streamline inventory, sales, and employee management."
          }
        },
        {
          "@type": "Question",
          "name": "How can I start a software project with Sparrow IT & Digital Solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact our team directly via phone (+91 8421477238 / +91 9022454300), email (sparrowitdigitalsolutions@gmail.com), or submit an inquiry using our online form to schedule a free technical consultation."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-malegaon';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-malegaon');
      if (existing) existing.remove();
    };
  }, []);

  const services = [
    { title: 'Custom Software Development', desc: 'Enterprise software, automated operational workflows, and administrative management platforms tailored for local business needs.', icon: Cpu },
    { title: 'Web Application Development', desc: 'High-performance React, Next.js, and Node.js web applications engineered for speed, scalability, and seamless data management.', icon: Globe },
    { title: 'Mobile App Development', desc: 'Native Android and iOS mobile applications with intuitive UI, real-time push notifications, and secure payment processing.', icon: Smartphone },
    { title: 'ERP & CRM Software Systems', desc: 'Integrated Enterprise Resource Planning and CRM tools to automate sales, stock, and personnel operations.', icon: Building2 },
    { title: 'Website Engineering & Design', desc: 'Conversion-optimized business websites, landing pages, and e-commerce portals built with modern responsive frameworks.', icon: Code2 },
    { title: 'Digital Solutions & Marketing', desc: 'High-ROAS Meta Ads, Google Ads campaigns, and SEO services to generate targeted inbound leads for commercial brands.', icon: Sparkles },
  ];

  const faqs = [
    { q: 'What technology and software services does Sparrow provide in Malegaon?', a: 'Sparrow IT & Digital Solutions provides custom software development, web applications, mobile app development (Android & iOS), ERP & CRM systems, business automation, and digital marketing services.' },
    { q: 'Does Sparrow build custom web applications and business software?', a: 'Yes, we engineer tailor-made web applications, enterprise ERPs, inventory portals, and CRM tools built specifically to solve operational bottlenecks.' },
    { q: 'Does Sparrow develop native mobile apps for Android and iOS?', a: 'Yes, we design and build cross-platform and native mobile applications for Android and iOS devices, featuring real-time data sync, user authentication, and secure payment integrations.' },
    { q: 'Can Sparrow build ERP or CRM software for my business?', a: 'Definitely. We specialize in custom ERP software development, CRM workflow automation, and multi-role administrative dashboards.' },
    { q: 'Does Sparrow provide ongoing software maintenance and support?', a: 'Yes, we provide continuous technical support, software updates, security patches, and cloud server monitoring for all systems we deploy.' },
    { q: 'How can I start a software project with Sparrow IT & Digital Solutions?', a: 'You can contact our team directly via phone (+91 8421477238 / +91 9022454300), email (sparrowitdigitalsolutions@gmail.com), or submit an online inquiry.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>MALEGAON &amp; NASHIK REGION</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Software Company in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow IT &amp; Digital Solutions is a technology and software development company based in Malegaon, delivering custom web applications, mobile apps, enterprise ERP/CRM systems, and digital growth engines for businesses across Nashik and Maharashtra.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Software Development in Malegaon')} label="Discuss Your Project" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-nashik/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Nashik Regional Page
          </button>
        </div>
      </section>

      {/* About Sparrow */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-blue-950/70 border border-blue-400/25 shadow-xl space-y-5 text-left">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">ABOUT SPARROW IT &amp; DIGITAL SOLUTIONS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering Digital Products for Growing Businesses
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            From business websites and web applications to custom enterprise software and mobile apps, Sparrow IT &amp; Digital Solutions helps local businesses turn operational challenges into practical digital products. We work closely with commercial enterprises, retail merchants, educational institutions, and administrative bodies across Malegaon, Nashik, and Maharashtra to engineer software that drives measurable efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">OUR CAPABILITIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software &amp; Digital Solutions Provided
          </h2>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Comprehensive software development services engineered for stability, performance, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-blue-900/40 border border-blue-400/20 shadow-md space-y-3 text-left hover:border-blue-400/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-sky-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs text-blue-100 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dedicated Service Links */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Explore Our Specialized Service Pages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate('/web-development-company-in-malegaon/')}
            className="p-5 rounded-2xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-2"
          >
            <div className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider">SERVICE HUB</div>
            <div className="text-sm font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
              <span>Web Development</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('/mobile-app-development-in-malegaon/')}
            className="p-5 rounded-2xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-2"
          >
            <div className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider">SERVICE HUB</div>
            <div className="text-sm font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
              <span>Mobile App Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('/custom-software-development-in-malegaon/')}
            className="p-5 rounded-2xl bg-blue-950/80 border border-blue-400/30 hover:border-sky-400 transition-all text-left group cursor-pointer space-y-2"
          >
            <div className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider">SERVICE HUB</div>
            <div className="text-sm font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
              <span>Custom Software Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Software Development FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-blue-950/60 border border-blue-400/20 text-left space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-sky-400 font-mono text-sm">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#092B80] to-[#1866EC] text-white text-center space-y-5 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Software Project?</h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
            Contact Sparrow IT &amp; Digital Solutions today for a free consultation and project roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <LetsTalkButton onClick={() => onOpenContact('Software Development in Malegaon')} label="Start Your Project" size="md" />
            <a href="tel:8421477238" className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-300" />
              <span>Call: 8421477238</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
