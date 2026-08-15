import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, Lock } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function ProjectsShowcase({ onOpenContact }) {
  const projects = [
    {
      id: 'skillverse',
      title: 'SkillVerse AI',
      subtitle: 'AI-POWERED COURSE GENERATOR',
      category: 'AI Platform',
      desc: 'Full-stack AI learning platform generating custom courses, interactive quizzes, and instant AI tutor assistance.',
      image: '/skillverse-poster.jpg',
      tags: ['React', 'Node.js', 'Vite', 'Gemini AI API'],
      demoUrl: 'https://skillverse-frontend-fawn.vercel.app/',
      isConfidential: false,
    },
    {
      id: 'ib',
      title: 'IB (Indians Boutique)',
      subtitle: 'LUXURY ETHNIC FASHION UI',
      category: 'E-Commerce Platform',
      desc: 'High-end e-commerce fashion web application featuring curated occasion collections and multi-store location finders.',
      image: '/ib-poster.jpg',
      tags: ['React SPA', 'Tailwind CSS', 'Mobile First'],
      demoUrl: 'https://darshanahireworkspace.github.io/IB/',
      isConfidential: false,
    },
    {
      id: 'police',
      title: 'Police City Management',
      subtitle: 'CONFIDENTIAL ENTERPRISE SOLUTION',
      category: 'Municipal & Governance Software',
      desc: 'Enterprise governance system registering commercial shop directories (apparel, groceries, medicals), religious place records, and festival permissions with separate admin panel.',
      image: null,
      tags: ['Enterprise RBAC', 'Database Arch', 'Confidential'],
      demoUrl: null,
      isConfidential: true,
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-gradient-to-b from-[#0A2E85] via-[#0B2347] to-[#0A2750] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>FEATURED PROJECTS &amp; PRODUCTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for impact. <br />
            Built for <span className="text-[#38BDF8]">scale.</span>
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Explore live digital applications and enterprise systems created by Sparrow IT and digital solutions.
          </p>
        </div>

        {/* 3-Column Compact Grid Layout (Refined rounded-2xl) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-blue-950/70 border border-blue-400/25 p-5 shadow-xl hover:border-blue-400/60 transition-all flex flex-col justify-between group space-y-4 text-left"
            >
              <div className="space-y-3">
                {/* Poster / Preview Container */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-blue-900/60 border border-blue-400/20 shadow-md">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-sky-300 space-y-2">
                      <Lock className="w-8 h-8 text-sky-400" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Confidential Project</span>
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold text-sky-200 uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono font-bold text-sky-300 uppercase tracking-widest">
                    {project.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-100/90 leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-blue-800/60">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-blue-900/60 border border-blue-400/20 text-[9px] font-mono font-medium text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-[#1866EC] hover:bg-[#0D52D4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenContact(project.title)}
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-900/80 hover:bg-blue-800 border border-blue-400/30 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire Info</span>
                      <Code2 className="w-3.5 h-3.5 text-sky-300" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="pt-4 flex justify-center">
          <LetsTalkButton onClick={() => onOpenContact()} label="Build a project like this with us" size="md" />
        </div>
      </div>
    </section>
  );
}
