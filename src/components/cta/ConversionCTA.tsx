'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export function ConversionCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid work or institutional email address.');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#10b981', '#ffffff']
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-20 sm:py-24 relative bg-zinc-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container size="narrow">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card elevated className="p-8 sm:p-14 text-center space-y-8 bg-zinc-900/90 border-zinc-700/80 shadow-2xl relative overflow-hidden">
            
            <div className="inline-flex">
              <Badge variant="sky">
                <Sparkles className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                <span>Cohort Access Request</span>
              </Badge>
            </div>

            <div className="max-w-xl mx-auto space-y-4">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Bring clarity to your next research project.
              </h2>
              <p className="text-sm sm:text-base text-relay-text-secondary">
                Request early access to test Relay’s local-first ingestion and citation-anchored synthesis engine with your team.
              </p>
            </div>

            {/* Email Form */}
            <div className="max-w-md mx-auto">
              {status === 'success' ? (
                <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-left space-y-2" role="status" aria-live="polite">
                  <div className="flex items-center space-x-2 text-emerald-300 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    <span>Early Access Reserved</span>
                  </div>
                  <p className="text-xs text-emerald-400/90 leading-relaxed font-sans">
                    Thank you! We have queued <strong className="font-mono">{email}</strong>. Our team will send your private workspace invitation shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" aria-label="Final access request form">
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
                      className="pr-36 py-4 min-h-[48px]"
                    />
                    <Button
                      type="submit"
                      isLoading={status === 'loading'}
                      size="sm"
                      variant="primary"
                      aria-label="Submit early access form"
                      className="absolute right-1.5 font-semibold min-h-[40px] px-4"
                    >
                      <span>Get Access</span>
                      <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-2 text-xs font-mono text-zinc-500 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Zero model training on user data</span>
              </span>
              <span>•</span>
              <span>Deterministic line citation map</span>
            </div>

          </Card>
        </motion.div>

      </Container>
    </section>
  );
}
