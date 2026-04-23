import Image from "next/image";
import type { Pillar } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

type Props = {
  pillar: Pillar;
  index: number;
};

/**
 * Per-service/product section per Architect Hard Rule 5b — each benefit pillar
 * gets its own <section> with unique descriptive anchor, H2, ~100-140 words of
 * body copy, its own image, and a dual CTA at the end. Alternates image side
 * based on index for visual rhythm.
 */
export function PillarSection({ pillar, index }: Props) {
  const imageLeft = index % 2 === 1; // 0-index → alternate; first pillar has image RIGHT
  const altBg = index % 2 === 1;

  return (
    <section
      id={pillar.anchorId}
      className={`relative py-20 md:py-28 ${
        altBg
          ? "bg-[var(--color-surface-alt)]"
          : "bg-[var(--color-surface)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          imageLeft ? "" : ""
        }`}
      >
        <Reveal
          className={`order-2 ${
            imageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative">
            {/* decorative square stamp */}
            <div
              aria-hidden="true"
              className={`absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-[var(--color-accent)]/15 hidden md:block ${
                imageLeft ? "" : ""
              }`}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[var(--color-primary)]/10 hidden md:block"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[var(--color-line)] bg-white aspect-[4/3]">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            {/* Pillar number medallion */}
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-lg subhead-font">
              0{index + 1}
            </div>
          </div>
        </Reveal>

        <Reveal
          className={`order-1 ${
            imageLeft ? "lg:order-2" : "lg:order-1"
          } space-y-5`}
        >
          <p className="eyebrow">{pillar.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[var(--color-primary)] leading-[1.1] tracking-tight">
            {pillar.heading}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-ink)] leading-relaxed">
            {pillar.body}
          </p>
          <ul className="space-y-2.5 pt-2">
            {pillar.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[var(--color-accent)]"
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
                </span>
                <span className="text-[15px] md:text-base text-[var(--color-ink)]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <DualCTA align="start" />
        </Reveal>
      </div>
    </section>
  );
}
