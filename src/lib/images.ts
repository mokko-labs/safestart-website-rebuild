import type { StaticImageData } from "next/image";

// Team
import member11 from "@/assets/team/member11.png";
import member2 from "@/assets/team/member2.jpg";
import member3 from "@/assets/team/member3.jpg";
import member4 from "@/assets/team/member4.jpg";
import georgeCybulski from "@/assets/team/george-r-cybulski.jpg";
import randalOstroff from "@/assets/team/randal-ostroff.jpg";
import douglasOtt from "@/assets/team/douglas-e-ott.jpg";
import davidHarris from "@/assets/team/david-harris.jpg";
import robertVogelzang from "@/assets/team/robert-m-vogelzang.jpg";
import richardPearl from "@/assets/team/richard-h-pearl.jpg";
import steveSerota from "@/assets/team/steve-serota.jpg";
import katherineLee from "@/assets/team/katherine-lee.jpg";
import markStega from "@/assets/team/mark-stega.jpg";

// Partners
import partners31 from "@/assets/partners/partners31.png";
import partners6 from "@/assets/partners/partners6.png";
import partners7 from "@/assets/partners/partners7.png";
import partners8 from "@/assets/partners/partners8.png";

// News
import newsletter1 from "@/assets/newsletter1.png";
import newsletter2 from "@/assets/newsletter2.png";

/** Keyed by the `image` filename stored in the JSON data files */
export const teamImages: Record<string, StaticImageData> = {
  "member11.png": member11,
  "member2.jpg": member2,
  "member3.jpg": member3,
  "member4.jpg": member4,
  "george-r-cybulski.jpg": georgeCybulski,
  "randal-ostroff.jpg": randalOstroff,
  "douglas-e-ott.jpg": douglasOtt,
  "david-harris.jpg": davidHarris,
  "robert-m-vogelzang.jpg": robertVogelzang,
  "richard-h-pearl.jpg": richardPearl,
  "steve-serota.jpg": steveSerota,
  "katherine-lee.jpg": katherineLee,
  "mark-stega.jpg": markStega,
};

export const partnerImages: Record<string, StaticImageData> = {
  "partners31.png": partners31,
  "partners6.png": partners6,
  "partners7.png": partners7,
  "partners8.png": partners8,
};

export const newsImages: Record<string, StaticImageData> = {
  "newsletter1.png": newsletter1,
  "newsletter2.png": newsletter2,
};
