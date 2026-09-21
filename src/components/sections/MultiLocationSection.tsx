import { MULTI_LOCATION } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * Multi-location operational benefits — the task-focus section.
 *
 * Positions AvaDent as a repeatable *program* for groups: standardized records,
 * centralized CAD design, stored digital files, case-level QC. Opens with the
 * operational problem (fit/turnaround/quality drift across offices) so it also
 * carries the problem→agitation beat the blueprint otherwise omits.
 *
 * Deliberately DARK navy (between the light product grid and the white pillars)
 * so the group-standardization theme reads as the signature section. Intentionally
 * image-free, editorial (narrative left, operational cards right) — every clinical
 * asset is already used elsewhere, and an operational/process theme reads stronger
 * without a product photo than with a duplicated one. Guardrail: no ROI/savings claims.
 */
export function MultiLocationSection() {
  return (
    <section
      id="multi-location"
      className="relative bg-[var(--color-navy-deep)] text-white py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)]/40"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left — narrative */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal className="space-y-5">
            <p className="eyebrow eyebrow-on-dark">Built for multi-location groups</p>
            <h2
              className="text-3xl md:text-4xl lg:text-[3rem] font-extrabold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              One Denture Standard Across{" "}
              <span className="text-[var(--color-accent)]">Every Location.</span>
            </h2>
            <p
              className="text-base md:text-lg text-white/80 leading-relaxed"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
            >
              {MULTI_LOCATION.intro}
            </p>
            <ul className="space-y-2.5 pt-1">
              {MULTI_LOCATION.proof.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-sm md:text-[15px] text-white/85"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0"
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
                  {p}
                </li>
              ))}
            </ul>
            <DualCTA variant="onDark" align="start" />
          </Reveal>
        </div>

        {/* Right — 2×2 operational-benefit grid */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
          {MULTI_LOCATION.benefits.map((b) => (
            <Reveal key={b.key}>
              <div className="h-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-7 hover:bg-white/10 hover:border-[var(--color-accent)]/40 transition">
                <span className="inline-flex w-11 h-11 rounded-xl bg-[var(--color-accent)]/15 items-center justify-center text-[var(--color-accent)]">
                  <BenefitIcon name={b.key} />
                </span>
                <h3
                  className="text-lg font-bold text-white mt-4 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm md:text-[15px] text-white/75 mt-2 leading-relaxed"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** One outline icon family (2px stroke) mapped to each operational benefit. */
function BenefitIcon({ name }: { name: string }): React.ReactElement {
  const common = {
    className: "w-6 h-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "records") {
    return (
      <svg {...common}>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    );
  }
  if (name === "design") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    );
  }
  if (name === "files") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
