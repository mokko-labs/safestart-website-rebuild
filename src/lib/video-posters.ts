import type { StaticImageData } from "next/image";

import poster1011130646 from "@/assets/video-thumbs/1011130646.jpg";
import poster1011136954 from "@/assets/video-thumbs/1011136954.jpg";
import poster1025406029 from "@/assets/video-thumbs/1025406029.jpg";
import poster888251107 from "@/assets/video-thumbs/888251107.jpg";
import poster224414725 from "@/assets/video-thumbs/224414725.jpg";
import poster224414969 from "@/assets/video-thumbs/224414969.jpg";

/** Locally stored Vimeo poster frames, keyed by video id */
export const videoPosters: Record<string, StaticImageData> = {
  "1011130646": poster1011130646,
  "1011136954": poster1011136954,
  "1025406029": poster1025406029,
  "888251107": poster888251107,
  "224414725": poster224414725,
  "224414969": poster224414969,
};
