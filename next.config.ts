import type { NextConfig } from "next";

/** Old static-site URLs (indexed by search engines) → new clean routes */
const legacyRedirects = [
  { source: "/index.html", destination: "/" },
  { source: "/hospitals.html", destination: "/hospitals" },
  { source: "/pediatric_surgery.html", destination: "/pediatric-surgery" },
  { source: "/surgery_centers.html", destination: "/surgery-centers" },
  { source: "/about.html", destination: "/about" },
  { source: "/videos.html", destination: "/videos" },
  { source: "/news.html", destination: "/news" },
  { source: "/contact.html", destination: "/contact" },
  { source: "/privacy_policy.html", destination: "/privacy-policy" },
  { source: "/terms_of_use.html", destination: "/terms-of-use" },
  { source: "/usi-path.html", destination: "/usi-path" },
  // Dead template pages
  { source: "/blog.html", destination: "/" },
  { source: "/blog-post.html", destination: "/" },
  { source: "/portfolio-post.html", destination: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
