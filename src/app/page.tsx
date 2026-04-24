"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { PillarSection } from "@/components/sections/PillarSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PILLARS } from "@/lib/content";
import { useTracking } from "@/hooks/useTracking";

export default function Home() {
  // Layer 2 tracking backup (per memory/style-preferences.md 2026-04-21).
  // MegaTag is loaded server-side in layout.tsx — this is defense in depth.
  useTracking({
    siteKey: "sk_mocd2zo0_367vq5ml9al",
    pixelId: "921840557285745",
  });

  return (
    <>
      <Header />
      <main>
        {/* Anchors (ordered): #hero → #stats → #products → #chair-time →
            #no-pop-offs → #precision-fit → #biohygienic → #workflow →
            #testimonials → #faq → #contact */}
        <HeroSection />
        <StatsSection />
        <ProductShowcaseSection />
        {PILLARS.map((pillar, i) => (
          <PillarSection key={pillar.anchorId} pillar={pillar} index={i} />
        ))}
        <WorkflowSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
