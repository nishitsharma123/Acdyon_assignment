import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'mono' | 'emerald' | 'sky' | 'amber';
}

export function Badge({ className, variant = 'mono', children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-colors";

  const variants = {
    mono: "bg-zinc-900/80 text-zinc-300 border-zinc-800",
    emerald: "bg-emerald-950/50 text-emerald-400 border-emerald-500/30",
    sky: "bg-sky-950/50 text-sky-400 border-sky-500/30",
    amber: "bg-amber-950/50 text-amber-400 border-amber-500/30",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
