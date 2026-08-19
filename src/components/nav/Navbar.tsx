'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                <Sparkles className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                RELAY
              </span>
            </a>

            <div className="hidden sm:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>v1.2 Engine Active</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => scrollToSection('demo')}
              className="hover:text-white transition-colors duration-150"
            >
              Interactive Demo
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="hover:text-white transition-colors duration-150"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="hover:text-white transition-colors duration-150"
            >
              Architecture & Security
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('cta')}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-sky-500/50 rounded-lg transition-all duration-200 shadow-sm group overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Request Early Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
