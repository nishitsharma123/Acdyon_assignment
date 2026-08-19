'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, FileSearch, Sparkles } from 'lucide-react';
import { HeroCanvas3D } from './HeroCanvas3D';

export function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid work or academic email address.');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Spotlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Next-Generation AI Research Workspace</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Turn fragmented research into <span className="text-gradient-accent">structured intelligence</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Relay ingests documents, notes, web captures, and datasets into a single workspace—automatically synthesizing cross-referenced knowledge graphs and publication-ready briefs.
            </p>

            {/* Single Strong CTA Email Capture Form */}
            <div className="pt-2 max-w-md">
              {status === 'success' ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-300">Access Request Confirmed</h4>
                    <p className="text-xs text-emerald-400/80 mt-1">
                      We have queued <span className="font-mono font-medium text-emerald-200">{email}</span> for early onboarding. Check your inbox shortly for setup details.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter work or academic email..."
                      className="w-full pl-4 pr-36 py-3.5 bg-zinc-900/90 border border-zinc-700/80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm text-white placeholder-zinc-500 outline-none transition-all font-sans"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1.5 px-4 py-2 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center space-x-1.5 disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Join Access</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-rose-400 pl-1 font-mono">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>

            {/* Honest Trust Signals (No fake badges or user count metrics) */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero model training on user data</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <FileSearch className="w-4 h-4 text-sky-400" />
                <span>100% Citation lineage guarantee</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Database className="w-4 h-4 text-amber-400" />
                <span>Local-first encrypted cache</span>
              </div>
            </div>

          </div>

          {/* Right Column: Controlled 3D Element */}
          <div className="lg:col-span-5">
            <HeroCanvas3D />
          </div>

        </div>

      </div>
    </section>
  );
}
