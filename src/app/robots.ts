import type { MetadataRoute } from "next";
import { SEO } from "@/config/portfolio.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", SEO.siteUrl).toString(),
  };
}
