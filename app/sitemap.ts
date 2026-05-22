// app/sitemap.ts

import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexolia-consulting.com"

  return [
    {
      url: baseUrl,
      lastModified: "2026-05-22",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-05-22",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: "2026-05-22",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-05-22",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog_news`,
      lastModified: "2026-05-22",
      changeFrequency: "daily",
      priority: 0.7,
    },
  ]
}