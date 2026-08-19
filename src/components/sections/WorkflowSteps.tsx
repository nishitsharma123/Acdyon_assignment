'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Download, FileUp, Network, Sparkles } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Bring research together',
    subtitle: 'Multi-Format Source Ingestion',
    description: 'Drop PDFs, web articles, raw notes, audio transcripts, and datasets into one central workspace. Relay automatically parses formatting, tables, and references without manual copy-pasting.',
    icon: FileUp,
    badge: 'Ingest',
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/40',
  },
  {
    step: '02',
    title: 'Understand and structure it',
    subtitle: 'Semantic Graph & Claim Extraction',
    description: 'Relay identifies core arguments, statistical metrics, and cross-document themes—constructing a dynamic knowledge graph that highlights connections and flags contradictions.',
    icon: Network,
    badge: 'Structure',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
  },
  {
    step: '03',
    title: 'Turn it into useful output',
    subtitle: 'Citation-Anchored Synthesis',
    description: 'Generate publish-ready executive summaries, literature reviews, or strategic briefs. Every sentence maintains a direct clickable hyperlink to its source paragraph.',
    icon: Download,
    badge: 'Publish',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
  },
];

export function WorkflowSteps() {
  return (
    <section id="workflow" aria-labelledby="workflow-heading" className="py-20 sm:py-24 relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
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
              <span>How Relay Works</span>
            </Badge>
          </div>
          <h2 id="workflow-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Three steps from raw sources to structured output.
          </h2>
          <p className="text-sm sm:text-base text-relay-text-secondary leading-relaxed">
            Relay replaces chaotic document tabs with a clean, 3-step pipeline designed for deep knowledge work.
          </p>
        </motion.div>

        {/* 3 Step Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card elevated className="h-full flex flex-col justify-between space-y-6 relative group hover:border-zinc-700/90 transition-all p-6 sm:p-7">
                  
                  {/* Step Number & Badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        {item.step}
                      </span>
                      <Badge variant="mono" className={`border ${item.borderColor}`}>
                        <span className={item.accentColor}>{item.badge}</span>
                      </Badge>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.accentColor}`} aria-hidden="true" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-relay-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator */}
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                </Card>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
