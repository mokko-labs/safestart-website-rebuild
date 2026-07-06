"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { Play } from "lucide-react";

type VideoEmbedProps = {
  vimeoId: string;
  /** Unlock hash for unlisted videos (?h=) */
  hash?: string;
  title: string;
  poster: StaticImageData;
  /** Set on the poster of the largest above-the-fold embed */
  priority?: boolean;
};

/**
 * Vimeo "lite" facade: renders a static poster + play button and only
 * injects the (autoplaying) iframe after the user clicks. Keeps all
 * Vimeo JS off the critical path.
 */
export function VideoEmbed({
  vimeoId,
  hash,
  title,
  poster,
  priority,
}: VideoEmbedProps) {
  const [playing, setPlaying] = React.useState(false);

  const src = `https://player.vimeo.com/video/${vimeoId}?${
    hash ? `h=${hash}&` : ""
  }badge=0&autopause=0&autoplay=1&app_id=58479`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-foreground">
      {playing ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 size-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover transition-opacity group-hover:opacity-90"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110 sm:size-20">
              <Play className="size-7 fill-current sm:size-8" aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
