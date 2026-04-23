import { BRAND } from "@/lib/content";

type Props = {
  label?: string;
  variant?: "default" | "onDark";
  align?: "center" | "start";
  className?: string;
  href?: string;
  showSubLabel?: boolean;
};

/**
 * Dual CTA — primary form button (yellow pill — AvaDent signature accent) +
 * secondary phone link, side by side. Used at the end of every content section.
 *
 * AvaDent has a phone on spec (480-275-7144), so Rule #1 dual CTA applies
 * throughout. Layout: flex-row (NEVER flex-col) — Technical Hard Rule #8.
 *
 * Button shape + color matches the live "WATCH IT IN ACTION!" pill on
 * avadent.com: yellow #FFCD2A, dark near-black text, Montserrat extra-bold,
 * uppercase, pill (rounded-full).
 */
export function DualCTA({
  label = BRAND.primaryCtaLabel,
  variant = "default",
  align = "center",
  className = "",
  href = "#contact",
  showSubLabel = false,
}: Props) {
  const onDark = variant === "onDark";
  const justify = align === "start" ? "justify-start" : "justify-center";
  return (
    <div className={`${className}`}>
      <div
        className={`flex flex-wrap items-center ${justify} gap-3 sm:gap-4 mt-10`}
      >
        <a
          href={href}
          className="inline-flex items-center justify-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-ink-dark)] px-7 py-3.5 rounded-full font-extrabold text-[15px] sm:text-base transition shadow-md shadow-black/10 tracking-wide uppercase"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {label}
        </a>
        <a
          href={BRAND.phoneHref}
          className={
            onDark
              ? "inline-flex items-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-base transition"
              : "inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-50)] px-6 py-3 rounded-full font-semibold text-base transition"
          }
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
          Or call {BRAND.phone}
        </a>
      </div>
      {showSubLabel && (
        <p
          className={`text-xs ${
            onDark ? "text-white/60" : "text-[var(--color-ink-muted)]"
          } text-center mt-3`}
        >
          {BRAND.ctaSubLabel}
        </p>
      )}
    </div>
  );
}
