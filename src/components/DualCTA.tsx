import { BRAND } from "@/lib/content";

type Props = {
  label?: string;
  variant?: "default" | "onDark";
  align?: "center" | "start";
  className?: string;
  href?: string;
  showSubLabel?: boolean;
  /** Tighter top margin — used in the hero where above-the-fold space is at a premium. */
  tight?: boolean;
};

/**
 * Section CTA — single primary form button (yellow pill — AvaDent signature
 * accent) that scrolls to the lead form. Used at the end of every content
 * section.
 *
 * This is a form-only landing page: there is no customer business phone on the
 * page, so the CTA drives every visitor to the form without a call path. The
 * component name and public API are unchanged so all existing section calls
 * remain valid.
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
  tight = false,
}: Props) {
  const onDark = variant === "onDark";
  const justify = align === "start" ? "justify-start" : "justify-center";
  const topMargin = tight ? "mt-4 md:mt-5" : "mt-10";
  return (
    <div className={`${className}`}>
      <div
        className={`flex flex-wrap items-center ${justify} gap-3 sm:gap-4 ${topMargin}`}
      >
        <a
          href={href}
          className="inline-flex items-center justify-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-ink-dark)] px-7 py-3.5 rounded-full font-extrabold text-[15px] sm:text-base transition shadow-md shadow-black/10 tracking-wide uppercase"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {label}
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
