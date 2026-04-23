import { WORKFLOW } from "@/lib/content";
import { DualCTA } from "@/components/DualCTA";
import { Reveal } from "@/components/Reveal";

/**
 * 6-step workflow — dark navy with bright yellow numerals. Matches the
 * AvaDent brand pattern of dark photo-backgrounded sections with yellow
 * accents (`hero-bg-alt` uses the real AvaDent workflow BG asset).
 */
export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative hero-bg-alt text-white py-20 md:py-28 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow eyebrow-on-dark">The AvaDent workflow</p>
          <h2
            className="text-3xl md:text-4xl lg:text-[3rem] font-extrabold text-white leading-[1.1] mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Slot AvaDent Into the{" "}
            <span className="text-[var(--color-accent)]">Workflow You Already Run.</span>
          </h2>
          <p
            className="text-base md:text-lg text-white/80 mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            Conventional records, digital scans, physical shipments — it all
            works. We meet you where you are and handle the rest.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORKFLOW.map((step, i) => (
            <Reveal key={i}>
              <div className="relative h-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-7 hover:bg-white/10 hover:border-[var(--color-accent)]/40 transition group overflow-hidden">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="step-number">{step.step}</span>
                  <h3
                    className="text-lg md:text-xl font-bold text-white tracking-tight uppercase"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-sm md:text-[15px] text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {step.body}
                </p>
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
