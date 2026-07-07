"use client";

import Image, { type StaticImageData } from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { TeamMember } from "@/lib/data";

type TeamMemberCardProps = {
  member: TeamMember;
  photo?: StaticImageData;
};

export function TeamMemberCard({ member, photo }: TeamMemberCardProps) {
  const subtitle = [
    member.credentials,
    member.role !== "Advisory Board" ? member.role : undefined,
  ]
    .filter(Boolean)
    .join(" — ");

  return (
    <Dialog>
      <DialogTrigger
        className="group flex h-full cursor-pointer flex-col border border-border bg-card text-left transition-colors hover:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        aria-label={`Read bio: ${member.name}`}
      >
        {photo && (
          <Image
            src={photo}
            alt={`Portrait of ${member.name}`}
            className="aspect-square w-full object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
          />
        )}
        <span className="flex flex-1 flex-col p-5">
          <h3 className="text-lg">{member.name}</h3>
          {member.credentials && (
            <p className="text-sm font-medium text-primary">
              {member.credentials}
            </p>
          )}
          {member.role !== "Advisory Board" && (
            <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
          )}
          <span className="mt-auto pt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors group-hover:text-primary">
            Read bio →
          </span>
        </span>
      </DialogTrigger>

      <DialogContent className="max-h-[85dvh] gap-0 overflow-y-auto p-0 sm:max-w-lg">
        <DialogHeader className="flex-row items-center gap-4 space-y-0 border-b border-border p-5 text-left">
          {photo && (
            <Image
              src={photo}
              alt=""
              className="size-20 shrink-0 object-cover object-top"
              sizes="80px"
            />
          )}
          <div>
            <DialogTitle className="font-heading text-xl">
              {member.name}
            </DialogTitle>
            <DialogDescription asChild>
              <span className="mt-1 block text-sm">
                {member.credentials && (
                  <span className="font-medium text-primary">
                    {member.credentials}
                  </span>
                )}
                {member.credentials && <br />}
                <span className="text-muted-foreground">{member.role}</span>
              </span>
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="space-y-3 p-5">
          {member.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
