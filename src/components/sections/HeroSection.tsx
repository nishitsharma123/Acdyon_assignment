'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileSearch, Database, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ConstellationCanvas } from '@/components/three/ConstellationCanvas';

export function HeroSection() {
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
    }, 800);
  };

  return (
    <section aria-labelledby="hero-title" className="relative pt-32 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 overflow-hidden bg-editorial-grid">
      
      {/* Background Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Positioning & Conversion */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Category Eyebrow */}
            <div className="inline-flex">
              <Badge variant="mono" className="bg-zinc-900/90 border-zinc-800 text-zinc-300 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 mr-2" aria-hidden="true" />
                <span>AI Research Workspace & Synthesis Engine</span>
              </Badge>
            </div>

            {/* Main Dominant Headline */}
            <h1 id="hero-title" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Turn fragmented research into <span className="text-gradient-accent">structured intelligence</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-relay-text-secondary max-w-xl leading-relaxed">
              Relay ingests PDFs, notes, web captures, and datasets—automatically synthesizing cross-referenced knowledge graphs and publication-ready briefs.
            </p>

            {/* Email Access Form */}
            <div className="pt-1 max-w-md">
              {status === 'success' ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-start space-x-3" role="status" aria-live="polite">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-emerald-300">Early Access Request Queued</h2>
                    <p className="text-xs text-emerald-400/90 mt-1 font-sans">
                      We have registered <span className="font-mono font-medium text-emerald-200">{email}</span>. You will receive private onboarding instructions shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5" aria-label="Early access invitation form">
                  <div className="relative flex items-center">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter work or academic email..."
                      aria-label="Work or academic email"
                      error={status === 'error' ? errorMessage : undefined}
                      className="pr-36 py-3.5 text-sm min-h-[48px] bg-zinc-900/90 border-zinc-700/80 focus:border-sky-500"
                    />
                    <Button
                      type="submit"
                      isLoading={status === 'loading'}
                      size="sm"
                      variant="primary"
                      aria-label="Join early access"
                      className="absolute right-1.5 font-semibold min-h-[40px] px-4 shadow-md"
                    >
                      <span>Join Access</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-zinc-950" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Verifiable Architectural Signals */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Zero model training on user data</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <FileSearch className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>100% Citation lineage guarantee</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Database className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>Local-first encrypted cache</span>
              </div>
            </div>

          </div>

          {/* Right Column: Controlled 3D Knowledge Core */}
          <div className="lg:col-span-5">
            <ConstellationCanvas />
          </div>

        </div>
      </Container>
    </section>
  );
}
