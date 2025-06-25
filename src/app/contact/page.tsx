import type { Metadata } from "next";
import Contact from "@/components/Contact";

const siteUrl = "https://bullnoseconsulting.com";

export const metadata: Metadata = {
  title:
    "Contact Bullnose Consulting - Virtual CFO & Construction Financial Services",
  description:
    "Ready to get control of your construction company's cash flow? Contact Bullnose Consulting for virtual CFO services, financial assessments, and strategic consulting. Serving DC, MD, VA, and DE contractors.",
  keywords: [
    "contact bullnose consulting",
    "construction financial services contact",
    "virtual CFO contact",
    "contractor consulting contact",
    "DC construction consulting",
    "cash flow management contact",
  ],
  openGraph: {
    title:
      "Contact Bullnose Consulting - Virtual CFO & Construction Financial Services",
    description:
      "Ready to get control of your construction company's cash flow? Contact Bullnose Consulting for virtual CFO services, financial assessments, and strategic consulting. Serving DC, MD, VA, and DE contractors.",
    url: `${siteUrl}/contact`,
    siteName: "Bullnose Consulting",
    images: [
      {
        url: "/static-assets/house-project.png",
        width: 1200,
        height: 630,
        alt: "Bullnose Consulting Contact - Construction Project",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Bullnose Consulting - Virtual CFO & Construction Financial Services",
    description:
      "Ready to get control of your construction company's cash flow? Contact Bullnose Consulting for virtual CFO services, financial assessments, and strategic consulting. Serving DC, MD, VA, and DE contractors.",
    images: ["/static-assets/house-project.png"],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  other: {
    "geo.region": "US-DC",
    "geo.placename": "Washington DC Metro Area",
  },
};

export default function ContactPage() {
  return <Contact />;
}
