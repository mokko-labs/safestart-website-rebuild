import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CircleCheckBig, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact-form";

import appStoreBadge from "@/assets/app-store-badge.png";

export const metadata: Metadata = {
  alternates: { canonical: "/signup" },
  title: { absolute: "SafeStart | Surgical Safety iOS App" },
  description:
    "Start Surgery Safely with SafeStart, the surgical safety iOS application. Sign up to get started with SafeStart Medical.",
};

export default function SignupPage() {
  return (
    <>
      {/* Hero header */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/60 text-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <Link
            href="/"
            className="group inline-flex flex-col items-center gap-4"
            aria-label="SafeStart home"
          >
            <CircleCheckBig
              className="size-14 text-primary brightness-150"
              aria-hidden
            />
            <h1 className="font-heading text-4xl font-bold tracking-tight group-hover:underline sm:text-5xl">
              SAFESTART<sup className="text-base font-normal">®</sup>
            </h1>
          </Link>
          <p className="mt-4 text-xl opacity-85 sm:text-2xl">
            Start Surgery Safely
          </p>
        </div>
      </section>

      {/* Signup form */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <Mail className="mx-auto size-10 text-primary" aria-hidden />
          <h2 className="mt-4 text-3xl sm:text-4xl">Sign Up</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" aria-hidden />
          <p className="mt-6 text-muted-foreground">
            Tell us about yourself and your practice, and we&apos;ll get you
            started with SafeStart.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl border border-border bg-card p-6 sm:p-8">
          <ContactForm source="signup" />
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account? Get the app:
          </p>
          <a
            href="https://apps.apple.com/us/app/safestart-medical/id1178744508"
            className="mt-4 inline-block"
            aria-label="Download SafeStart Medical on the App Store"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </section>

      {/* Page-local footer */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-8 text-sm font-semibold tracking-wide sm:px-6">
          <a
            href="https://twitter.com/safestartmed"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-85 hover:underline hover:opacity-100"
          >
            TWITTER
          </a>
          <a
            href="https://www.facebook.com/pages/SafeStart-Medical/769286666495337?fref=ts"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-85 hover:underline hover:opacity-100"
          >
            FACEBOOK
          </a>
        </div>
        <div className="border-t border-background/15">
          <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs opacity-70 sm:px-6">
            <span className="font-semibold">
              Single Point of Truth Medical Software
            </span>{" "}
            | All Rights Reserved © {new Date().getFullYear()} |{" "}
            <span className="font-semibold">
              Surgical Safety Application Platform
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
