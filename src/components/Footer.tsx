import { BRAND } from "@/lib/content";

/**
 * Legal-only footer per landing-page-architect Rule #4.
 * No nav, no social, no outbound links.
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-dark)] text-[var(--color-ink-on-dark)] py-10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
        </p>
        <p className="text-xs text-white/55">
          Patented monolithic digital dentures, overdentures &amp; hybrid
          restorations — made in the United States.
        </p>
      </div>
    </footer>
  );
}
