'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer" className="py-12 bg-zinc-950 border-t border-zinc-900 text-xs font-mono text-zinc-500">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
            </div>
            <span className="font-bold text-zinc-300 text-sm tracking-tight">RELAY</span>
            <span className="text-zinc-600" aria-hidden="true">|</span>
            <div className="flex items-center space-x-1.5 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <a href="#demo" className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none">Interactive Demo</a>
            <a href="#workflow" className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none">How It Works</a>
            <a href="#use-cases" className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none">Use Cases</a>
            <a href="#architecture" className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none">Architecture</a>
            <a href="#cta" className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none">Early Access</a>
          </nav>

          <div>
            <span>© {new Date().getFullYear()} Relay Intelligence Inc. All rights reserved.</span>
          </div>

        </div>
      </Container>
    </footer>
  );
}
