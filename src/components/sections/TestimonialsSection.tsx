import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Testimonials — bento layout mixing quote cards with portrait cards.
 * Real doctors from avadent.com. Two with real headshots, two quote-only.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-[var(--color-surface-alt)] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">What doctors say</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight mt-3 tracking-tight">
            Practices That Switched Don&apos;t Look Back.
          </h2>
          <p className="subhead-font text-base md:text-lg text-[var(--color-ink-muted)] mt-4 leading-relaxed">
            Unedited words from prosthodontists and GPs who have delivered
            thousands of AvaDent cases.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 md:gap-6">
          {/* First testimonial — featured portrait card (spans 2/6) */}
          <Reveal className="lg:col-span-2">
            <div className="h-full bg-white rounded-2xl border border-[var(--color-line)] shadow-sm overflow-hidden flex flex-col">
              {TESTIMONIALS[0].image && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={TESTIMONIALS[0].image}
                    alt={TESTIMONIALS[0].name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <Quote />
                <p className="text-[15px] text-[var(--color-ink)] leading-relaxed mt-3 flex-1">
                  {TESTIMONIALS[0].quote}
                </p>
                <div className="mt-5 pt-4 border-t border-[var(--color-line)]">
                  <div className="font-semibold text-[var(--color-primary)]">
                    {TESTIMONIALS[0].name}
                  </div>
                  <div className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                    {TESTIMONIALS[0].credentials}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Second testimonial — featured portrait card (spans 2/6) */}
          <Reveal className="lg:col-span-2">
            <div className="h-full bg-[var(--color-primary)] text-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              {TESTIMONIALS[1].image && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={TESTIMONIALS[1].image}
                    alt={TESTIMONIALS[1].name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <Quote onDark />
                <p className="text-[15px] text-white/90 leading-relaxed mt-3 flex-1">
                  {TESTIMONIALS[1].quote}
                </p>
                <div className="mt-5 pt-4 border-t border-white/15">
                  <div className="font-semibold text-white">
                    {TESTIMONIALS[1].name}
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">
                    {TESTIMONIALS[1].credentials}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Third + fourth — stacked quote cards (spans 2/6) */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-5 md:gap-6">
            {TESTIMONIALS.slice(2).map((t, i) => (
              <Reveal key={i}>
                <div className="h-full bg-white rounded-2xl border border-[var(--color-line)] shadow-sm p-6 flex flex-col">
                  <Quote />
                  <p className="text-[15px] text-[var(--color-ink)] leading-relaxed mt-3 flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--color-line)]">
                    <div className="font-semibold text-[var(--color-primary)] text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--color-ink-muted)] mt-0.5">
                      {t.credentials}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
    className={`w-8 h-8 ${
      onDark ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"
    }`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.5A2.67 2.67 0 0 1 7.17 8.5V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 0 1 2.67-2.67V6z" />
  </svg>
);
