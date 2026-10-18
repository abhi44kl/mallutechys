
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mallutechys.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles/what-is-artificial-intelligence`,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/digital-skills-for-beginners`,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/how-to-build-your-first-website`,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
