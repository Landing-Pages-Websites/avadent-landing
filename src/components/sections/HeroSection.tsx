"use client";

import Image from "next/image";
import { BRAND } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";

/**
 * Hero — dark navy w/ clinical lifestyle photo bg + dark wash overlay.
 * Split layout: copy LEFT, floating real AvaDent product-photo stack RIGHT.
 *
 * Brand reference: https://avadent.com live hero — "Built for Life's Hardest
 * Hits" headline w/ Montserrat 800, yellow accent, dental-environment bg.
 *
 * Per Anthony 2026-04-23: plain navy gradient hero was too flat. This version
 * uses real AvaDent product photography as the split right side (denture
 * hero + puck cross-section + stat card), layered on top of a dental-clinic
 * lifestyle photo background.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-bg-overlay text-white pt-40 pb-24 md:pt-44 md:pb-28 lg:pt-48 lg:pb-36 min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Top accent bar (matches AvaDent navy info strip) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)]/40"
      />
      {/* Bottom fade to white so the stats section blends in */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* LEFT — copy column */}
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5">
            <span
              className="w-2 h-2 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-white/95 font-[var(--font-montserrat),sans-serif]">
              {BRAND.heroEyebrow}
            </span>
          </div>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] leading-[0.95] font-black text-white tracking-tight">
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

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/85">
            <Badge>Trusted by thousands of clinicians</Badge>
            <Badge>Monolithic one-piece design</Badge>
            <Badge>Made in the USA</Badge>
          </div>

          <DualCTA
            variant="onDark"
            align="start"
            label={BRAND.primaryCtaLabel}
          />

          <p className="text-sm text-white/55 pt-1">
            Get dashboard access + a product walkthrough in one call.
          </p>
        </div>

        {/* RIGHT — floating product photo composition */}
        <div className="lg:col-span-5 relative hidden lg:block">
          {/* Big primary product image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10 bg-white">
            <Image
              src="/images/denture-hero.webp"
              alt="AvaMax Fixed Hybrid monolithic digital denture"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            {/* Subtle dark gradient bottom for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                AvaMax Fixed Hybrid
              </p>
              <p className="text-white font-extrabold text-lg mt-1">
                One-piece milled. Zero pop-offs.
              </p>
            </div>
          </div>

          {/* Floating stat card — top-left overlap */}
          <div className="absolute -top-6 -left-8 bg-white rounded-2xl shadow-2xl shadow-black/40 p-4 pr-5 flex items-center gap-3 min-w-[180px] rotate-[-3deg]">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--color-ink-dark)]"
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
            </div>
            <div>
              <div className="text-2xl font-black text-[var(--color-primary)] leading-none">
                8×
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-muted)] mt-0.5">
                Stronger
              </div>
            </div>
          </div>

          {/* Floating puck card — bottom-right overlap */}
          <div className="absolute -bottom-8 -right-6 bg-[var(--color-navy-deep)] text-white rounded-2xl shadow-2xl shadow-black/40 p-1.5 rotate-[4deg] border border-white/10">
            <div className="relative w-40 h-28 rounded-xl overflow-hidden">
              <Image
                src="/images/puck-split.webp"
                alt="AvaDent patented cross-linked puck cross-section"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="px-2.5 py-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Patented puck
              </p>
              <p className="text-xs text-white/85 font-semibold mt-0.5">
                Cross-linked. Porosity-free.
              </p>
            </div>
          </div>
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
