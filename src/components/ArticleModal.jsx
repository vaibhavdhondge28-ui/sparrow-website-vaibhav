import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Tag, ArrowRight, Share2, Sparkles } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenContact }) {
  if (!article) return null;

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

        {/* Article Reader Container */}
        <motion.div
          className="relative w-full max-w-3xl bg-[#0F1118] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto z-10 p-8 sm:p-12 space-y-6 max-h-[90vh] overflow-y-auto"
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

          {/* Article Header Meta */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-semibold">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {article.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed italic border-l-2 border-sky-400 pl-4 py-1">
              "{article.summary}"
            </p>
          </div>

          {/* Article Full Body Copy */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-sky-500/20 space-y-3">
            <div className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold">Executive Takeaway</div>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">{article.takeaway}</p>
          </div>

          {/* Article Footer */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
            >
              Back to Insights
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Article Inquiry: ${article.title}`);
              }}
              className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-sky-500/20"
            >
              <span>Discuss Strategy With Sparrow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
