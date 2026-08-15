import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Sparkles, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedWork({ onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'Project 01 — Digital Commerce Platform',
      category: 'E-commerce & Web App',
      description: 'A headless e-commerce architecture engineered for global scale, supporting 10,000+ SKU inventory and sub-second page transitions.',
      impactTitle: 'High-Performance Commerce Pipeline',
      impactDesc: 'Implemented React/Vite storefront with microservices backend API integration, resulting in 42% higher conversion rates.',
      tech: ['React', 'Node.js', 'Stripe API', 'Redis Cache', 'TailwindCSS'],
      results: ['Sub-800ms Average Load Time', '42% Higher Checkout Conversion', 'Zero Downtime Peak Sale Handling'],
      gradient: 'from-[#121829] via-[#0F1322] to-[#181F38]',
    },
    {
      id: '02',
      title: 'Project 02 — Business Management System',
      category: 'Software Development',
      description: 'Custom internal operations software uniting CRM, inventory tracking, role-based approval flows, and automated client invoicing.',
      impactTitle: 'Operational Workflow Centralization',
      impactDesc: 'Replaced legacy manual spreadsheets with encrypted cloud portal, saving 120+ team hours per month across 4 regional offices.',
      tech: ['TypeScript', 'PostgreSQL', 'Docker', 'GraphQL', 'TailwindCSS'],
      results: ['120+ Hours Saved Monthly', '100% Audit Compliance', 'Real-time Cross-Office Data Sync'],
      gradient: 'from-[#171329] via-[#110E20] to-[#221838]',
    },
    {
      id: '03',
      title: 'Project 03 — Corporate Digital Experience',
      category: 'Web Development & UI/UX',
      description: 'An editorial corporate digital flagship designed to establish international brand prestige and capture institutional leads.',
      impactTitle: 'Editorial Brand Transformation',
      impactDesc: 'Crafted bespoke interactive design system with dynamic micro-interactions, resulting in 3x longer user session duration.',
      tech: ['React', 'Framer Motion', 'Headless CMS', 'Web Vitals Optimization'],
      results: ['3x Longer Average Session Time', '+160% Qualified Enterprise Leads', 'Lighthouse 99 Performance Rating'],
      gradient: 'from-[#121A26] via-[#0D121B] to-[#162436]',
    },
  ];

  return (
    <section id="work" className="py-28 bg-[#0E1017] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">work.</span>
            </h2>
          </motion.div>

          <p className="text-slate-400 text-base max-w-md">
            Explore representational solution architectures engineered to solve high-stakes commercial challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW →"
              className="group cursor-pointer rounded-3xl p-7 bg-gradient-to-b from-[#121522] to-[#0E1018] border border-slate-800 hover:border-sky-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Box */}
                <div className={`rounded-2xl p-6 bg-gradient-to-br ${project.gradient} border border-slate-800 mb-6 h-48 flex flex-col justify-between relative overflow-hidden group-hover:border-sky-500/30 transition-colors`}>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-sky-400 font-bold">{project.id}</span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400 group-hover:text-white transition-colors">
                    <span className="text-xs font-mono">Interactive Blueprint</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sky-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 font-semibold">
                <span>View Case Breakdown</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
