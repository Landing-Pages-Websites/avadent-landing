"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Landing-page header per landing-page-architect SKILL Rule #3:
 * logo + primary form CTA button. No nav menu. This is a form-only page —
 * no customer business phone is displayed anywhere on it.
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
