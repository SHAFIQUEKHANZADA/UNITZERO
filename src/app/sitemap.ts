import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://unitzero.tech";
  const now = new Date().toISOString();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${base}/our-story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  return routes;
}


