import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ className, size = 'default', children, ...props }: ContainerProps) {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-8xl',
  };

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
