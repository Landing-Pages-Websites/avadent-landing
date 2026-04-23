"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Floating sticky CTA — form CTA ONLY per Technical Hard Rule #8.
 * Yellow pill matching the AvaDent brand accent.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      const contactEl = document.getElementById("contact");
      const inContact =
        contactEl != null &&
        contactEl.getBoundingClientRect().top < window.innerHeight * 0.5;
      setVisible(window.scrollY > threshold && !inContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-ink-dark)] px-6 py-3.5 rounded-full font-extrabold shadow-xl shadow-black/25 transition uppercase tracking-wide text-sm"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        {BRAND.primaryCtaShort}
      </a>
    </div>
  );
}
