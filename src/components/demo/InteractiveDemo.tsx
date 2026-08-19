'use client';

import React, { useState } from 'react';
import { DEMO_DATASETS, ResearchDataset, SourceItem } from '@/data/demoData';
import { FileText, Globe, FileSpreadsheet, Sparkles, Check, Copy, ExternalLink, Link2, Eye, ShieldAlert } from 'lucide-react';

export function InteractiveDemo() {
  const [activeDatasetId, setActiveDatasetId] = useState<string>(DEMO_DATASETS[0].id);
  const [selectedSourceId, setSelectedSourceId] = useState<string>(DEMO_DATASETS[0].sources[0].id);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const activeDataset = DEMO_DATASETS.find(d => d.id === activeDatasetId) || DEMO_DATASETS[0];
  const activeSource = activeDataset.sources.find(s => s.id === selectedSourceId) || activeDataset.sources[0];

  const handleDatasetChange = (id: string) => {
    setActiveDatasetId(id);
    const newDs = DEMO_DATASETS.find(d => d.id === id);
    if (newDs && newDs.sources.length > 0) {
      setSelectedSourceId(newDs.sources[0].id);
    }
    setActiveHighlightIndex(null);
  };

  const handleCopyBrief = () => {
    const textToCopy = `${activeDataset.brief.title}\n\n${activeDataset.brief.summary}\n\nKey Findings:\n${activeDataset.brief.keyFindings.map(f => `- ${f.heading}: ${f.detail} [Source: ${f.sourceRef}]`).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSourceIcon = (type: SourceItem['type']) => {
    switch (type) {
      case 'pdf': return <FileText className="w-4 h-4 text-rose-400" />;
      case 'web': return <Globe className="w-4 h-4 text-sky-400" />;
      case 'notes': return <FileSpreadsheet className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="demo" className="py-20 md:py-28 relative bg-zinc-950/80 border-t border-b border-white/10">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-xs font-mono text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workspace Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience real-time research synthesis.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Select a real domain dataset below to test how Relay ingests raw source material, indexes claims, and synthesizes citation-anchored briefs.
          </p>
        </div>

        {/* Dataset Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {DEMO_DATASETS.map((ds) => {
            const isActive = ds.id === activeDatasetId;
            return (
              <button
                key={ds.id}
                onClick={() => handleDatasetChange(ds.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center space-x-2 border ${
                  isActive
                    ? 'bg-zinc-800 text-white border-sky-500/50 shadow-lg shadow-sky-500/5'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span className="font-mono text-zinc-500">{ds.category} •</span>
                <span>{ds.name}</span>
              </button>
            );
          })}
        </div>

        {/* The Product UI Sandbox Container */}
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Mock Window Bar */}
          <div className="px-4 py-3 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-4 text-xs font-mono text-zinc-400">
                relay://workspace/{activeDataset.id}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-xs font-mono text-zinc-400">
              <span>Sources: <strong className="text-zinc-200">{activeDataset.sourcesCount}</strong></span>
              <span>Indexed Claims: <strong className="text-sky-400">{activeDataset.claimsCount}</strong></span>
              <span>Confidence: <strong className="text-emerald-400">{activeDataset.brief.confidenceScore}%</strong></span>
            </div>
          </div>

          {/* 3-Column Interactive Sandbox Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            
            {/* Column 1: Source Library (3 cols) */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-zinc-800 p-4 space-y-4 bg-zinc-950/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Parsed Sources ({activeDataset.sources.length})
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                  Synced
                </span>
              </div>

              <div className="space-y-2">
                {activeDataset.sources.map((src) => {
                  const isSelected = src.id === activeSource.id;
                  return (
                    <button
                      key={src.id}
                      onClick={() => {
                        setSelectedSourceId(src.id);
                        setActiveHighlightIndex(null);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-zinc-800/90 text-white border-sky-500/60 shadow-md'
                          : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/40 border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start space-x-2.5">
                        <div className="mt-0.5 shrink-0">{getSourceIcon(src.type)}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-medium truncate text-zinc-200">{src.title}</h4>
                          <div className="flex items-center space-x-2 mt-1 text-[10px] font-mono text-zinc-500">
                            <span>{src.pagesOrWords}</span>
                            <span>•</span>
                            <span className="text-sky-400">{src.extractedClaims} claims</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Active Source Reader & Highlight Inspector (4 cols) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-800 p-5 space-y-4 bg-zinc-900/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                    Source Inspector
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">ID: {activeSource.id}</span>
              </div>

              {/* Source Title & Excerpt */}
              <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800 space-y-2">
                <h4 className="text-xs font-mono text-sky-300 font-medium flex items-center space-x-1.5">
                  <span>{activeSource.title}</span>
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  "{activeSource.snippet}"
                </p>
              </div>

              {/* Extracted Key Claims & Confidence */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-zinc-400 block font-medium">
                  Detected Claims ({activeSource.highlights.length}):
                </span>
                {activeSource.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveHighlightIndex(idx)}
                    onMouseLeave={() => setActiveHighlightIndex(null)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      activeHighlightIndex === idx
                        ? 'bg-sky-950/40 border-sky-500/70 text-white shadow-lg'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-sky-400 font-semibold">{hl.label}</span>
                      <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        {hl.confidence} match
                      </span>
                    </div>
                    <p className="text-xs leading-normal">
                      "{hl.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Synthesized AI Brief & Citations (5 cols) */}
            <div className="lg:col-span-5 p-5 space-y-4 bg-zinc-950/60">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    Synthesized Executive Brief
                  </span>
                </div>
                <button
                  onClick={handleCopyBrief}
                  className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-[11px] text-zinc-200 border border-zinc-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Copy Brief</span>
                    </>
                  )}
                </button>
              </div>

              {/* Brief Content Card */}
              <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800 space-y-4">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {activeDataset.brief.title}
                </h3>
                
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeDataset.brief.summary}
                </p>

                {/* Key Findings with Citations */}
                <div className="space-y-3 pt-2 border-t border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                    Key Structured Findings:
                  </span>
                  
                  {activeDataset.brief.keyFindings.map((finding, idx) => (
                    <div key={idx} className="bg-zinc-950/70 p-3 rounded-lg border border-zinc-800 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-200">{finding.heading}</span>
                        <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                          <Link2 className="w-2.5 h-2.5" />
                          <span>{finding.sourceRef}</span>
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {finding.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Verification Note */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-800/80">
                  <span>{activeDataset.brief.synthesisNote}</span>
                  <span className="text-emerald-400">Verified Citation Lineage</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
