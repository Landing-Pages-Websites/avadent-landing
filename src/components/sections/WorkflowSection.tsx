import { WORKFLOW } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * 6-step workflow — bento-style grid with numbered cards on dark background.
 * Mirrors avadent.com's "How It's Done" section but modernized with depth.
 */
export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative bg-grid-navy text-white py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-10 right-10 w-80 h-80 rounded-full brand-stamp opacity-60 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow eyebrow-on-dark">The AvaDent workflow</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3 tracking-tight">
            Slot AvaDent Into the Workflow You Already Run.
          </h2>
          <p className="subhead-font text-base md:text-lg text-white/75 mt-4 leading-relaxed">
            Conventional records, digital scans, physical shipments — it all
            works. We meet you where you are and handle the rest.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORKFLOW.map((step, i) => (
            <Reveal key={i}>
              <div className="relative h-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-7 hover:bg-white/10 hover:border-[var(--color-accent)]/30 transition group">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] subhead-font leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-white/75 leading-relaxed">
                  {step.body}
                </p>
                {/* subtle corner accent on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <DualCTA variant="onDark" />
        </Reveal>
      </div>
    </section>
  );
}
