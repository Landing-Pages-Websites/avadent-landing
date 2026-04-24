"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Landing-page header per landing-page-architect SKILL Rule #3:
 * logo + phone button + CTA button. No nav menu.
 *
 * Dark navy header (matches avadent.com) — required because AvaDent only
 * publishes a WHITE logo. A white header would make the logo invisible.
 * If you ever switch to a white header, use a dark-version logo (not
 * `logo-color.png` which is white-on-transparent). See lp-mistakes.md
 * (2026-04-24 invisible-logo incident).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40">

      {/* Main dark navy header — white logo (only variant AvaDent ships) is clearly visible */}
      <div
        className={`transition-colors duration-200 ${
          scrolled
            ? "bg-[var(--color-navy-deep)]/95 backdrop-blur border-b border-white/10 shadow-lg"
            : "bg-[var(--color-navy-deep)]/90 backdrop-blur border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link
            href="#hero"
            className="flex items-center gap-2 group"
            aria-label={`${BRAND.name} home`}
          >
            <Image
              src="/images/logo-color.png"
              alt="AvaDent Digital Dental Solutions"
              width={260}
              height={72}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={BRAND.phoneHref}
              className="hidden md:inline-flex items-center gap-2 border-2 border-white/60 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] px-4 py-2 rounded-lg font-semibold text-sm transition"
              aria-label={`Call ${BRAND.phone}`}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {BRAND.phone}
            </a>
            <a
              href="#contact"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-ink-dark)] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-extrabold text-sm sm:text-[15px] transition shadow-sm tracking-wide uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {BRAND.primaryCtaShort}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
