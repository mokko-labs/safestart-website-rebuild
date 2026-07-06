export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  {
    label: "Who We Serve",
    href: "/hospitals",
    children: [
      { label: "Hospitals", href: "/hospitals" },
      { label: "Pediatric Surgery", href: "/pediatric-surgery" },
      { label: "Surgery Centers", href: "/surgery-centers" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Resources",
    href: "/videos",
    children: [
      { label: "Videos", href: "/videos" },
      { label: "News", href: "/news" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Who We Serve",
    links: [
      { label: "Hospitals", href: "/hospitals" },
      { label: "Pediatric Surgery", href: "/pediatric-surgery" },
      { label: "Surgery Centers", href: "/surgery-centers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Videos", href: "/videos" },
      { label: "News", href: "/news" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { label: "Twitter", href: "https://twitter.com/safestartmed" },
      {
        label: "Facebook",
        href: "https://web.facebook.com/SafeStart-Medical-769286666495337/",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/10692304/",
      },
    ],
  },
];

export const siteConfig = {
  name: "SafeStart",
  legalName: "SafeStart Medical, Inc.",
  address: "8021 Brightwater Way, Spring Hill, Tennessee, 37174-2250",
  email: "info@safestartmedical.com",
  appStoreUrl: "https://apps.apple.com/us/app/safestart-medical/id1178744508",
};
