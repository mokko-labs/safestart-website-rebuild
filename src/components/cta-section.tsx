import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import safestartIpad from "@/assets/safestart-ipad.png";

export function CtaSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl">
            Start surgery safely — and on time.
          </h2>
          <p className="mt-2 text-muted-foreground">
            SafeStart works with or without an EMR.
          </p>
          <Button asChild size="xl" className="mt-6">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
        <Image
          src={safestartIpad}
          alt="SafeStart running on an iPad"
          className="w-64 max-w-full sm:w-80"
          sizes="(max-width: 640px) 256px, 320px"
        />
      </div>
    </section>
  );
}
