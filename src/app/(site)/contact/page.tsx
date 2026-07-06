import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contact SafeStart Medical to request a demo of our surgical safety system, ask a question, or learn how SafeStart helps you start surgery safely and on time.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-4xl sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl opacity-85">
            Request a demo or ask us anything — we&apos;ll get back to you
            shortly.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_20rem]">
        <div className="max-w-2xl">
          <ContactForm source="contact" />
        </div>
        <aside className="flex flex-col gap-6 lg:pt-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm text-muted-foreground">
              {siteConfig.address}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
