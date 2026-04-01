import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — ${PERSONAL.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  alternates: {
    canonical: SEO.siteUrl,
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
        {children}
      </body>
    </html>
  );
}
