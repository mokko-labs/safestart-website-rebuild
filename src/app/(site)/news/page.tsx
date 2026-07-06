import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { news } from "@/lib/data";
import { newsImages } from "@/lib/images";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/news" },
  title: "News",
  description:
    "News and updates from SafeStart Medical: partnership announcements, patient safety commentary, and risk, safety, and quality reviews from our clinical team.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function NewsPage() {
  const newsJsonLd = news.map((item) => ({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    ...(item.date ? { datePublished: item.date } : {}),
    ...(item.image
      ? { image: [`${SITE_URL}${newsImages[item.image].src}`] }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "SafeStart Medical, Inc.",
      url: SITE_URL,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
      />
      {/* Page header */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-bold sm:text-5xl">News</h1>
          <div
            className="mx-auto mt-4 h-1 w-16 bg-primary-foreground/50"
            aria-hidden
          />
          <p className="mt-8 text-lg opacity-85">
            Announcements and patient safety commentary from the SafeStart
            Medical team.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-16">
          {news.map((item) => {
            const image = item.image ? newsImages[item.image] : undefined;

            return (
              <article
                key={item.id}
                className="border-b border-border pb-16 last:border-b-0 last:pb-0"
              >
                {image && (
                  <Image
                    src={image}
                    alt=""
                    className="w-full border border-border"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                )}
                <h2 className="mt-8 text-2xl sm:text-3xl">{item.title}</h2>
                {item.date && (
                  <p className="mt-3 text-sm font-medium uppercase tracking-wide text-primary">
                    <time dateTime={item.date}>
                      {dateFormatter.format(new Date(`${item.date}T00:00:00Z`))}
                    </time>
                  </p>
                )}
                <p className="mt-6 text-lg leading-relaxed">{item.summary}</p>
                {item.body?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
