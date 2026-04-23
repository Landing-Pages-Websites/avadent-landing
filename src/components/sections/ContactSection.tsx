import { BRAND } from "@/lib/content";
import { FormCard } from "@/components/FormCard";
import { Reveal } from "@/components/Reveal";

/**
 * Final conversion section — lead form + contact info on dark navy background.
 * Matches the dark hero pattern for visual bookending.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative hero-bg-overlay text-white py-20 md:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7 space-y-6">
          <p className="eyebrow eyebrow-on-dark">Start today</p>
          <h2
            className="text-3xl md:text-4xl lg:text-[3rem] font-extrabold text-white leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Ready to Cut Your Denture Cases Down to{" "}
            <span className="text-[var(--color-accent)]">2-3 Appointments?</span>
          </h2>
          <p
            className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            Tell us about your practice. An AvaDent specialist will set you up
            with dashboard access, a product walkthrough, and answer any
            workflow questions — so you can place your first case on your terms.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-5">
              <p className="eyebrow eyebrow-on-dark text-[11px]">
                Prefer to talk?
              </p>
              <a
                href={BRAND.phoneHref}
                className="text-2xl font-extrabold text-white hover:text-[var(--color-accent)] transition mt-2 block"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {BRAND.phone}
              </a>
              <p className="text-sm text-white/60 mt-1">
                AvaDent customer service
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-5">
              <p className="eyebrow eyebrow-on-dark text-[11px]">Email us</p>
              <p
                className="text-base font-bold text-white mt-2 break-words"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {BRAND.email}
              </p>
              <p className="text-sm text-white/60 mt-1">
                Replies within one business day
              </p>
            </div>
          </div>

          <p className="text-sm text-white/60 pt-2">
            Patented biohygienic, monolithic prostheses — made in the United States.
          </p>
        </Reveal>

        <div className="lg:col-span-5">
          <FormCard
            variant="hero"
            heading="Get started with AvaDent"
            subheading="Takes under a minute. An AvaDent specialist will reach out to schedule onboarding."
            idSuffix="contact"
          />
        </div>
      </div>
    </section>
  );
}
