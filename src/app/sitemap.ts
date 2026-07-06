import type { MetadataRoute } from "next";

import { SITE_URL, siteRoutes } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    changeFrequency: path === "/news" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
