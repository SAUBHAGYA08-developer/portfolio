import type { MetadataRoute } from "next";
import { SEO } from "@/config/portfolio.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
