import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://unitzero.tech";
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/_next/",
          "/_vercel/",
          "/private/",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}


