import Link from "next/link";
import Image from "next/image";

import { footerNav, siteConfig } from "@/data/nav";
import appStoreBadge from "@/assets/app-store-badge.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-heading text-lg font-bold tracking-tight">
            SAFESTART<sup className="text-xs font-normal">®</sup>
          </p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            {siteConfig.address}
          </p>
          <a
            href={siteConfig.appStoreUrl}
            className="mt-5 inline-block"
            aria-label="Download SafeStart Medical on the App Store"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-10 w-auto"
            />
          </a>
        </div>
        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-xs font-semibold uppercase tracking-wider opacity-70">
              {col.heading}
            </h2>
            <ul className="mt-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-sm opacity-90 transition-opacity hover:opacity-100 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName.toUpperCase()}
          </p>
          <p className="flex gap-5">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
