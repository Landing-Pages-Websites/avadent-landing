"use client";

import { BRAND } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { FormCard } from "@/components/FormCard";

/**
 * Hero — full-bleed dental photo with dark wash (matches real avadent.com
 * "Built for Life's Hardest Hits" pattern). Split layout: massive Montserrat
 * 800 headline LEFT, lead capture form RIGHT.
 *
 * Architect Rule #7 (split hero) + #8b (CTAs under headline).
 * Brand reference: https://avadent.com — dark hero + yellow accent pill.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-bg-overlay text-white pt-40 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Bottom fade to white so next section blends cleanly */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-1.5">
            <span
              className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            <span
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/90"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {BRAND.heroEyebrow}
            </span>
          </div>

          <h1
            className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] leading-[0.98] font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Built for Life&apos;s{" "}
            <span className="text-[var(--color-accent)]">Hardest Hits.</span>
          </h1>

          <p
            className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            {BRAND.heroSubhead}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80 pt-1">
            <div className="flex items-center gap-2">
              <Check />
              <span>2-3 appointments per case</span>
            </div>
            <div className="flex items-center gap-2">
              <Check />
              <span>No pop-offs, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check />
              <span>Biohygienic by design</span>
            </div>
          </div>

          <p className="text-sm text-white/60 italic">{BRAND.heroTrust}</p>

          <DualCTA
            variant="onDark"
            align="start"
            label={BRAND.primaryCtaLabel}
          />
        </div>

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

const Check = () => (
  <svg
    className="w-4 h-4 text-[var(--color-accent)]"
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
);
