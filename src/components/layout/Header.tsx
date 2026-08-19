'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      role="banner"
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo & Engine Status */}
          <div className="flex items-center space-x-3">
            <a href="#" aria-label="Relay Home Page" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                <Sparkles className="w-4 h-4 text-sky-400" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                RELAY
              </span>
            </a>

            <Badge variant="emerald" className="hidden sm:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>v1.2 Engine Active</span>
            </Badge>
          </div>

          {/* Navigation Items */}
          <nav aria-label="Page Sections" className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => scrollToSection('demo')}
              className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none"
            >
              Interactive Demo
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="hover:text-white transition-colors focus-visible:text-white focus-visible:outline-none"
            >
              Architecture & Security
            </button>
          </nav>

          {/* Primary CTA */}
          <Button
            size="sm"
            variant="secondary"
            onClick={() => scrollToSection('cta')}
            aria-label="Request Early Access to Relay"
            className="font-sans min-h-[40px] px-3.5"
          >
            <span>Request Access</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-sky-400" aria-hidden="true" />
          </Button>

        </div>
      </Container>
    </header>
  );
}
