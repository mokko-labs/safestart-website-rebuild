import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

import { siteConfig } from "@/data/nav";
import { SITE_URL } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SafeStart | Surgical Safety System",
    template: "%s | SafeStart",
  },
  description:
    "SafeStart Medical's surgical safety system engages patients and surgical teams to eliminate Never Events and improve OR efficiency.",
  openGraph: {
    type: "website",
    siteName: "SafeStart Medical",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@safestartmed",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: siteConfig.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "8021 Brightwater Way",
    addressLocality: "Spring Hill",
    addressRegion: "TN",
    postalCode: "37174-2250",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer service",
  },
  sameAs: [
    "https://twitter.com/safestartmed",
    "https://web.facebook.com/SafeStart-Medical-769286666495337/",
    "https://www.linkedin.com/company/10692304/",
    siteConfig.appStoreUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
