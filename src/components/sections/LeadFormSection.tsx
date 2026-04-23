import { FormCard } from "@/components/FormCard";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

/**
 * Primary conversion form — sits right after the stats bar. Keeps the lead
 * capture above-the-fold-ish for users who scroll past the hero product
 * imagery. Uses a clean white surface with a left copy column + right form.
 */
export function LeadFormSection() {
  return (
    <section
      id="get-started"
      className="relative bg-white py-20 md:py-24 border-t border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <Reveal className="lg:col-span-6 space-y-5">
          <p className="eyebrow">Get started</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-[var(--color-primary)] leading-[1.05] tracking-tight">
            Tell us about your practice —{" "}
            <span className="text-[var(--color-accent)] bg-[var(--color-primary)] px-2.5 py-0.5 rounded-md inline-block">
              we&apos;ll do the rest.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-ink-muted)] leading-relaxed font-light">
            Takes under a minute. An AvaDent specialist will reach out with
            dashboard access, a product walkthrough, and answer any workflow
            questions. No obligation, no pressure.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "Dashboard access in minutes, not days",
              "Walkthrough tailored to your practice type",
              "Your first case placed on your schedule",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-[var(--color-ink-dark)]"
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
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <p className="text-sm text-[var(--color-ink-muted)]">
              Prefer to talk?{" "}
              <a
                href={BRAND.phoneHref}
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
              >
                Call {BRAND.phone}
              </a>
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <FormCard
            variant="card"
            heading="Get started with AvaDent"
            subheading="We'll reach out to walk you through dashboard access and your first case."
            idSuffix="main"
          />
        </div>
      </div>
    </section>
  );
}
