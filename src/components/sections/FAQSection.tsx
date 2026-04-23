"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * FAQ — accordion, all collapsed by default (Architect Rule #11).
 */
export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <p className="eyebrow">Answers for your practice</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="subhead-font text-base md:text-lg text-[var(--color-ink-muted)] mt-4 leading-relaxed">
            The questions we hear most from dentists, labs, and surgeons before
            they place their first order.
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition ${
                    open
                      ? "border-[var(--color-primary)] bg-white shadow-md"
                      : "border-[var(--color-line)] bg-white hover:border-[var(--color-primary-200)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-[var(--color-primary)] text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-[var(--color-line)] flex items-center justify-center transition ${
                        open
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)]"
                          : ""
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          open ? "text-white rotate-180" : "text-[var(--color-primary)]"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[15px] md:text-base text-[var(--color-ink)] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <DualCTA />
        </Reveal>
      </div>
    </section>
  );
}
