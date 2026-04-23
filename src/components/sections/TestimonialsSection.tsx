import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Testimonials — clean white section with navy H2, four real doctor cards
 * in a 2x2 grid (all now have real headshots from avadent.com).
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
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i}>
              <div
                className={`h-full rounded-2xl shadow-sm border overflow-hidden flex ${
                  i === 1
                    ? "bg-[var(--color-navy-deep)] border-[var(--color-navy-deep)] text-white"
                    : "bg-[var(--color-surface-alt)] border-[var(--color-line)]"
                }`}
              >
                {t.image && (
                  <div className="relative w-28 sm:w-36 md:w-40 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                      sizes="160px"
                    />
                  </div>
                )}
                <div className="flex-1 p-5 md:p-6 flex flex-col">
                  <Quote
                    accent={i === 1 ? "yellow-on-dark" : "primary"}
                  />
                  <p
                    className={`text-[15px] leading-relaxed mt-3 flex-1 ${
                      i === 1 ? "text-white/90" : "text-[var(--color-ink)]"
                    }`}
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {t.quote}
                  </p>
                  <div
                    className={`mt-5 pt-4 border-t ${
                      i === 1 ? "border-white/15" : "border-[var(--color-line)]"
                    }`}
                  >
                    <div
                      className={`font-bold text-sm md:text-[15px] ${
                        i === 1 ? "text-white" : "text-[var(--color-primary)]"
                      }`}
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${
                        i === 1 ? "text-white/70" : "text-[var(--color-ink-muted)]"
                      }`}
                    >
                      {t.credentials}
                    </div>
                  </div>
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

const Quote = ({
  accent = "primary",
}: {
  accent?: "primary" | "yellow-on-dark";
}) => (
  <svg
    className={`w-8 h-8 ${
      accent === "yellow-on-dark"
        ? "text-[var(--color-accent)]"
        : "text-[var(--color-accent)]"
    }`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.5A2.67 2.67 0 0 1 7.17 8.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 0 1 2.67-2.67V6z" />
  </svg>
);
