'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { BookOpen, Compass, Scale, BrainCircuit, Sparkles, Check } from 'lucide-react';

const USE_CASES = [
  {
    icon: BookOpen,
    category: "Academic & Scientific",
    title: "Literature Review & Trial Analysis",
    description: "Synthesize dozens of peer-reviewed papers, track conflicting experimental findings, and maintain exact page-level citations for manuscript writing.",
    outcomes: ["Cross-paper claim comparison", "BibTeX export integration", "Zero hallucination guarantee"],
  },
  {
    icon: Compass,
    category: "Product & Strategy",
    title: "Market & Competitive Intelligence",
    description: "Ingest customer interview transcripts, SEC filings, and industry reports to generate executive briefs and feature requirement matrices.",
    outcomes: ["Interview transcript synthesis", "Trend & bottleneck extraction", "One-click Notion & Markdown export"],
  },
  {
    icon: Scale,
    category: "Legal & Regulatory",
    title: "Policy Auditing & Statutory Review",
    description: "Audit complex multi-jurisdictional policy updates, line-by-line statutory compliance requirements, and regulatory enforcement briefs.",
    outcomes: ["Paragraph-level lineage audit", "Local-first encrypted storage", "Deterministic claim verification"],
  },
  {
    icon: BrainCircuit,
    category: "Knowledge Workers",
    title: "Personal Knowledge Management (PKM)",
    description: "Transform years of scattered markdown notes, saved articles, and research bookmarks into an interconnected, queryable intelligence canvas.",
    outcomes: ["Local Markdown directory sync", "Semantic graph clustering", "Instant query synthesis"],
  }
];

export function UseCasesSection() {
  return (
    <section id="use-cases" aria-labelledby="usecases-heading" className="py-20 sm:py-24 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16"
        >
          <div className="inline-flex">
            <Badge variant="mono">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-sky-400" aria-hidden="true" />
              <span>Domain Applications</span>
            </Badge>
          </div>
          <h2 id="usecases-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Designed for high-stakes research workflows.
          </h2>
          <p className="text-sm sm:text-base text-relay-text-secondary leading-relaxed">
            Relay adapts to complex, text-dense domain disciplines where source accuracy and citation integrity are mandatory.
          </p>
        </motion.div>

        {/* 4 Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Card className="h-full p-6 sm:p-8 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-6 group hover:shadow-2xl hover:shadow-sky-500/5">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <Badge variant="mono" className="text-zinc-400">
                        {uc.category}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {uc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-relay-text-secondary leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>

                  {/* Outcomes list */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                    {uc.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
