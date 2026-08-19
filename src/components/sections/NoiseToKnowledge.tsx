'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { AlertCircle, CheckCircle2, FileQuestion, Layers, Link2, Sparkles, XCircle } from 'lucide-react';

export function NoiseToKnowledge() {
  return (
    <section aria-labelledby="noise-heading" className="py-20 sm:py-24 relative bg-zinc-950/90 border-t border-zinc-900 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

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
            <Badge variant="sky">
              <Sparkles className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
              <span>Visual Transformation</span>
            </Badge>
          </div>
          <h2 id="noise-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            From fragmented noise to <span className="text-gradient-accent">actionable knowledge</span>.
          </h2>
          <p className="text-sm sm:text-base text-relay-text-secondary leading-relaxed">
            See how Relay collapses chaos, un-cited claims, and tab overload into a single deterministic intelligence environment.
          </p>
        </motion.div>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Unstructured Noise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-6 sm:p-8 bg-zinc-900/40 border-rose-500/20 space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-rose-500/10 pb-4">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-rose-400" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white tracking-tight">The Scattered Friction</h3>
                </div>
                <Badge variant="mono" className="text-rose-400 bg-rose-950/40 border-rose-500/20">
                  Unstructured Noise
                </Badge>
              </div>

              <div className="space-y-4">
                
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-rose-300">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>24+ Disconnected Browser Tabs</span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-5">
                    Context switching across PDFs, web clips, and Google Docs causes lost references and memory decay.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-rose-300">
                    <FileQuestion className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Unverified Claim Hallucinations</span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-5">
                    Traditional AI tools synthesize paragraphs without source page citations, forcing manual fact-checking.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-rose-300">
                    <Layers className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Hidden Contradictions & Duplication</span>
                  </div>
                  <p className="text-xs text-zinc-400 pl-5">
                    Conflicting data metrics across documents go undetected until final report publishing.
                  </p>
                </div>

              </div>

            </Card>
          </motion.div>

          {/* Card 2: Structured Knowledge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card elevated className="h-full p-6 sm:p-8 bg-zinc-900/90 border-sky-500/40 space-y-6 relative overflow-hidden shadow-2xl shadow-sky-500/5">
              
              <div className="flex items-center justify-between border-b border-sky-500/20 pb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-400" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white tracking-tight">The Relay Environment</h3>
                </div>
                <Badge variant="sky">
                  <span>Structured Knowledge</span>
                </Badge>
              </div>

              <div className="space-y-4">
                
                <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-sky-500/30 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-sky-300">
                    <Layers className="w-3.5 h-3.5 shrink-0 text-sky-400" aria-hidden="true" />
                    <span>Unified Multi-Source Canvas</span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-5">
                    PDFs, notes, and web captures exist in a single indexed graph with automatic cross-referencing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-300">
                    <Link2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span>100% Deterministic Citation Links</span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-5">
                    Every output sentence hyperlinks directly to exact paragraph coordinates in the source document.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-amber-500/30 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-amber-300">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" aria-hidden="true" />
                    <span>Instant Executive Brief Synthesis</span>
                  </div>
                  <p className="text-xs text-zinc-300 pl-5">
                    Automatically generate publication-ready summaries with key findings and structured export formats.
                  </p>
                </div>

              </div>

            </Card>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
