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
  jobTitle: PERSONAL.title,
  url: SEO.siteUrl,
  email: `mailto:${PERSONAL.email}`,
  worksFor: {
    "@type": "Organization",
    name: PERSONAL.currentCompany,
  },
  sameAs: [PERSONAL.github, PERSONAL.linkedin, PERSONAL.medium].filter(
    Boolean
  ),
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
        <IconProvider>{children}</IconProvider>
      </body>
    </html>
  );
}
