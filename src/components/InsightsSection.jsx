import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import LetsTalkButton from './LetsTalkButton';

export default function InsightsSection({ onOpenContact, onNavigate }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 'custom-vs-readymade',
      tag: 'SOFTWARE STRATEGY',
      title: 'Custom Software vs Ready-Made Software: Which Is Right for Your Business?',
      date: 'AUG 24, 2026',
      readTime: '5 min read',
      color: 'bg-blue-600',
      summary: 'A practical comparison between off-the-shelf SaaS tools and bespoke business software tailored around your actual operational workflows.',
      content: `When scaling a business, leaders inevitably reach a crossroads: should you subscribe to off-the-shelf software or build custom business software?

Off-the-shelf SaaS tools offer quick setup, but they force your company to adapt to rigid, pre-packaged workflows. As your team grows, monthly per-user subscription fees multiply, and you often end up paying for features you never use.

Custom software development, on the other hand, is built around your specific business logic. You maintain 100% ownership of your source code and database, eliminate recurring user licenses, and seamlessly integrate internal departments.

Key Takeaways for Founders:
• Choose Ready-Made SaaS for standardized, non-core tasks like basic email hosting.
• Choose Custom Software when your workflow is a core competitive advantage—such as specialized inventory tracking, custom GST billing, or multi-role staff permissions.`,
      relatedService: { name: 'Custom Software Development', path: '/custom-software-development-in-malegaon/' },
      relatedLocation: { name: 'Malegaon HQ', path: '/locations/malegaon/' },
    },
    {
      id: 'excel-to-custom-software',
      tag: 'OPERATIONAL EFFICIENCY',
      title: 'When Should a Growing Business Move From Excel to Custom Software?',
      date: 'AUG 20, 2026',
      readTime: '6 min read',
      color: 'bg-indigo-600',
      summary: 'Identify the 5 critical operational warning signs indicating your spreadsheets are capping company growth.',
      content: `Spreadsheets like Microsoft Excel and Google Sheets are great for early-stage tracking. But as order volume increases, relying on manual spreadsheets creates severe operational friction.

5 Warning Signs It's Time to Move Beyond Excel:
1. Version Conflict & Overwritten Data: Multiple staff members editing different spreadsheet files leads to inaccurate stock levels and customer records.
2. Lack of Role-Based Access Control (RBAC): Anyone with file access can view sensitive financial ledgers or accidentally delete formulas.
3. Slow Multi-Godown Stock Reconciliation: Reconciling stock across multiple warehouses takes hours of manual data entry instead of real-time sync.
4. Manual GST Invoice Delays: Re-keying order data into separate accounting tools increases human error and delays dispatching.
5. Zero Automated Alerts: Excel cannot trigger real-time WhatsApp or push notifications when stock drops below safety thresholds.

By transitioning to custom business software, companies automate data entry, restrict staff permissions by role, and gain real-time executive dashboards.`,
      relatedService: { name: 'Software Development Company', path: '/software-company-in-malegaon/' },
      relatedLocation: { name: 'Nashik Region', path: '/locations/nashik/' },
    },
    {
      id: 'website-cost-guide-2026',
      tag: 'WEB ENGINEERING',
      title: 'How Much Does a Professional Business Website Cost in 2026?',
      date: 'AUG 16, 2026',
      readTime: '4 min read',
      color: 'bg-sky-600',
      summary: 'An honest breakdown of website development pricing, template risks, and true long-term ROI.',
      content: `Website pricing varies dramatically across agencies, leaving many business owners confused. Understanding what you are paying for is critical to making a sound investment.

1. Low-Cost Generic Templates (₹5,000 - ₹15,000):
Often built on bloated WordPress themes with heavy plugins. They suffer from slow load times (>4 seconds), security vulnerabilities, and poor mobile responsiveness.

2. Custom High-Performance React & Next.js Platforms (₹25,000 - ₹80,000+):
Engineered with clean component code, sub-second load speeds (<800ms), Core Web Vitals optimization, built-in technical SEO, and conversion-focused UI/UX.

Why Speed Matters for ROI:
Google penalizes slow websites. Every 1-second delay in page load time reduces mobile conversion rates by 20%. Investing in a fast custom web application directly lowers ad acquisition costs and boosts inbound inquiries.`,
      relatedService: { name: 'Website Development Company', path: '/web-development-company-in-malegaon/' },
      relatedLocation: { name: 'Dhule Region', path: '/locations/dhule/' },
    },
    {
      id: 'how-to-choose-software-company',
      tag: 'TECHNICAL SELECTION',
      title: 'How to Choose a Software Development Partner: Key Criteria for Founders',
      date: 'AUG 12, 2026',
      readTime: '5 min read',
      color: 'bg-emerald-600',
      summary: 'Essential evaluation criteria for founders seeking reliable software engineering and transparent delivery.',
      content: `Selecting the wrong software vendor leads to missed deadlines, bloated budgets, and unmaintainable codebases. Here is a founder's checklist for evaluating a software engineering partner:

Key Evaluation Criteria:
1. 100% Source Code & Asset Ownership: Ensure the contract explicitly states that you own all intellectual property, source repositories, and database assets upon completion.
2. Direct Developer Communication: Avoid agencies where communication is filtered through non-technical sales account managers. Speak directly with the engineers building your system.
3. Modern Technology Stack: Choose partners building with type-safe, industry-standard frameworks (React, Next.js, Node.js, TypeScript) rather than outdated legacy platforms.
4. Regional Proximity & Hands-On Support: Having a regional software partner allows for face-to-face roadmap workshops, rapid on-site staff training, and reliable ongoing maintenance.`,
      relatedService: { name: 'Software Company in Malegaon', path: '/software-company-in-malegaon/' },
      relatedLocation: { name: 'Malegaon HQ', path: '/locations/malegaon/' },
    },
    {
      id: 'why-small-business-needs-custom-site',
      tag: 'DIGITAL GROWTH',
      title: 'Why Growing Businesses Need a Fast, Conversion-Focused Website',
      date: 'AUG 08, 2026',
      readTime: '4 min read',
      color: 'bg-amber-600',
      summary: 'How fast sub-second websites build buyer trust and turn casual ad traffic into qualified phone calls.',
      content: `For modern commercial companies, a website is no longer just a digital brochure—it is your primary 24/7 sales representative.

When prospective clients search for your services or click on a Meta ad, your website forms their first impression of your operational quality.

What Makes a Website Convert Visitors into Clients?
• Sub-Second Load Speed (<800ms): Fast page rendering prevents instant bounce rate drop-offs.
• Mobile-First Responsive Design: Over 75% of business inquiries originate on mobile smartphones.
• Clear Value Proposition & Direct Action: Placing prominent direct-dial phone buttons and inquiry forms ensures frictionless communication.`,
      relatedService: { name: 'Digital Marketing & Lead Gen', path: '/digital-marketing-company-in-malegaon/' },
      relatedLocation: { name: 'Manmad Region', path: '/locations/manmad/' },
    },
    {
      id: 'regional-automation-malegaon-nashik',
      tag: 'REGIONAL AUTOMATION',
      title: 'How Manufacturers in Malegaon & Nashik Automate Inventory & Billing',
      date: 'AUG 04, 2026',
      readTime: '6 min read',
      color: 'bg-violet-600',
      summary: 'Real-world operational insights into how textile mills and distributors eliminate paper ledgers.',
      content: `Industrial hubs in Northern Maharashtra—such as powerloom units in Malegaon and manufacturing plants in Nashik—manage heavy daily dispatches of raw materials and finished goods.

Historically, managers recorded production logs on paper ledgers and WhatsApp groups. Reconciling weekly sales against raw yarn or metal stock required tedious manual auditing.

How Custom ERP Software Solves Regional Bottlenecks:
• Dispatch & Weighbridge Integration: Recording lorry dispatch weights directly into central software eliminates manual billing errors.
• Multi-Role Staff Permissions: Floor supervisors record daily production metrics without accessing confidential financial ledgers.
• Automated GST Invoicing: Generating GST-compliant invoices directly from dispatch logs saves hours of accounting work each week.`,
      relatedService: { name: 'Software Development Company', path: '/software-company-in-malegaon/' },
      relatedLocation: { name: 'Yeola Region', path: '/locations/yeola/' },
    },
  ];

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": articles.map((art, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "TechArticle",
          "headline": art.title,
          "description": art.summary,
          "datePublished": "2026-08-12",
          "author": {
            "@type": "Organization",
            "name": "Sparrow IT & Digital Solutions",
            "url": "https://sparrowitanddigitalsolutions.in/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sparrow IT & Digital Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sparrowitanddigitalsolutions.in/sparrow-bird-icon.png"
            }
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'articles-schema-insights';
    script.text = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('articles-schema-insights');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="insights" className="py-24 bg-gradient-to-b from-[#092347] via-[#08236B] to-[#051329] text-white">
      <div className="site-container space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>INSIGHTS &amp; ENGINEERING STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Software, web &amp; growth <br />
            <span className="text-[#38BDF8]">playbooks for founders.</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            Practical insights on custom software selection, web application architecture, and operational automation written by the Sparrow engineering team.
          </p>
        </div>

        {/* 6 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-blue-950/70 border border-blue-400/20 hover:border-sky-400/50 transition-all flex flex-col justify-between space-y-6 text-left group cursor-pointer"
              onClick={() => setSelectedArticle(art)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-sky-300">
                  <span className="px-2.5 py-1 rounded-md bg-blue-900/60 border border-blue-400/20 font-bold uppercase tracking-wider">
                    {art.tag}
                  </span>
                  <span className="flex items-center gap-1 text-blue-200/80">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                  {art.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between text-xs font-mono text-sky-300 font-bold">
                <span>Read Full Insight</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-blue-950 border border-blue-400/30 rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-6 text-left relative max-h-[88vh] overflow-y-auto text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-blue-900 hover:bg-blue-800 border border-blue-400/30 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-sky-300">
                  <span className="px-3 py-1 rounded-md bg-blue-900 border border-blue-400/30 font-bold">
                    {selectedArticle.tag}
                  </span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-blue-900/40 border border-blue-400/20 text-xs sm:text-sm text-blue-100 font-medium leading-relaxed italic">
                "{selectedArticle.summary}"
              </div>

              <div className="text-sm text-blue-100 leading-relaxed font-normal whitespace-pre-line space-y-4">
                {selectedArticle.content}
              </div>

              {/* Interlinking CTA Section */}
              <div className="pt-6 border-t border-blue-900/60 space-y-4">
                <div className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider">
                  Related Technology Services &amp; Hubs
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {selectedArticle.relatedService && onNavigate && (
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onNavigate(selectedArticle.relatedService.path);
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-900/80 border border-blue-400/30 hover:border-sky-400 text-xs font-mono font-bold text-sky-200 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{selectedArticle.relatedService.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {selectedArticle.relatedLocation && onNavigate && (
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onNavigate(selectedArticle.relatedLocation.path);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:border-white/40 text-xs font-mono font-bold text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{selectedArticle.relatedLocation.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="pt-2 flex justify-center">
                  <LetsTalkButton
                    onClick={() => {
                      const topic = selectedArticle.title;
                      setSelectedArticle(null);
                      if (onOpenContact) onOpenContact(topic);
                    }}
                    label="Discuss This Topic With Our Team"
                    size="md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
