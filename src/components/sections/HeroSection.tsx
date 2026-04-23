"use client";

import { BRAND } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { FormCard } from "@/components/FormCard";

/**
 * Hero — dark navy w/ clinical lifestyle photo bg + dark wash overlay.
 * Split layout: copy LEFT, lead capture FORM RIGHT.
 *
 * ⛔ Architect Hard Rule #7 + memory/style-preferences.md 2026-04-23:
 * the form MUST be in the hero. No exceptions — even when the creative
 * direction is product-photography-forward. Every LP ships with form in
 * hero AND form in final contact section.
 *
 * Brand reference: https://avadent.com live hero — "Built for Life's Hardest
 * Hits" headline w/ Montserrat 800, yellow accent, dental-environment bg.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-bg-overlay text-white pt-40 pb-24 md:pt-44 md:pb-28 lg:pt-44 lg:pb-32 min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Top yellow accent hairline */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)]/40"
      />
      {/* Bottom fade to white so the next section blends */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        {/* LEFT — copy column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5">
            <span
              className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/95">
              {BRAND.heroEyebrow}
            </span>
          </div>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.95] font-black text-white tracking-tight">
            Built for Life&apos;s{" "}
            <span className="text-[var(--color-accent)] italic">
              Hardest Hits.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-xl font-light">
            Monolithic, precision-milled digital dentures delivered in{" "}
            <span className="font-bold text-white">2-3 appointments</span> — not
            9-10. Up to{" "}
            <span className="font-bold text-[var(--color-accent)]">
              8× stronger
            </span>
            . No pop-offs. Biohygienic by design.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85 pt-1">
            <Badge>Trusted by thousands of clinicians</Badge>
            <Badge>Monolithic one-piece design</Badge>
            <Badge>Made in the USA</Badge>
          </div>

          <DualCTA
            variant="onDark"
            align="start"
            label={BRAND.primaryCtaLabel}
          />
        </div>

        {/* RIGHT — lead capture form */}
        <div className="lg:col-span-5" id="hero-form-anchor">
          <FormCard
            variant="hero"
            heading="Get started with AvaDent"
            subheading="Tell us about your practice. An AvaDent specialist will reach out with dashboard access and a product walkthrough."
            idSuffix="hero"
          />
        </div>
      </div>
    </section>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1.5">
    <svg
      className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
    <span>{children}</span>
  </div>
);
