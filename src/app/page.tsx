import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductDemoSandbox } from '@/components/product/ProductDemoSandbox';
import { WorkflowSteps } from '@/components/sections/WorkflowSteps';
import { NoiseToKnowledge } from '@/components/sections/NoiseToKnowledge';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { ArchitectureSecurity } from '@/components/trust/ArchitectureSecurity';
import { ConversionCTA } from '@/components/cta/ConversionCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-relay-bg text-relay-text relative overflow-x-hidden selection:bg-sky-500/20 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Section 1: Editorial Hero & 3D Knowledge Core */}
      <HeroSection />

      {/* Section 2: Primary Interactive Product Demonstration */}
      <ProductDemoSandbox />

      {/* Section 3: How Relay Works (3-Step Pipeline) */}
      <WorkflowSteps />

      {/* Section 4: Visual Storytelling (From Noise to Knowledge) */}
      <NoiseToKnowledge />

      {/* Section 5: Realistic Domain Applications & Use Cases */}
      <UseCasesSection />

      {/* Security & Provenance Architecture */}
      <ArchitectureSecurity />

      {/* Section 6: Unified Final Early Access CTA Banner */}
      <ConversionCTA />

      {/* Technical Footer */}
      <Footer />
    </main>
  );
}
