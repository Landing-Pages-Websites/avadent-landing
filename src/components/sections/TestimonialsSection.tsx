import { TESTIMONIALS } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Testimonials — clean white section with navy H2. Four real doctor
 * quotes from avadent.com in a 2×2 grid. NO headshots — per Anthony
 * 2026-04-24, we lead with the words and credentials, not portraits.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">What doctors say</p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--color-primary)] leading-[1.1] mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Practices That Switched Don&apos;t Look Back.
          </h2>
          <p
            className="text-base md:text-lg text-[var(--color-ink-muted)] mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            Unedited words from prosthodontists and GPs who have delivered
            thousands of AvaDent cases.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => {
            const onDark = i === 1;
            return (
              <Reveal key={i}>
                <div
                  className={`h-full rounded-2xl shadow-sm border overflow-hidden p-6 md:p-8 flex flex-col ${
                    onDark
                      ? "bg-[var(--color-navy-deep)] border-[var(--color-navy-deep)] text-white"
                      : "bg-[var(--color-surface-alt)] border-[var(--color-line)]"
                  }`}
                >
                  <Quote onDark={onDark} />
                  <p
                    className={`text-lg md:text-xl leading-relaxed mt-5 flex-1 ${
                      onDark ? "text-white/95" : "text-[var(--color-ink)]"
                    }`}
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    className={`mt-6 pt-5 border-t ${
                      onDark ? "border-white/15" : "border-[var(--color-line)]"
                    }`}
                  >
                    <div
                      className={`font-bold text-base ${
                        onDark ? "text-white" : "text-[var(--color-primary)]"
                      }`}
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs mt-1 uppercase tracking-wider ${
                        onDark ? "text-[var(--color-accent)]" : "text-[var(--color-ink-muted)]"
                      }`}
                    >
                      {t.credentials}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <DualCTA />
        </Reveal>
      </div>
    </section>
  );
}

const Quote = ({ onDark = false }: { onDark?: boolean }) => (
  <svg
    className={`w-10 h-10 flex-shrink-0 ${
      onDark ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"
    }`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.5A2.67 2.67 0 0 1 7.17 8.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 0 1 2.67-2.67V6z" />
  </svg>
);
