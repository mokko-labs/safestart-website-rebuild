import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Quote,
  MonitorSmartphone,
  ShieldCheck,
  HeartHandshake,
  CalendarClock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { VideoEmbed } from "@/components/video-embed";
import { CtaSection } from "@/components/cta-section";
import { featuredVideo, testimonials } from "@/lib/data";
import { videoPosters } from "@/lib/video-posters";

import eventsImage from "@/assets/events.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "SafeStart Medical's surgical safety system eliminates wrong patient, wrong site, and wrong procedure Never Events while engaging patients and starting procedures on time.",
};

const features = [
  {
    title: "Eliminate Never Event Risk",
    icon: ShieldCheck,
    paragraphs: [
      "Never Events are unacceptable, avoidable, and cause great harm to patients as well as negatively impacting doctors, nurses, and their facilities.",
      "SafeStart is designed to eliminate wrong patient, wrong procedure, and wrong site Never Events by using enhanced and vetted clinical information.",
    ],
  },
  {
    title: "Increase Patient Engagement",
    icon: HeartHandshake,
    paragraphs: [
      "Engaged patients lead to improved health outcomes, better patient care, and lower costs.",
      "SafeStart's design includes the patient and family as part of the care team that includes the facility and anesthesia service.",
    ],
  },
  {
    title: "Reduce Delay and Cancellations",
    icon: CalendarClock,
    paragraphs: [
      "Reduce Delays, Cancellations, and No Shows that disrupt patient flow, increase operational costs, raise patient anxiety and cause revenue loss.",
      "All stakeholders vet SafeStart's comprehensive, graphically rich patient care documents multiple times before the patient arrives at the preoperative area — streamlining a safe care process so procedures can start on time.",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            We help you prevent{" "}
            <span className="underline decoration-primary-foreground/40 decoration-4 underline-offset-8">
              Never Events
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            SafeStart Medical&apos;s solution is the key to mitigating surgical
            never-event errors — ensuring that wrong patient, wrong site, and
            wrong operation errors are a thing of the past.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="xl"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/videos">Watch a Video</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <VideoEmbed
          vimeoId={featuredVideo.vimeoId}
          hash={featuredVideo.hash}
          title={featuredVideo.title}
          poster={videoPosters[featuredVideo.vimeoId]}
          priority
        />
      </section>

      {/* Created by a surgeon */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl sm:text-4xl">
            Created by a surgeon with a passion for safety
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" aria-hidden />
          <p className="mt-8 text-lg text-muted-foreground">
            SafeStart&apos;s mobile, cloud-based, HIPAA-compliant technology
            organizes and displays the patient record and adds
            surgeon-annotated site photos, key images, allergies, consent
            forms, and more.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Multiple record reviews and sign-offs by clinical staff, and the
            patient, allow procedures to start safely and on time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Image
            src={eventsImage}
            alt="Surgical team preparing in an operating room"
            className="w-full"
            sizes="(max-width: 768px) 100vw, 576px"
          />
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-heading text-5xl font-bold text-primary">
                5,000<sup className="text-2xl">+</sup>
              </p>
              <p className="mt-1 text-muted-foreground">
                Never Events happen per year in US operating rooms.
              </p>
            </div>
            <div>
              <p className="font-heading text-5xl font-bold text-primary">
                40<sup className="text-2xl">%</sup>
              </p>
              <p className="mt-1 text-muted-foreground">
                of Never Events originate in the office.
              </p>
            </div>
            <p className="flex items-center gap-2 font-medium">
              <MonitorSmartphone className="size-5 text-primary" aria-hidden />
              Available on desktop and mobile
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">
            Why surgical teams choose SafeStart
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col border border-border bg-card"
              >
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <feature.icon
                    className="size-10 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="text-xl">{feature.title}</h3>
                  {feature.paragraphs.map((p) => (
                    <p key={p} className="text-sm text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">
            What clinicians say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="flex flex-col gap-4 border border-border bg-card p-6"
              >
                <Quote className="size-6 text-primary" aria-hidden />
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-semibold">— {t.author}</span>{" "}
                  <span className="text-muted-foreground">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Watch a video band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-3xl sm:text-4xl">
            <Link href="/videos" className="hover:underline">
              Watch a Video Today
            </Link>
          </h2>
          <p className="mt-2 opacity-90">
            Learn how SafeStart can help you start surgery safely… and on time.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
