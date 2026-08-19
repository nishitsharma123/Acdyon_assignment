'use client';

import React from 'react';
import { ShieldCheck, HardDrive, KeyRound, EyeOff } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export function ArchitectureSecurity() {
  return (
    <section id="architecture" aria-labelledby="security-heading" className="py-20 bg-zinc-950/90 border-t border-zinc-800 relative">
      <Container>
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex">
            <Badge variant="emerald">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
              <span>Security & Provenance Guarantee</span>
            </Badge>
          </div>
          <h2 id="security-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Honest security built into every layer.
          </h2>
          <p className="text-base text-zinc-400">
            We don't manufacture logos or claims. We publish verifiable architectural standards to protect sensitive research materials.
          </p>
        </div>

        {/* 3 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card className="p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400">
              <EyeOff className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Zero Model Training</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your research documents, notes, and outputs are strictly isolated. We enforce zero-data-retention APIs and never fine-tune models on user materials.
            </p>
            <div className="pt-2 font-mono text-[11px] text-emerald-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>Contractually Enforced Policy</span>
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sky-400">
              <HardDrive className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Local-First Cache</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Workspace indexes and source vector embeddings reside in browser IndexedDB with AES-GCM 256-bit encryption before syncing to your private cloud storage.
            </p>
            <div className="pt-2 font-mono text-[11px] text-sky-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              <span>Client-Side Key Derivation</span>
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-400">
              <KeyRound className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">Line-Level Provenance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every synthesized claim carries a cryptographic checksum tying it to exact page coordinates in your source PDF or web document.
            </p>
            <div className="pt-2 font-mono text-[11px] text-amber-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
              <span>Auditable Citation Graph</span>
            </div>
          </Card>

        </div>

      </Container>
    </section>
  );
}
