/**
 * Relay Design Tokens Definition
 */

export const DESIGN_TOKENS = {
  colors: {
    bg: '#09090b',
    bgSubtle: '#0c0c0e',
    surface: '#121215',
    surfaceElevated: '#18181b',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#f4f4f5',
    textSecondary: '#a1a1aa',
    textMuted: '#71717a',
    accent: '#38bdf8',
    emerald: '#10b981',
    amber: '#f59e0b',
  },
  typography: {
    eyebrow: 'font-mono text-xs uppercase tracking-wider text-relay-text-muted',
    heroTitle: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]',
    heroSub: 'text-base sm:text-lg text-relay-text-secondary leading-relaxed max-w-2xl',
    sectionHeading: 'text-2xl sm:text-4xl font-bold tracking-tight text-white',
    bodyUI: 'text-xs sm:text-sm text-relay-text-secondary leading-normal',
  },
  layout: {
    containerMax: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    contentMax: 'max-w-3xl mx-auto',
  }
};
