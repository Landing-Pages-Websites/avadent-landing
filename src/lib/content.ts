// AvaDent Digital Dental Solutions — LP source of truth for all page content.
// Atlas task: 84f0fa5d-81b7-49d4-9d31-848e18823287
// Customer: AvaDent Digital Dental Solutions (65716aff-106d-4048-92b6-14a712525029)
// NEVER change fields/copy without re-reading the task spec first.

export type Pillar = {
  anchorId: string;
  label: string;
  heading: string;
  body: string; // 90-140 words
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain"; // contain = product shot on neutral bg, cover = lifestyle
  bullets: string[]; // 3 proof points
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  credentials: string;
  quote: string;
  image?: string;
};

export const BRAND = {
  name: "AvaDent",
  fullName: "AvaDent Digital Dental Solutions",
  tagline: "Digital dentures that save chair time and never pop off.",
  heroEyebrow: "For Dentists, Surgeons & Dental Labs",
  heroHeadline: "Built for Life's Hardest Hits.",
  heroSubhead:
    "Engineered for strength. Built for real life. AvaDent's monolithic, precision-milled dentures deliver a seated, adjusted prosthesis in 2-3 appointments — not 9-10. Up to 8× stronger. No pop-offs. Biohygienic by design.",
  heroTrust: "Trusted by leading clinicians, surgeons, and dental labs worldwide.",
  phone: "(480) 275-7144",
  phoneDigits: "4802757144",
  phoneHref: "tel:+14802757144",
  email: "customerserviceus@avadent.com",
  primaryCtaLabel: "Get Started with AvaDent",
  primaryCtaShort: "Get Started",
  phoneCtaLabel: "Or call (480) 275-7144",
  ctaSubLabel: "Free consultation · Same-day response",
} as const;

// ────────────────────────────────────────────────────────────────────
// Form field options — EXACT from Atlas task spec
// ────────────────────────────────────────────────────────────────────

export const BUSINESS_TYPES = [
  "Dental Lab",
  "General Dentist",
  "Implantologist",
  "Oral Surgery",
  "Periodontist",
  "Prosthodontist",
  "None of the above",
] as const;

export const VOLUME_OPTIONS = [
  "0",
  "1 to 2",
  "3 to 5",
  "6 to 10",
  "10 or more",
] as const;

// ────────────────────────────────────────────────────────────────────
// Stats bar
// ────────────────────────────────────────────────────────────────────

export const STATS: { value: string; label: string }[] = [
  { value: "2-3", label: "Appointments to deliver a finished denture" },
  { value: "8×", label: "Stronger than conventional acrylic dentures" },
  { value: "Zero", label: "Pop-offs — monolithic, one-piece construction" },
  { value: "100%", label: "Digital file stored for instant replacement" },
];

// ────────────────────────────────────────────────────────────────────
// The four pillars (per task content_requests)
// ────────────────────────────────────────────────────────────────────

export const PILLARS: Pillar[] = [
  {
    anchorId: "chair-time",
    label: "Chair Time",
    heading: "Save 6-7 Appointments Per Case",
    body:
      "Traditional dentures take 9-10 appointments — records, try-ins, adjustments, remakes. AvaDent's digital workflow compresses the entire process into just 2-3 seated appointments, because your records are digitized, the design is CAD-verified against the original file, and our Adaptive Occlusion delivers a predictable fit the first time. Practices routinely tell us they've reclaimed full days per week for higher-value procedures, while their patients get a finished prosthesis in a fraction of the time. Less chair time. Fewer remakes. More room on your schedule for the cases that move your practice forward.",
    image: "/images/wf-woman-tablet.webp",
    imageAlt:
      "Dental professional reviewing digital denture workflow on a tablet",
    imageFit: "cover",
    bullets: [
      "Records → design → delivery in 2-3 visits",
      "Adaptive Occlusion eliminates most adjustments",
      "Every case is scanned and QC'd against its design file",
    ],
  },
  {
    anchorId: "no-pop-offs",
    label: "No Pop-Offs",
    heading: "Monolithic One-Piece Design — 8× Stronger",
    body:
      "Conventional and bonded dentures fail at the teeth-to-base junction. AvaDent's patented monolithic design is milled from a single cross-linked puck — no bonded teeth, no glue lines, no gingival seam. That means up to 8× more fracture resistance, no pop-offs (even on overdenture and hybrid cases), and seamless teeth-to-denture transitions that feel natural to the patient. Whether you're treating Class 1, 2, or 3 arches or delivering a LOCATOR FIXED® or AvaMax Fixed Hybrid case, the prosthesis behaves as one continuous unit — because it is.",
    image: "/images/puck-split.webp",
    imageAlt:
      "Cross-section of AvaDent's monolithic denture puck showing one-piece construction",
    imageFit: "cover",
    bullets: [
      "No bonded teeth, no pop-offs — ever",
      "Up to 8× more fracture resistance",
      "Works on Class 1, 2, 3, overdentures, and hybrids",
    ],
  },
  {
    anchorId: "precision-fit",
    label: "Precision Fit",
    heading: "Precision-Milled. No Post-Processing Distortion.",
    body:
      "Conventional acrylic shrinks during processing. 3D printed dentures warp during curing. AvaDent's monolithic prosthesis is milled under precision CNC control from a pre-formed, homogenous puck — so what the CAD designs is what the patient receives. Every finished case is scanned and measured against the original design file before it ships, so fit is verified before it reaches your chair. The result: a prosthesis that seats on the first try, near-zero adjustments, and a predictable clinical outcome case after case. Doctors report eliminating adjustment appointments altogether once they standardize on AvaDent.",
    image: "/images/puck-superior.webp",
    imageAlt:
      "AvaDent's patented puck manufacturing process for precision milling",
    imageFit: "cover",
    bullets: [
      "CNC-milled from one-piece homogenous puck",
      "Zero post-processing distortion or shrinkage",
      "100% of cases scanned vs. design file before ship",
    ],
  },
  {
    anchorId: "biohygienic",
    label: "Biohygienic",
    heading: "Bacteria & Stain Resistant by Design",
    body:
      "AvaDent's patented puck manufacturing process uses high-pressure cross-linking to produce a puck that is virtually porosity-free. Without the micropores found in conventional acrylic, bacteria and saliva cannot colonize the surface — which dramatically reduces denture breath, staining, and denture-related inflammation. The process is also virtually monomer-free, improving long-term patient safety. It's the difference between a prosthesis that looks and smells brand new after twelve months and one that patients stop wearing. For your hygiene patients, for your immediate dentures, for your hybrid cases — biohygienic construction is a clinical advantage you can feel.",
    image: "/images/bio-hygienic-hires.webp",
    imageAlt:
      "AvaDent bio-hygienic digital denture — porosity-free and stain-resistant",
    imageFit: "contain",
    bullets: [
      "Virtually porosity-free puck — no bacterial ingress",
      "Reduced denture breath, staining, and inflammation",
      "Virtually monomer-free for long-term patient safety",
    ],
  },
];

// ────────────────────────────────────────────────────────────────────
// Flexible workflow
// ────────────────────────────────────────────────────────────────────

export const WORKFLOW: {
  step: string;
  title: string;
  body: string;
}[] = [
  {
    step: "01",
    title: "Make Records",
    body: "Use your conventional or digital technique. We just need accurate records — physical or scanned.",
  },
  {
    step: "02",
    title: "Digitize Records",
    body: "Scan and upload your records, or ship them to us and we'll scan them for you. Your call.",
  },
  {
    step: "03",
    title: "Submit Digital Rx",
    body: "Log in to the AvaDent dashboard, select products, and submit your clinical records for design.",
  },
  {
    step: "04",
    title: "Design",
    body: "Our CAD team designs the case using the most advanced removable software in dentistry — or you can.",
  },
  {
    step: "05",
    title: "Production",
    body: "We mill every final prosthesis from our patented cross-linked pucks. Try-ins can be milled or printed.",
  },
  {
    step: "06",
    title: "Finishing & QC",
    body: "Every case is scanned and measured against the design file before it ships, so fit is verified.",
  },
];

// ────────────────────────────────────────────────────────────────────
// Testimonials — real doctors from AvaDent.com
// ────────────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ronni Schnell, DMD, MAGD",
    credentials: "Master Academy of General Dentistry",
    quote:
      "When I started using AvaDent I compared traditionally designed dentures with AvaDent dentures on the same patients. They're all now wearing AvaDent dentures because of the comfort and fit.",
    image: "/images/doc-schnell.jpg",
  },
  {
    name: "Steve Wagner, DDS, FACP",
    credentials: "Fellow, American College of Prosthodontists",
    quote:
      "I've been making dentures for over 50 years — and the three-appointment denture has changed the way I practice. They're highly esthetic, fracture resistant, and functional. I've eliminated my adjustment appointments altogether.",
    image: "/images/doc-wagner.jpg",
  },
  {
    name: "Ingeborg J. De Kok, DDS, MS",
    credentials: "Prosthodontics",
    quote:
      "I love AvaDent's monolithic denture because it's stronger, less porous, and fits with very few adjustments. This reduces my chair time and increases my patient satisfaction. What more could you ask for?",
    image: "/images/doc-dekok.jpg",
  },
  {
    name: "Wendy Auclair Clark, DDS, MS",
    credentials: "Prosthodontics",
    quote:
      "AvaDent's monolithic design delivers on the promise of superior strength. We don't get pop-offs or fractures, even with our over-denture cases. My patients love the precision fit of a digitally designed denture.",
    image: "/images/doc-clark.jpg",
  },
];

// ────────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────────

export const FAQS: FAQ[] = [
  {
    question: "How is AvaDent different from conventional dentures or 3D printed dentures?",
    answer:
      "AvaDent is milled from a single, patented cross-linked puck — a monolithic design with no bonded teeth. Conventional dentures shrink during processing and are prone to pop-offs at the tooth-base junction. 3D printed dentures distort during curing and can't match milled precision. AvaDent is up to 8x stronger, virtually porosity-free, and fits without post-processing distortion.",
  },
  {
    question: "Do I have to change my clinical workflow?",
    answer:
      "No. Use your conventional or digital technique — we just need accurate records. You can ship physical records and we'll digitize them, or upload scans directly. We slot into the workflow you already run.",
  },
  {
    question: "How many appointments does a typical case take?",
    answer:
      "Most cases deliver in 2-3 appointments — compared to 9-10 for a traditional denture. Doctors report eliminating adjustment visits entirely once their team is onboarded.",
  },
  {
    question: "What products do you make?",
    answer:
      "Complete bio-hygienic dentures, overdentures, AvaMax LOCATOR FIXED® prostheses, and AvaMax Fixed Hybrid restorations. All from the same monolithic, precision-milled process.",
  },
  {
    question: "What happens if a patient breaks or loses their denture?",
    answer:
      "Because every AvaDent case is designed and stored as a digital file, we can re-mill an exact replacement — no new records, no new appointments for impressions. Fast replacements are one of the biggest patient-loyalty drivers doctors report.",
  },
  {
    question: "Can I use AvaDent for Class 1, 2, and 3 patients?",
    answer:
      "Yes. The monolithic design and cross-linked material handle all three classifications with no limitations, including challenging over-denture and implant-retained cases.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Start by submitting the form — a specialist will walk you through dashboard access, record submission, and your first case. Most practices place their first order within a few days.",
  },
  {
    question: "Is there a minimum case volume to work with AvaDent?",
    answer:
      "No minimums. Whether you deliver one denture a month or fifty, AvaDent scales with your practice or lab.",
  },
];
