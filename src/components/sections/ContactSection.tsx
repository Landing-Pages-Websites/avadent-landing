import Image from "next/image";
import { BRAND } from "@/lib/content";
import { FormCard } from "@/components/FormCard";
import { Reveal } from "@/components/Reveal";

/**
 * Final conversion section — lead form + proof imagery + phone CTA.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-grid-navy text-white py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full brand-stamp pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7 space-y-6">
          <p className="eyebrow eyebrow-on-dark">Start today</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Ready to Cut Your Denture Cases Down to{" "}
            <span className="text-[var(--color-accent)]">2-3 Appointments?</span>
          </h2>
          <p className="subhead-font text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
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
                className="text-2xl font-bold text-white hover:text-[var(--color-accent)] transition mt-2 block"
              >
                {BRAND.phone}
              </a>
              <p className="text-sm text-white/60 mt-1">
                AvaDent customer service
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-5">
              <p className="eyebrow eyebrow-on-dark text-[11px]">Email us</p>
              <p className="text-base font-semibold text-white mt-2 break-words">
                {BRAND.email}
              </p>
              <p className="text-sm text-white/60 mt-1">
                Replies within one business day
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 text-sm text-white/60">
            <Image
              src="/images/bio-hygienic.webp"
              alt=""
              width={56}
              height={38}
              className="rounded opacity-80"
            />
            <span>
              Patented biohygienic, monolithic prostheses — made in the USA.
            </span>
          </div>
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
