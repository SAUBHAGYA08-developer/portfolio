import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IconProvider from "./components/IconProvider";
import "./globals.css";
import { SEO, PERSONAL } from "@/config/portfolio.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  metadataBase: new URL(SEO.siteUrl),
  keywords: SEO.keywords,
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  publisher: PERSONAL.name,
  robots: "index, follow",
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
    url: SEO.siteUrl,
    siteName: `${PERSONAL.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
  },
  alternates: {
    canonical: SEO.siteUrl,
  },
  verification: {
    google: "vnSpYiucGp5n2xw08YSNCMviZDWbQ_ZUht-k2YnN30c",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL.name,
  givenName: PERSONAL.shortName,
  familyName: "Shukla",
  alternateName: PERSONAL.shortName,
  jobTitle: PERSONAL.title,
  description: SEO.description,
  disambiguatingDescription: `${PERSONAL.name}, backend software engineer at ${PERSONAL.currentCompany} in ${PERSONAL.location}, working in Java and Go.`,
  image: `${SEO.siteUrl}opengraph-image`,
  url: SEO.siteUrl,
  email: `mailto:${PERSONAL.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSONAL.city,
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: PERSONAL.currentCompany,
    url: "https://www.truemeds.in/",
  },
  knowsAbout: [
    "Java",
    "Go",
    "Golang",
    "Spring Boot",
    "Backend Engineering",
    "Microservices Architecture",
    "AWS",
    "Apache Kafka",
    "Redis",
    "Distributed Systems",
    "REST API Design",
  ],
  sameAs: [PERSONAL.github, PERSONAL.linkedin, PERSONAL.medium].filter(
    Boolean
  ),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${PERSONAL.name} Portfolio`,
  url: SEO.siteUrl,
  description: SEO.description,
  author: {
    "@type": "Person",
    name: PERSONAL.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <IconProvider>{children}</IconProvider>
      </body>
    </html>
  );
}
