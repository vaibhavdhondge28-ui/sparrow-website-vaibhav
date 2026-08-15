import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function ProjectsShowcase({ onOpenContact }) {
  const projects = [
    {
      id: 'skillverse',
      title: 'SkillVerse',
      subtitle: 'AI Learning Platform',
      tagline: 'Learn Smarter. Grow Faster.',
      description:
        'Full-stack AI learning platform featuring custom course generator, interactive quiz engine, and AI tutor assistant.',
      image: '/skillverse-poster.jpg',
      demoUrl: 'https://skillverse-frontend-fawn.vercel.app/',
      isConfidential: false,
      badge: 'AI-POWERED WEBAPP',
      badgeColor: 'bg-purple-900/60 text-purple-200 border-purple-400/30',
      techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Gemini AI'],
    },
    {
      id: 'ib-boutique',
      title: 'IB (Indians Boutique)',
      subtitle: 'Luxury E-Commerce Platform',
      tagline: 'Occasion wear, beautifully curated.',
      description:
        'High-end luxury fashion boutique e-commerce web app featuring curated ethnic collections, store locator, and mobile UX.',
      image: '/ib-poster.jpg',
      demoUrl: 'https://darshanahireworkspace.github.io/IB/',
      isConfidential: false,
      badge: 'LUXURY E-COMMERCE',
      badgeColor: 'bg-amber-900/60 text-amber-200 border-amber-400/30',
      techStack: ['React WebApp', 'Tailwind', 'Catalog UX', '3 Stores'],
    },
    {
      id: 'police-city-mgmt',
      title: 'Police City Management',
      subtitle: 'Enterprise Governance Software',
      tagline: 'Public Safety & Commercial Tracking.',
      description:
        'Confidential municipal platform managing commercial shop directories, event permits, and religious site records.',
      image: null,
      demoUrl: null,
      isConfidential: true,
      badge: '🔒 CONFIDENTIAL ENTERPRISE',
      badgeColor: 'bg-blue-900/80 text-sky-200 border-sky-400/30',
      techStack: ['Enterprise Software', 'Multi-Role Admin', 'RBAC Security'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#06152B] via-[#081F3D] to-[#0A2750] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>FEATURED PROJECTS &amp; CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for impact. <br />
            Built for <span className="text-[#38BDF8]">real-world scale.</span>
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore custom web applications, AI platforms, and enterprise software built by Sparrow IT and digital solutions.
          </p>
        </div>

        {/* Compact 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-[#0B2347]/90 border border-blue-500/20 p-5 shadow-xl backdrop-blur-xl hover:border-blue-400/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Media Preview Box */}
                {project.image ? (
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-blue-400/20 shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06152B]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Confidential Graphic Box */
                  <div className="rounded-xl border border-blue-400/30 bg-gradient-to-br from-[#092B80] to-[#040D1A] aspect-video p-4 text-center flex flex-col items-center justify-center gap-2 shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/40 border border-blue-400/40 flex items-center justify-center text-sky-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-sky-200 font-bold tracking-widest uppercase">
                      CONFIDENTIAL ENTERPRISE
                    </span>
                  </div>
                )}

                {/* Badge & Title */}
                <div className="space-y-1.5 text-left">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border ${project.badgeColor}`}>
                    {project.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-sky-300 italic">
                    "{project.tagline}"
                  </p>
                </div>

                <p className="text-blue-100 text-xs leading-relaxed text-left">
                  {project.description}
                </p>

                {/* Compact Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-blue-950/80 border border-blue-400/20 text-blue-200 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 mt-4 border-t border-blue-900/60 flex items-center justify-between gap-2">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1866EC] hover:bg-[#0D52D4] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-blue-300">Confidential Build</span>
                )}

                <button
                  onClick={() => onOpenContact(project.title)}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-900/60 hover:bg-blue-900 text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 border border-blue-400/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Have a custom web app or digital marketing requirement?
            </h4>
            <p className="text-xs text-blue-100">
              Sparrow IT and digital solutions delivers end-to-end technology and lead generation.
            </p>
          </div>

          <LetsTalkButton onClick={() => onOpenContact()} label="Let's talk" size="sm" />
        </div>
      </div>
    </section>
  );
}
