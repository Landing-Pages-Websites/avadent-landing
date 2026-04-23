import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import Script from "next/script";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import "./globals.css";

// Real AvaDent brand fonts scraped from avadent.com: Montserrat (700-800 headlines)
// + Lato (300-400 body). Do NOT swap to Inter/Poppins/Jura.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://discover.avadent.com"),
  title: {
    default:
      "AvaDent — Digital Dentures That Cut Chair Time & Never Pop Off",
    template: "%s | AvaDent",
  },
  description:
    "Monolithic, precision-milled digital dentures for dental professionals. 8× stronger, no pop-offs, 2-3 appointments per case. For GPs, prosthodontists, implantologists, surgeons, and labs.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        {/* MegaTag — placeholders until Mega Admin site registration completes.
            Per memory/style-preferences.md 2026-04-22, all four elements are required:
            1) <meta name="mega-site-id">, 2) siteId in MEGA_TAG_CONFIG,
            3) data-site-id attribute on optimizer <script>, 4) explicit API endpoints.
            __SITE_ID__ / __SITE_KEY__ are swapped post-registration. */}
        <meta name="mega-site-id" content="__SITE_ID__" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"__SITE_KEY__",siteId:"__SITE_ID__",pixelId:"921840557285745"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id="__SITE_ID__"
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)]">
        <QueryParamPersistence />
        {children}
        {/* CTM — Universal Mega CTM account, loads after page is interactive.
            Required per landing-page-tracking skill. */}
        <Script
          src="https://572388.tctm.co/t.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
