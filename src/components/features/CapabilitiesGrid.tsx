'use client';

import React from 'react';
import { Layers, Network, FileCheck2, Share2, Sparkles, Cpu, ShieldCheck, Zap } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Multi-Source Ingestion Engine",
    tag: "Ingestion Pipeline",
    description: "Drag PDFs, raw transcripts, research notes, and web captures directly into a unified workspace. Relay automatically parses layout structure, figures, and tabular data with sub-second latency.",
    details: ["Native PDF layout OCR & table extract", "Markdown & web clip sanitization", "Audio transcript alignment"]
  },
  {
    icon: Network,
    title: "Autonomous Claim & Entity Graphing",
    tag: "Knowledge Graphing",
    description: "Instead of isolating documents in separate tabs, Relay constructs a unified semantic graph—mapping overlapping claims, contradictory findings, and shared statistical metrics across your library.",
    details: ["Cross-document claim resolution", "Contradiction detection flags", "Dynamic entity node clustering"]
  },
  {
    icon: FileCheck2,
    title: "Citation-Anchored Synthesis Studio",
    tag: "Deterministic Output",
    description: "Generate executive summaries, lit reviews, and strategic briefs. Every single synthesized sentence maintains a direct clickable hyperlink back to the original source paragraph.",
    details: ["Zero hallucination guarantee", "Paragraph-level line number mapping", "Confidence score auditing"]
  },
  {
    icon: Share2,
    title: "Export & Workflow Pipeline",
    tag: "Production Ready",
    description: "Publish finished research directly into your team's workflow. Export formatted briefs to Markdown, LaTeX, Notion, or query structured knowledge via REST/GraphQL APIs.",
    details: ["LaTeX & BibTeX integration", "Notion & Obsidian sync", "JSON knowledge graph export"]
  }
];

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="py-24 relative bg-zinc-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Engine Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built for rigorous intellectual workflows.
          </h2>
          <p className="text-base text-zinc-400">
            Relay replaces tab overload and manual copy-pasting with a clean, deterministic research pipeline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-sky-500/5"
              >
                {/* Subtle Hover Gradient Spotlight */}
                <div className="absolute -right-20 -top-20 w-56 h-56 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-700/80 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80 space-y-2">
                  {cap.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                      <Zap className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
