import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-sm text-white placeholder-zinc-500 outline-none font-sans transition-all focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
            error && "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-rose-400 font-mono pl-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
