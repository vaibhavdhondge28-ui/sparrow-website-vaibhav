import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl bg-[#0F1118] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto z-10 p-8 sm:p-10 space-y-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-slate-500 font-mono text-xs">• Case Study Preview</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">{project.title}</h3>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">{project.description}</p>
          </div>

          {/* Visual Showcase Box */}
          <div className={`rounded-2xl p-8 bg-gradient-to-br ${project.gradient} border border-slate-800 min-h-[220px] flex flex-col justify-between relative overflow-hidden`}>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Architecture Overview
            </div>
            <div className="space-y-2 max-w-lg z-10">
              <h4 className="text-xl font-bold text-white">{project.impactTitle}</h4>
              <p className="text-slate-300 text-xs leading-relaxed">{project.impactDesc}</p>
            </div>
          </div>

          {/* Key Deliverables & Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Achievements</div>
              <div className="space-y-2">
                {project.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact(`Similar to ${project.title}`);
              }}
              className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-sky-500/20"
            >
              <span>Build Similar Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
