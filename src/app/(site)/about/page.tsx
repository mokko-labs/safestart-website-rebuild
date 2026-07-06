import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { team, partners, type TeamMember } from "@/lib/data";
import { teamImages, partnerImages } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Meet the SafeStart Medical team — surgeons, patients, and healthcare experts putting patient safety first — plus our advisory board and industry partners.",
};

function TeamCard({ member }: { member: TeamMember }) {
  const photo = member.image ? teamImages[member.image] : undefined;

  return (
    <details className="group flex flex-col border border-border bg-card">
      <summary className="flex cursor-pointer list-none flex-col [&::-webkit-details-marker]:hidden">
        {photo && (
          <Image
            src={photo}
            alt={`Portrait of ${member.name}`}
            className="aspect-square w-full object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
          />
        )}
        <span className="flex flex-1 items-start justify-between gap-3 p-5">
          <span className="block">
            <h3 className="text-lg">{member.name}</h3>
            {member.credentials && (
              <p className="text-sm font-medium text-primary">
                {member.credentials}
              </p>
            )}
            {member.role !== "Advisory Board" && (
              <p className="mt-1 text-sm text-muted-foreground">
                {member.role}
              </p>
            )}
          </span>
          <span
            className="mt-1 flex shrink-0 items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground"
            aria-hidden
          >
            Bio
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
          </span>
        </span>
      </summary>
      <div className="space-y-3 border-t border-border p-5">
        {member.bio.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </details>
  );
}

export default function AboutPage() {
  const leadership = team.filter((m) => m.role !== "Advisory Board");
  const advisoryBoard = team.filter((m) => m.role === "Advisory Board");

  return (
    <>
      {/* Who We Are */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1 className="text-4xl font-bold sm:text-5xl">Who We Are</h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-primary" aria-hidden />
          <p className="mt-8 text-lg opacity-85">
            SafeStart Medical is the result of a career-long passion for
            patient safety. Despite health care information technology and the
            WHO Universal Protocol checklists, Never Events continue to occur
            at an alarming rate. We need to address medical system errors that
            cause great patient harm.
          </p>
          <p className="mt-6 text-lg font-semibold">
            SafeStart is not just a checklist — it&apos;s a safety solution.
          </p>
          <p className="mt-6 text-lg opacity-85">
            We drive the safety process from the front office through the
            operating room, engaging patients and staff along the way. Our
            team of surgeons, patients, and healthcare experts put patient
            safety first.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl">Team</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Expand a profile to read the full bio.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl">Advisory Board</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryBoard.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl">Our Partners</h2>
        <ul className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.id} className="flex items-center justify-center">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener"
                title={partner.name}
              >
                <Image
                  src={partnerImages[partner.image]}
                  alt={`${partner.name} logo`}
                  className="grayscale hover:grayscale-0 transition max-h-24 w-auto"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  );
}
