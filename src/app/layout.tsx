import type { Metadata, Viewport } from "next";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";
import Providers from "./providers";

const siteUrl = "https://bullnoseconsulting.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#232166",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Bullnose Consulting - Financial Services for Construction Contractors",
    template: "%s | Bullnose Consulting",
  },
  description:
    "Get control of your cash flow with virtual CFO services, financial assessments, and modern tech integration. Serving small to medium construction companies in DC, MD, VA, and DE with 20+ years of industry experience.",
  keywords: [
    "construction consulting",
    "virtual CFO",
    "contractor cash flow",
    "construction financial services",
    "small construction companies",
    "DC contractors",
    "Maryland contractors",
    "Virginia contractors",
    "Delaware contractors",
    "construction tech integration",
    "contractor financial management",
    "diagnostic assessment",
    "strategic partnership",
  ],
  authors: [{ name: "Bullnose Consulting" }],
  creator: "Bullnose Consulting",
  publisher: "Bullnose Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bullnose Consulting",
    title:
      "Bullnose Consulting - Financial Services for Construction Contractors",
    description:
      "Get control of your cash flow with virtual CFO services, financial assessments, and modern tech integration. Serving small to medium construction companies in DC, MD, VA, and DE with 20+ years of industry experience.",
    images: [
      {
        url: "/static-assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Bullnose Consulting - Financial Services for Construction Contractors",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bullnose Consulting - Financial Services for Construction Contractors",
    description:
      "Get control of your cash flow with virtual CFO services, financial assessments, and modern tech integration. Serving small to medium construction companies in DC, MD, VA, and DE with 20+ years of industry experience.",
    images: ["/static-assets/hero.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  other: {
    // Geographic targeting
    "geo.region": "US-DC",
    "geo.placename": "Washington DC Metro Area",
    ICBM: "38.9072, -77.0369",
    // Additional business meta
    language: "English",
    "revisit-after": "7 days",
    // Security headers
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    // Mobile optimizations
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Bullnose Consulting",
    "msapplication-TileColor": "#232166",
    "theme-color": "#232166",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bullnose Consulting",
      description:
        "Financial services and consulting for construction contractors. Virtual CFO services, cash flow management, and technology integration.",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Business",
        availableLanguage: "English",
      },
      areaServed: [
        {
          "@type": "State",
          name: "Washington DC",
        },
        {
          "@type": "State",
          name: "Maryland",
        },
        {
          "@type": "State",
          name: "Virginia",
        },
        {
          "@type": "State",
          name: "Delaware",
        },
      ],
      serviceType: [
        "Virtual CFO Services",
        "Financial Consulting",
        "Construction Business Consulting",
        "Cash Flow Management",
        "Technology Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Bullnose Consulting",
      description:
        "Financial services and consulting for construction contractors",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
