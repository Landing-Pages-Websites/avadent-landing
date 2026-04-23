import { STATS } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Stats bar — 4 proof-point stats with bold yellow numerals (matches the
 * AvaDent accent). Floating card overlaps the hero bottom.
 */
export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative bg-white pt-0 pb-20 md:pb-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 relative z-20">
        <Reveal>
          <div className="bg-[var(--color-navy-deep)] rounded-2xl shadow-2xl shadow-black/20 border border-white/10 px-6 md:px-10 py-10 md:py-12 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)]"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">
              {STATS.map((s, i) => (
                <div key={i} className="relative">
                  <div
                    className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[var(--color-accent)] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[13px] md:text-sm text-white/80 mt-3 leading-snug px-2"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {s.label}
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-10 bg-white/15" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 md:mt-16 text-center">
        <Reveal>
          <p className="eyebrow mb-3">Why dental professionals switch</p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--color-primary)] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Digital dentistry delivered by the team that invented the category.
          </h2>
          <p
            className="text-base md:text-lg text-[var(--color-ink-muted)] mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            AvaDent has manufactured more monolithic digital dentures than any
            other lab in the world. Our patented cross-link puck, AI-assisted
            design software, and precision milling produce a prosthesis that
            seats on the first try — and doesn&apos;t come back for adjustments.
          </p>
          <DualCTA />
        </Reveal>
      </div>
    </section>
  );
}
