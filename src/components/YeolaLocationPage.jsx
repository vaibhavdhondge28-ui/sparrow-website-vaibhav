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
  Sparkles,
} from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function YeolaLocationPage({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Software & Digital Solutions for Businesses in Yeola | Sparrow";

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.content = "E-commerce online storefronts, weaving order management software, and digital growth campaigns for Paithani handloom and commercial businesses in Yeola.";
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/locations/yeola/";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Sparrow serve Paithani handloom & commercial businesses in Yeola?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sparrow is based in nearby Malegaon and builds custom e-commerce web applications, inventory software, and digital growth campaigns for Paithani saree manufacturers, silk traders, and commercial businesses in Yeola."
          }
        },
        {
          "@type": "Question",
          "name": "What e-commerce and software solutions does Sparrow build for Yeola businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build custom online stores with high-resolution product showcases, automated inventory sync, WhatsApp customer webhooks, and secure Indian & international payment gateways."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-location-yeola';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema-location-yeola');
      if (existing) existing.remove();
    };
  }, []);

  const yeolaServices = [
    {
      title: 'E-Commerce & Online Storefronts',
      desc: 'Custom web applications built for Yeola Paithani manufacturers and silk traders with high-resolution image galleries, cart management, and UPI payment gateways.',
      icon: Globe,
      link: '/web-development-company-in-malegaon/',
    },
    {
      title: 'Handloom Order & Inventory Software',
      desc: 'Custom software to track custom weaving orders, artisan assignments, inventory stock, and automated GST invoice billing.',
      icon: Cpu,
      link: '/software-company-in-malegaon/',
    },
    {
      title: 'Digital Marketing & Brand Campaigns',
      desc: 'Performance Meta Ads (Instagram/Facebook), Google Search campaigns, and SEO targeted at buyers seeking authentic Yeola Paithani products nationwide.',
      icon: Share2,
      link: '/digital-marketing-company-in-malegaon/',
    },
    {
      title: 'Mobile Customer & Sales Apps',
      desc: 'Android & iOS mobile ordering apps for wholesale buyers, sales representatives, and direct retail customers.',
      icon: Smartphone,
      link: '/mobile-app-development-in-malegaon/',
    },
  ];

  const yeolaSectors = [
    {
      sector: 'Paithani Saree & Handloom Manufacturers',
      desc: 'Historic weaving houses and textile brands needing custom e-commerce stores, custom order tracking, and national digital marketing.',
    },
    {
      sector: 'Silk & Gold/Silver Thread Traders',
      desc: 'Wholesale material suppliers requiring B2B inventory software, dispatch billing tools, and customer account ledgers.',
    },
    {
      sector: 'Commercial Retail & Service Enterprises',
      desc: 'Yeola merchants and service businesses seeking modern business websites, mobile ordering apps, and local Google search visibility.',
    },
  ];

  const faqs = [
    {
      q: 'How does Sparrow serve Paithani handloom & commercial businesses in Yeola?',
      a: 'Sparrow is based in nearby Malegaon and builds custom e-commerce web applications, inventory software, and digital growth campaigns for Paithani saree manufacturers, silk traders, and commercial businesses in Yeola.',
    },
    {
      q: 'What e-commerce and software solutions does Sparrow build for Yeola businesses?',
      a: 'We build custom online stores with high-resolution product showcases, automated inventory sync, WhatsApp customer webhooks, and secure Indian & international payment gateways.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="site-container text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>[ YEOLA SERVICE AREA ]</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Software &amp; Digital Solutions for Businesses in <span className="text-[#38BDF8]">Yeola</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal">
          Sparrow is based in nearby Malegaon and works with Paithani saree manufacturers, handloom weavers, and commercial enterprises in Yeola to build e-commerce web platforms, custom software, and digital growth campaigns.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Yeola Business Consultation')} label="Discuss Yeola Project" size="md" />
        </div>
      </section>

      <section className="mt-20 site-container">
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-950/70 border border-blue-400/30 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-bold uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span>PAITHANI HANDLOOM &amp; COMMERCIAL CRAFT CLUSTER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            E-Commerce &amp; Software Solutions Built for Yeola’s Heritage Industry
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            World-famous for authentic Paithani saree weaving and silver craft, Yeola represents a rich fusion of heritage craftsmanship and modern commerce. To capture national and global demand, Yeola manufacturers and traders need fast e-commerce portals, custom order management software, and targeted digital advertising.
          </p>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Headquartered nearby in Malegaon, Sparrow equips Yeola’s textile leaders and local businesses with modern web applications and custom software engineered to scale sales across India and beyond.
          </p>
        </div>
      </section>

      <section className="mt-20 site-container space-y-12 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
            [ SERVICES FOR YEOLA BUSINESSES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technology Solutions for Yeola
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {yeolaServices.map((item, i) => {
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
            Sectors We Serve in Yeola
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yeolaSectors.map((w, i) => (
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
            <span>[ YEOLA FAQS ]</span>
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
            Build Software for Your Yeola Business
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Contact Sparrow IT &amp; Digital Solutions today to discuss your e-commerce, web, and software requirements.
          </p>

          <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-400/30 max-w-md mx-auto text-xs font-mono space-y-1">
            <div>Call / WhatsApp: <a href="tel:8421477238" className="text-sky-300 font-bold hover:underline">8421477238</a> / <a href="tel:8806413189" className="text-sky-300 font-bold hover:underline">8806413189</a></div>
            <div>Email: <a href="mailto:sparrowdigisolution@gmail.com" className="text-sky-300 font-bold hover:underline">sparrowdigisolution@gmail.com</a></div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <LetsTalkButton onClick={() => onOpenContact('Yeola Business Consultation')} label="Schedule Consultation for Yeola" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
