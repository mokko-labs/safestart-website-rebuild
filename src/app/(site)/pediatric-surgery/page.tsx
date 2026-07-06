import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  alternates: { canonical: "/pediatric-surgery" },
  title: "Pediatric Surgery",
  description:
    "SafeStart brings surgical safety to pediatric surgery — eliminating Never Events, engaging patients and families, and improving operating room throughput.",
};

const benefits = [
  {
    title: "Eliminate Never Events",
    lead: "SafeStart eliminates Never Events through preventing wrong patient, wrong procedure, and wrong site operations.",
    bullets: [
      "Eliminate risk of WSPEs and consequent payouts",
      "Reduction in internal investigation time for Never Events",
      "Reduction in medical liability premiums due to Never Events",
      "Patient participation in risk reduction by preop approval on surgical checklists",
    ],
  },
  {
    title: "Improving Operating Room Throughput",
    lead: "SafeStart provides enhanced patient safety data and information that prevents delays, cancellations, and no shows, allowing better Operating Room schedule continuity, throughput, and efficiency.",
    bullets: [
      "Elimination of patient-caused delays",
      "Elimination of cancellations",
      "Increased capacity of the Operating Rooms",
      "Improvement of Operating Room schedule continuity",
      "Reduction in overtime expense due to all previously mentioned reasons",
    ],
  },
  {
    title: "Staff Satisfaction",
    lead: "SafeStart eliminates delays in the Operating Room, thus reducing the amount of wasted waiting time for surgeons and nurses in the Operating Room. Also, reducing the amount of Never Events will improve staff morale.",
    bullets: [
      "Improved staff satisfaction scores",
      "Help reduce staff turnover, reducing recruiting expense",
      "Help recruit clinicians through the enhanced safety leadership position",
    ],
  },
  {
    title: "Patient Engagement",
    lead: "SafeStart includes the patients and their families in the safety process through outreach to allow the patients to review their safety information and become part of the safety process.",
    bullets: [
      "Include surgery patients and their families in the hospital safety process",
      "Enhance the hospital brand of safety",
      "Increase patient satisfaction scores",
    ],
  },
  {
    title: "Meaningful Use",
    lead: "SafeStart can drive EMR patient portal usage by delivering critical patient safety information that patients will actively seek, helping providers achieve patient portal meaningful use metrics.",
    bullets: [
      "Leverage hospital investment in multi-million dollar EMR investments",
      "Drive patient portal registrations",
      "Drive ongoing patient portal usage",
      "Help drive achievement of Meaningful Use for patient portal usage",
    ],
  },
  {
    title: "Culture of Safety",
    lead: "SafeStart, with its introduction across the provider workflow of the office, the patient experience, and the OR, will create a top-of-mind focus on safety, enhancing a hospital's brand as safety conscious.",
    bullets: [
      "Embed and strengthen a focus on safety by clinical and office personnel",
      "Extend Culture of Safety to external hospital communications",
      "Leverage Culture of Safety to external marketing and branding",
    ],
  },
  {
    title: "HCAHPS",
    lead: "SafeStart can drive HCAHPS scores. CMS has moved to mandatory patient satisfaction surveys. SafeStart provides patients with safety information and participation in the surgical safety process that will improve HCAHPS scores.",
    bullets: [
      "Leverage hospital or facility investment in expensive EMRs",
      "Drive patient portal registrations",
      "Drive ongoing patient portal usage",
      "Help drive achievement of HCAHPS goals",
    ],
  },
];

export default function PediatricSurgeryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground">
            Who We Serve
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Pediatric Surgery
          </h1>
          <p className="mt-6 max-w-3xl text-lg opacity-85">
            SafeStart eliminates Never Events, enhances patient engagement and
            satisfaction, and increases operating room throughput and
            utilization. View our pediatric patient video{" "}
            <Link
              href="/videos"
              className="font-semibold text-primary underline underline-offset-4 brightness-150 hover:no-underline"
            >
              here
            </Link>
            !
          </p>
        </div>
      </section>

      {/* Benefits */}
      {benefits.map((benefit, index) => (
        <section
          key={benefit.title}
          className={index % 2 === 1 ? "bg-secondary" : undefined}
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
              <h2 className="text-2xl sm:text-3xl md:text-right">
                {benefit.title}
              </h2>
              <div>
                <p className="text-lg text-muted-foreground">{benefit.lead}</p>
                <ul className="mt-6 space-y-3">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check
                        className="mt-1 size-5 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaSection />
    </>
  );
}
