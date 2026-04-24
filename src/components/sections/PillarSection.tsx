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
 * body copy, its own image, and a dual CTA at the end.
 *
 * Styled to match AvaDent brand: Montserrat 700 H2s in navy (#1E3D8E), Lato
 * body in muted slate, yellow numeral medallion as accent.
 */
export function PillarSection({ pillar, index }: Props) {
  const imageLeft = index % 2 === 1;
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
        className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <Reveal
          className={`order-2 ${
            imageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[var(--color-accent)]/15 hidden md:block"
            />
            <div
              className={`relative overflow-hidden rounded-2xl shadow-xl border border-[var(--color-line)] aspect-[5/4] ${
                pillar.imageFit === "contain"
                  ? "bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)]"
                  : "bg-white"
              }`}
            >
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className={`${pillar.imageFit === "contain" ? "object-contain p-6 md:p-10" : "object-cover"}`}
                sizes="(min-width: 1024px) 560px, 100vw"
                quality={90}
              />
            </div>
            {/* Pillar number medallion — yellow on navy */}
            <div
              className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[var(--color-navy-deep)] text-[var(--color-accent)] flex items-center justify-center font-extrabold text-lg shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
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
          <h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[var(--color-primary)] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {pillar.heading}
          </h2>
          <p
            className="text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
          >
            {pillar.body}
          </p>
          <ul className="space-y-2.5 pt-2">
            {pillar.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[var(--color-ink-dark)]"
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
                <span
                  className="text-[15px] md:text-base text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
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
