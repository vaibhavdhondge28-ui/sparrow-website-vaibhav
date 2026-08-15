import React, { useEffect } from 'react';
import { Cpu, CheckCircle2, MapPin, Building2 } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function CustomSoftwareMalegaon({ onOpenContact, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Custom Software Development in Malegaon | Sparrow IT & Digital Solutions";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://sparrowitanddigitalsolutions.in/custom-software-development-in-malegaon/";
  }, []);

  const features = [
    { title: 'ERP Software Development', desc: 'Custom Enterprise Resource Planning tools to automate stock, procurement, billing, and accounting.' },
    { title: 'CRM Software Development', desc: 'Customer Relationship Management platforms automating lead management, sales funnels, and client tracking.' },
    { title: 'Admin & RBAC Controls', desc: 'Multi-tiered role-based access control enabling secure data privacy for management and staff.' },
    { title: 'Business Workflow Automation', desc: 'Custom software replacing manual paperwork with automated digital processes and real-time reports.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0A2540] text-slate-100 min-h-screen font-sans">
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>MALEGAON, MAHARASHTRA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Custom Software Development in <span className="text-[#38BDF8]">Malegaon</span>
        </h1>

        <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Sparrow IT &amp; Digital Solutions engineers enterprise ERPs, CRMs, inventory tools, and custom software systems for commercial businesses in Malegaon.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LetsTalkButton onClick={() => onOpenContact('Custom Software in Malegaon')} label="Start Your Software Project" size="md" />
          <button
            onClick={() => onNavigate('/software-company-in-malegaon/')}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Software Company Malegaon
          </button>
        </div>
      </section>

      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-blue-950/60 border border-blue-400/20 text-left space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <span>{f.title}</span>
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed pl-7">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#092B80] to-[#1866EC] text-white space-y-4">
          <h2 className="text-2xl font-extrabold">Build Your Custom Software with Sparrow</h2>
          <p className="text-xs text-blue-100 max-w-md mx-auto">Digitize your business operations with custom ERP, CRM, and software automation solutions.</p>
          <div className="pt-2 flex justify-center">
            <LetsTalkButton onClick={() => onOpenContact('Custom Software in Malegaon')} label="Discuss Custom Software" size="md" />
          </div>
        </div>
      </section>
    </div>
  );
}
