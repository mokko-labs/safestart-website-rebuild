import newsJson from "@/data/news.json";
import videosJson from "@/data/videos.json";
import teamJson from "@/data/team.json";
import partnersJson from "@/data/partners.json";
import testimonialsJson from "@/data/testimonials.json";

export type NewsItem = {
  id: string;
  /** ISO date (YYYY-MM-DD); empty string when unknown */
  date: string;
  title: string;
  summary: string;
  /** Additional paragraphs after the summary */
  body?: string[];
  /** Filename under src/assets, e.g. "newsletter1.png" */
  image?: string;
  externalUrl?: string;
};

export type Video = {
  id: string;
  vimeoId: string;
  /** Unlisted-video unlock hash (the ?h= param), if required */
  hash?: string;
  title: string;
  description: string;
  category: "patient" | "explainer" | "archive";
  featured?: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  /** Credentials suffix, e.g. "MD, FACS" */
  credentials?: string;
  role: string;
  /** Filename under src/assets/team, e.g. "member2.jpg" */
  image?: string;
  bio: string[];
};

export type Partner = {
  id: string;
  name: string;
  /** Filename under src/assets/partners */
  image: string;
  url?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  title: string;
};

export const news = newsJson as NewsItem[];
export const testimonials = testimonialsJson as Testimonial[];
export const videos = videosJson as Video[];
export const team = teamJson as TeamMember[];
export const partners = partnersJson as Partner[];

export const featuredVideo = videos.find((v) => v.featured) ?? videos[0];
