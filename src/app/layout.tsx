import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Relay — AI Research Workspace & Intelligence Engine',
  description: 'Turn scattered research material, documents, notes, and web captures into structured knowledge graphs and citation-anchored executive briefs.',
  keywords: ['AI research', 'knowledge management', 'synthesis engine', 'citation lineage', 'research workspace'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-relay-bg text-relay-text min-h-screen antialiased selection:bg-sky-500/20 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
