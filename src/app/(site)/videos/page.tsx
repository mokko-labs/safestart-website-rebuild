import type { Metadata } from "next";

import { VideoEmbed } from "@/components/video-embed";
import { CtaSection } from "@/components/cta-section";
import { videos, type Video } from "@/lib/data";
import { videoPosters } from "@/lib/video-posters";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/videos" },
  title: "Videos",
  description:
    "Watch SafeStart videos: see how adult and pediatric patients move through the surgical safety process, and learn how SecurStart identity verification works.",
};

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="text-xl">{video.title}</h3>
      <VideoEmbed
        vimeoId={video.vimeoId}
        hash={video.hash}
        title={video.title}
        poster={videoPosters[video.vimeoId]}
      />
      <p className="text-sm text-muted-foreground">{video.description}</p>
    </article>
  );
}

export default function VideosPage() {
  const patientVideos = videos.filter((v) => v.category === "patient");

  const explainers = videos.filter((v) => v.category === "explainer");
  const hasNewerExplainer = explainers.some(
    (v) => v.vimeoId === "1025406029",
  );
  const explainerVideos = hasNewerExplainer
    ? explainers.filter((v) => v.vimeoId !== "888251107")
    : explainers;

  const videoJsonLd = [...patientVideos, ...explainerVideos].map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: `${SITE_URL}${videoPosters[v.vimeoId].src}`,
    embedUrl: `https://player.vimeo.com/video/${v.vimeoId}${
      v.hash ? `?h=${v.hash}` : ""
    }`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {/* Page header */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-bold sm:text-5xl">Videos</h1>
          <div
            className="mx-auto mt-4 h-1 w-16 bg-primary-foreground/50"
            aria-hidden
          />
          <p className="mt-8 text-lg opacity-85">
            See SafeStart in action — from the patient experience to the
            technology that keeps every procedure safe and on time.
          </p>
        </div>
      </section>

      {/* Patient videos */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl">
          The Patient Experience
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {patientVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Explainer videos */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">
            How SecurStart Works
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-10">
            {explainerVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
