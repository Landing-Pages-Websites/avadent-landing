"use client";

import Image from "next/image";
import { BRAND } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { FormCard } from "@/components/FormCard";

/**
 * Hero — split layout: headline/copy LEFT, form RIGHT.
 * Architect Rule #7 (split hero) + #8b (CTAs under headline).
 * Dark bg-grid-navy background to match AvaDent's clinical-tech feel.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-grid-navy text-white pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Decorative orange stamp — brand-accent glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full brand-stamp pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full brand-stamp opacity-70 pointer-events-none"
      />
      {/* Subtle puck silhouette accent */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-[42%] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/10 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p className="eyebrow eyebrow-on-dark">{BRAND.heroEyebrow}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] font-bold text-white tracking-tight">
            The Digital Denture Built to{" "}
            <span className="text-[var(--color-accent)]">Cut Chair Time</span>{" "}
            in Half.
          </h1>
          <p className="subhead-font text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
            {BRAND.heroSubhead}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
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
              <span>Biohygienic design</span>
            </div>
          </div>
          <p className="text-sm text-white/60 italic">{BRAND.heroTrust}</p>
          <DualCTA
            variant="onDark"
            align="start"
            label={BRAND.primaryCtaLabel}
            className=""
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

      {/* Preload one clinical image so LCP feels tight */}
      <Image
        src="/images/puck-split.webp"
        alt=""
        width={1}
        height={1}
        priority
        className="hidden"
      />
    </section>
  );
}

const Check = () => (
  <svg
    className="w-4 h-4 text-[var(--color-accent)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
