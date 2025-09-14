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
    "Backend Developer with 2+ years of professional experience, currently working at TRUEMEDS, where I contribute to building and deploying scalable web applications. Proficient in Java, Spring Boot, Microservices, Hibernate, JPA, and MySQL. Experienced in integrating Redis for high-performance caching and managing CI/CD pipelines using Jenkins and Git. I work extensively with AWS services including EC2, RDS, SQS, MSK, Lambda, CloudWatch, and S3 to ensure reliable, cloud-native deployments. From development to deployment, I handle the full lifecycle of backend systems. Explore my projects below and feel free to reach out for collaboration opportunities.",
  metadataBase: new URL("https://yourdomain.com"), // <-- ADD your live URL here
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
    "Redshift",
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
    "Confluence",
  ],
  authors: [{ name: "Saubhagya Shukla" }],
  creator: "Saubhagya Shukla",
  publisher: "Saubhagya Shukla",
  robots: "index, follow",
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    title: "Saubhagya Shukla - Backend Developer & Creative Technologist",
    description:
      "Backend Developer with 2+ years of professional experience, currently working at TRUEMEDS, where I contribute to building and deploying scalable web applications. Proficient in Java, Spring Boot, Microservices, Hibernate, JPA, and MySQL. Experienced in integrating Redis for high-performance caching and managing CI/CD pipelines using Jenkins and Git. I work extensively with AWS services including EC2, RDS, SQS, MSK, Lambda, CloudWatch, and S3 to ensure reliable, cloud-native deployments. From development to deployment, I handle the full lifecycle of backend systems. Explore my projects below and feel free to reach out for collaboration opportunities.",
    type: "website",
    url: "https://yourdomain.com", // <-- your live URL here
    siteName: "Saubhagya Shukla Portfolio",
    locale: "en_US",
    images: ["/my-logo.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com", // <-- your live URL here
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
