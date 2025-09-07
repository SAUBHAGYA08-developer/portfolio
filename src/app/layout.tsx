import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saubhagya Shukla - Backend Developer & Creative Technologist",
  description:
    "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects and get in touch for collaboration opportunities.",
  keywords: [
    "Saubhagya Shukla",
   "Backend Developer",
  "Java Developer",
  "Spring Boot Developer",
  "REST API Developer",
  "Microservices Developer",
  "Java",
  "Spring Boot",
  "Hibernate",
  "MySQL",
  "PostgreSQL",
  "Apache Kafka",
  "Kafka",
  "Docker",
  "Jenkins",
  "AWS",
  "JUnit",
  "Maven",
  "Backend Engineer",
  "Software Developer",
  "Server-side Development",
  "Backend Portfolio",
  "API Development",
  "Kafka Messaging",
  "Message Queues",
  "DevOps Tools",
  "Git",
  "Jira",
  "Confluence"
  ],
  authors: [{ name: "Saubhagya Shukla" }],
  creator: "Saubhagya Shukla",
  publisher: "Saubhagya Shukla",
  robots: "index, follow",
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    title: "Saubhagya Shukla - Frontend Developer & Creative Technologist",
    description:
      "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://thefrontify.com",
    siteName: "Saubhagya Shukla Portfolio",
    locale: "en_US",
    images: ["/my-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saubhagya Shukla - Frontend Developer & Creative Technologist",
    description:
      "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/my-logo.png"],
    creator: "@shivamranjan",
  },
  alternates: {
    canonical: "https://thefrontify.com",
  },
  other: {
    "theme-color": "#1f2937",
    "color-scheme": "dark",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
