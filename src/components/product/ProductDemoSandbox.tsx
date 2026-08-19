'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEMO_DATASETS, SourceItem } from '@/data/demoData';
import { FileText, Globe, FileSpreadsheet, Sparkles, Check, Copy, Link2, Eye, RefreshCw } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ProductDemoSandbox() {
  const [activeDatasetId, setActiveDatasetId] = useState<string>(DEMO_DATASETS[0].id);
  const [selectedSourceId, setSelectedSourceId] = useState<string>(DEMO_DATASETS[0].sources[0].id);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
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

  const handleReSynthesize = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
    }, 700);
  };

  const handleCopyBrief = () => {
    const textToCopy = `${activeDataset.brief.title}\n\n${activeDataset.brief.summary}\n\nKey Findings:\n${activeDataset.brief.keyFindings.map(f => `- ${f.heading}: ${f.detail} [Source: ${f.sourceRef}]`).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSourceIcon = (type: SourceItem['type']) => {
    switch (type) {
      case 'pdf': return <FileText className="w-4 h-4 text-rose-400" aria-hidden="true" />;
      case 'web': return <Globe className="w-4 h-4 text-sky-400" aria-hidden="true" />;
      case 'notes': return <FileSpreadsheet className="w-4 h-4 text-amber-400" aria-hidden="true" />;
    }
  };

  return (
    <section id="demo" aria-labelledby="demo-heading" className="py-20 md:py-28 relative bg-zinc-950 border-t border-b border-white/10 overflow-hidden">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-editorial-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <Container>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex">
            <Badge variant="sky">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-sky-400" aria-hidden="true" />
              <span>Primary Product Demonstration</span>
            </Badge>
          </div>
          <h2 id="demo-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Transform raw material into <span className="text-gradient-accent">citation-backed intelligence</span>.
          </h2>
          <p className="text-sm sm:text-base text-relay-text-secondary leading-relaxed max-w-2xl mx-auto">
            Test the live Relay workspace interface below. Switch between domain scenarios to see how raw sources are indexed, claims highlighted, and citation-anchored briefs synthesized in real time.
          </p>
        </motion.div>

        {/* Domain Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          role="tablist"
          aria-label="Research Scenario Datasets"
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {DEMO_DATASETS.map((ds) => {
            const isActive = ds.id === activeDatasetId;
            return (
              <button
                key={ds.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`workspace-panel-${ds.id}`}
                onClick={() => handleDatasetChange(ds.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center space-x-2 border min-h-[44px] ${
                  isActive
                    ? 'bg-zinc-800 text-white border-sky-500/60 shadow-lg shadow-sky-500/5 ring-1 ring-sky-500/30'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span className="font-mono text-zinc-500">{ds.category} •</span>
                <span>{ds.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Main Workspace Frame */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          id={`workspace-panel-${activeDataset.id}`}
          role="tabpanel"
          className="bg-zinc-900/90 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          
          {/* Chrome Bar */}
          <div className="px-4 py-3 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" aria-hidden="true" />
              <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-block">
                relay://workspace/{activeDataset.id}
              </span>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 text-xs font-mono text-zinc-400">
              <span className="hidden sm:inline">Sources: <strong className="text-zinc-200">{activeDataset.sourcesCount}</strong></span>
              <span>Claims: <strong className="text-sky-400">{activeDataset.claimsCount}</strong></span>
              <span>Accuracy: <strong className="text-emerald-400">{activeDataset.brief.confidenceScore}%</strong></span>
              
              <button
                onClick={handleReSynthesize}
                disabled={isSynthesizing}
                aria-label="Re-synthesize executive brief"
                className="flex items-center space-x-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded border border-zinc-700 text-[11px] transition-colors min-h-[32px]"
              >
                <RefreshCw className={`w-3 h-3 ${isSynthesizing ? 'animate-spin text-sky-400' : 'text-zinc-400'}`} aria-hidden="true" />
                <span className="hidden sm:inline font-sans">Re-Synthesize</span>
              </button>
            </div>
          </div>

          {/* DESKTOP LAYOUT (3 Columns on md and larger) */}
          <div className="hidden md:grid md:grid-cols-12 min-h-[520px]">
            
            {/* Left Column: Parsed Sources (3 cols) */}
            <div className="md:col-span-3 border-r border-zinc-800 p-4 space-y-4 bg-zinc-950/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Sources ({activeDataset.sources.length})
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                  Indexed
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
                      aria-label={`Select source ${src.title}`}
                      className={`w-full text-left p-3 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-zinc-800/90 text-white border-sky-500/60 shadow-md'
                          : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/40 border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start space-x-2.5">
                        <div className="mt-0.5 shrink-0">{getSourceIcon(src.type)}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-medium truncate text-zinc-200">{src.title}</h3>
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

            {/* Center Column: Source Inspector (4 cols) */}
            <div className="md:col-span-4 border-r border-zinc-800 p-5 space-y-4 bg-zinc-900/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                    Source Inspector
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">ID: {activeSource.id}</span>
              </div>

              {/* Source Excerpt */}
              <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800 space-y-2">
                <h3 className="text-xs font-mono text-sky-300 font-medium flex items-center space-x-1.5">
                  <span>{activeSource.title}</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  "{activeSource.snippet}"
                </p>
              </div>

              {/* Claims & Interactive Highlight Triggers */}
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
                        ? 'bg-sky-950/50 border-sky-500/80 text-white shadow-lg ring-1 ring-sky-500/30'
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

            {/* Right Column: Executive Brief Synthesis (5 cols) */}
            <div className="md:col-span-5 p-5 space-y-4 bg-zinc-950/60 relative">
              
              {/* Re-Synthesis Loading Overlay */}
              {isSynthesizing && (
                <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-3" role="status" aria-live="polite">
                  <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-mono text-sky-400 animate-pulse">Running Citation-Anchored Synthesis...</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    Synthesized Executive Brief
                  </span>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyBrief}
                  aria-label="Copy brief text to clipboard"
                  className="py-1 px-2.5 text-xs font-sans"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400 mr-1" aria-hidden="true" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400 mr-1" aria-hidden="true" />
                      <span>Copy Brief</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Brief Content Card */}
              <Card elevated className="p-4 space-y-4 bg-zinc-900/90 border-zinc-800">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {activeDataset.brief.title}
                </h3>
                
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeDataset.brief.summary}
                </p>

                {/* Key Findings with Citation Badges */}
                <div className="space-y-3 pt-2 border-t border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                    Key Structured Findings:
                  </span>
                  
                  {activeDataset.brief.keyFindings.map((finding, idx) => {
                    const isHighlighted = activeHighlightIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border transition-all ${
                          isHighlighted
                            ? 'bg-sky-950/60 border-sky-500/80 text-white ring-1 ring-sky-500/40 shadow-lg'
                            : 'bg-zinc-950/70 border-zinc-800 text-zinc-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-zinc-200">{finding.heading}</span>
                          <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                            <Link2 className="w-2.5 h-2.5" aria-hidden="true" />
                            <span>{finding.sourceRef}</span>
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {finding.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Lineage Audit Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-800/80">
                  <span>{activeDataset.brief.synthesisNote}</span>
                  <span className="text-emerald-400">100% Deterministic Citation Map</span>
                </div>

              </Card>

            </div>

          </div>

          {/* MOBILE RESPONSIVE LAYOUT (390px Stack) */}
          <div className="md:hidden p-4 space-y-4 bg-zinc-950/90">
            
            {/* Priority 1: Key Synthesized Insight */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="emerald">
                  <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                  <span>Synthesized Brief</span>
                </Badge>
                
                <Button size="sm" variant="outline" onClick={handleCopyBrief} aria-label="Copy brief text" className="text-xs py-1 px-2.5 min-h-[36px]">
                  {copied ? <Check className="w-3 h-3 text-emerald-400" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                  <span className="ml-1">{copied ? 'Copied' : 'Copy'}</span>
                </Button>
              </div>

              <h3 className="text-sm font-bold text-white tracking-tight">
                {activeDataset.brief.title}
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeDataset.brief.summary}
              </p>
            </div>

            {/* Priority 2: Key Findings */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                Key Citations ({activeDataset.brief.keyFindings.length}):
              </span>
              
              {activeDataset.brief.keyFindings.map((finding, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-200">{finding.heading}</span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/30 truncate max-w-[140px]">
                      {finding.sourceRef}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {finding.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Priority 3: Sources Context List */}
            <div className="pt-2 border-t border-zinc-800 space-y-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                Parsed Sources ({activeDataset.sources.length}):
              </span>
              <div className="grid grid-cols-1 gap-2">
                {activeDataset.sources.map((src) => (
                  <button
                    key={src.id}
                    onClick={() => setSelectedSourceId(src.id)}
                    aria-label={`View source ${src.title}`}
                    className={`w-full p-3 rounded-lg text-left text-xs border transition-all flex items-center justify-between min-h-[44px] ${
                      src.id === activeSource.id
                        ? 'bg-zinc-800 text-white border-sky-500/60'
                        : 'bg-zinc-900/50 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {getSourceIcon(src.type)}
                      <span className="truncate">{src.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 shrink-0">{src.extractedClaims} claims</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}
