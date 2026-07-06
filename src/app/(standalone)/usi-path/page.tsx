import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Ban,
  BarChart3,
  CircleCheckBig,
  ClipboardList,
  Lock,
  ScanFace,
  Search,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { VideoEmbed } from "@/components/video-embed";
import { videoPosters } from "@/lib/video-posters";

import appScreens from "@/assets/app-screens.webp";
import usiLogo from "@/assets/usi-logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/usi-path" },
  title: "SafeStart for USI PATH Clients",
  description:
    "A special SafeStart Medical risk mitigation offer for USI PATH clients: prevent surgical never events, standardize preoperative processes, and sign up for two years to get 15% off the subscription price.",
};

const features = [
  {
    icon: ClipboardList,
    title: "EMR Augmentation",
    description:
      "SafeStart augments your EMR with comprehensive information management processes to organize and share information required to safely start surgical procedures.",
  },
  {
    icon: Users,
    title: "Collaborative Crosscheck Tool",
    description:
      "Seamlessly displays complete end-to-end preoperative information, allowing surgeons, facilities, staff, and patients to share content and control of the patient preparation process.",
  },
  {
    icon: Search,
    title: "Gap Detection & Closure",
    description:
      "Provides the digital environment to detect and close all gaps in the data set from patient intake through the preoperative area and operating room.",
  },
  {
    icon: Ban,
    title: "Never Event Elimination",
    description:
      "Through continual sharing of image-rich information, SafeStart eliminates never events, patient-caused schedule delays, cancellations, and no-shows.",
  },
  {
    icon: BarChart3,
    title: "Process Standardization",
    description:
      "Ensures accuracy and patient safety required for precision care while relieving staff and patient anxiety through standardized compliance processes.",
  },
  {
    icon: Shield,
    title: "Culture of Safety",
    description:
      "SafeStart deployment serves as a keystone habit that fosters development of an improved culture of safety throughout your surgical facility.",
  },
  {
    icon: ScanFace,
    title: "AI Facial Recognition",
    description:
      "SafeStart provides an AI facial recognition technology (via Securport add-on) that authenticates patient identity and health insurance details.",
  },
  {
    icon: Lock,
    title: "Securstart",
    description:
      "Securport for identity authentication and insurance verification automates registration at medical service facilities that integrate with it.",
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction Goal" },
  { value: "24/7", label: "Chat Support" },
  { value: "10+", label: "Years Experience" },
];

export default function UsiPathPage() {
  return (
    <>
      {/* Page-local header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2"
            aria-label="SafeStart home"
          >
            <CircleCheckBig
              className="size-7 shrink-0 text-primary"
              aria-hidden
            />
            <span className="truncate font-heading text-xl font-bold tracking-tight">
              SAFESTART<sup className="text-xs font-normal">®</sup>
            </span>
            <Image
              src={usiLogo}
              alt="USI logo"
              className="ml-1 h-8 w-auto sm:ml-2 sm:h-10"
            />
          </Link>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/60 text-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              The SafeStart Risk Mitigation Solution — Special Offer for
              USI.com PATH Clients
            </h1>
            <p className="mt-6 text-lg opacity-85">
              We offer comprehensive risk mitigation services for the
              prevention of surgical never events. Your risk and patient safety
              are our priorities.
            </p>
            <p className="mt-6 flex items-center justify-center gap-3 border border-background/25 bg-background/10 p-4 font-semibold backdrop-blur lg:justify-start">
              <Sparkles className="size-5 shrink-0 text-primary" aria-hidden />
              Special Offer: Sign up for two years and get 15% off the
              subscription price
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button asChild size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
          <Image
            src={appScreens}
            alt="SafeStart app screens"
            priority
            className="pointer-events-none w-full select-none"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </section>

      {/* Features */}
      <section id="services" className="scroll-mt-16 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">
            Improved Surgical Outcomes
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" aria-hidden />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-3 border border-border bg-card p-6"
              >
                <feature.icon className="size-8 text-primary" aria-hidden />
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* Explainer video */}
          <div className="mx-auto mt-20 max-w-2xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              SecurStart Explainer Video
            </h2>
            <div className="mt-6">
              <VideoEmbed
                vimeoId="1025406029"
                hash="3fd111decc"
                title="SecurStart Explainer Video"
                poster={videoPosters["1025406029"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 text-center sm:grid-cols-3 sm:px-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-5xl font-bold text-primary brightness-150">
                {stat.value}
              </p>
              <p className="mt-1 text-lg opacity-85">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="path" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="border border-border bg-secondary px-6 py-14 text-center sm:px-10">
          <h2 className="text-3xl sm:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Join other PATH clients who trust SafeStart Medical for their risk
            mitigation needs for the elimination of never events.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#contact">Contact Us Today</a>
          </Button>
        </div>
      </section>

      {/* Contact + page-local footer */}
      <footer id="contact" className="scroll-mt-16 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">Contact Us</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" aria-hidden />
          <div className="mx-auto mt-10 max-w-xl border border-border bg-card p-6 text-foreground sm:p-8">
            <ContactForm source="usi-path" />
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-primary brightness-150">
                Contact Information
              </h3>
              <div className="mt-3 space-y-1 text-sm opacity-85">
                <p>Phone: 1-312-296-2019</p>
                <p>Email: info@safestartmedical.com</p>
                <p>Address: 8021 Brightwater Way, Spring Hill, Tennessee 37174</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary brightness-150">
                Quick Links
              </h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <a
                    href="https://securlinx.com/products/securport-healthcare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-85 hover:underline hover:opacity-100"
                  >
                    Securlinx-Securport
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    className="opacity-85 hover:underline hover:opacity-100"
                  >
                    SafeStartMedical.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-background/15">
          <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs opacity-70 sm:px-6">
            © {new Date().getFullYear()} SafeStart Medical, Inc. All rights
            reserved. | A trusted partner of USI.com PATH program
          </p>
        </div>
      </footer>
    </>
  );
}
