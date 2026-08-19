import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ className, elevated = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all p-6",
        elevated
          ? "bg-zinc-900/80 border-zinc-700/80 shadow-2xl backdrop-blur-xl"
          : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
