/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        relay: {
          bg: "#09090b",
          "bg-subtle": "#0c0c0e",
          surface: "#121215",
          "surface-elevated": "#18181b",
          "surface-card": "#151518",
          border: "rgba(255, 255, 255, 0.08)",
          "border-subtle": "rgba(255, 255, 255, 0.04)",
          "border-hover": "rgba(255, 255, 255, 0.16)",
          "border-focus": "#38bdf8",
          text: "#f4f4f5",
          "text-secondary": "#a1a1aa",
          "text-muted": "#71717a",
          accent: "#38bdf8",
          "accent-hover": "#0284c7",
          emerald: "#10b981",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'hero-title': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'hero-sub': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.011em' }],
        'section-heading': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'body-ui': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.006em' }],
      },
      boxShadow: {
        'fine': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'surface': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      maxWidth: {
        'container': '1280px',
        'content': '768px',
      }
    },
  },
  plugins: [],
}
