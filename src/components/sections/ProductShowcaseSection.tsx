import Image from "next/image";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Product showcase — real AvaDent product photography in a bento-style grid.
 * Used to be hero-right content; moved here per Anthony rule
 * (memory/style-preferences.md 2026-04-23) that the form MUST live in the
 * hero. This keeps the product-forward visuals that Meta traffic responds to,
 * one scroll below the hero.
 */
export function ProductShowcaseSection() {
  return (
    <section
      id="products"
      className="relative bg-[var(--color-surface-alt)] py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="eyebrow">Patented materials, precision-milled</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--color-primary)] leading-[1.1] mt-3 tracking-tight">
            One puck. One piece.{" "}
            <span className="text-[var(--color-accent)] bg-[var(--color-navy-deep)] px-2.5 py-0.5 rounded-md inline-block">
              Zero pop-offs.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-ink-muted)] mt-5 leading-relaxed font-light">
            Every AvaDent prosthesis is milled from a single, cross-linked,
            porosity-free puck. No bonded teeth, no glue lines, no weak points.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {/* Hero product — AvaMax Fixed Hybrid */}
          <Reveal className="md:col-span-7">
            <div className="relative h-72 md:h-full min-h-[340px] rounded-3xl overflow-hidden shadow-xl bg-white border border-[var(--color-line)] group">
              <Image
                src="/images/denture-hero.webp"
                alt="AvaMax Fixed Hybrid monolithic digital denture"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Flagship
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mt-1 leading-tight">
                  AvaMax Fixed Hybrid
                </h3>
                <p className="text-white/85 text-sm md:text-base mt-1 max-w-md font-light">
                  Titanium-reinforced, one-piece milled — for full-arch cases
                  that don&apos;t compromise on strength or fit.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Puck cross-section */}
          <Reveal className="md:col-span-5">
            <div className="relative h-72 md:h-full min-h-[340px] rounded-3xl overflow-hidden shadow-xl bg-[var(--color-navy-deep)] border border-[var(--color-navy-deep)]">
              <div className="relative h-[60%]">
                <Image
                  src="/images/puck-split.webp"
                  alt="AvaDent patented cross-linked puck cross-section"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Patented puck
                </p>
                <h3 className="text-white text-xl md:text-2xl font-extrabold mt-1 leading-tight">
                  Cross-linked. Porosity-free.
                </h3>
                <p className="text-white/80 text-sm mt-2 font-light">
                  High-pressure manufacturing produces a homogenous puck with
                  virtually zero porosity — bacteria can&apos;t colonize what
                  isn&apos;t there.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Three smaller product cards */}
          {[
            {
              src: "/images/bio-hygienic.webp",
              label: "Complete",
              title: "Bio-Hygienic Denture",
              body: "Monolithic, monomer-free, stain-resistant.",
            },
            {
              src: "/images/overdenture.webp",
              label: "Overdenture",
              title: "Implant-Retained",
              body: "Precision-fit implant overdentures, milled from one puck.",
            },
            {
              src: "/images/locator-fixed.webp",
              label: "AvaMax",
              title: "LOCATOR FIXED®",
              body: "Screw-retained hybrid prosthesis, titanium framework.",
            },
          ].map((p, i) => (
            <Reveal key={i} className="md:col-span-4">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--color-line)] hover:shadow-lg transition h-full flex flex-col">
                <div className="relative h-48 bg-[var(--color-surface-alt)]">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    {p.label}
                  </p>
                  <h4 className="text-lg font-extrabold text-[var(--color-ink)] mt-1 leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-sm text-[var(--color-ink-muted)] mt-1.5 leading-relaxed flex-1">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <DualCTA />
        </Reveal>
      </div>
    </section>
  );
}
