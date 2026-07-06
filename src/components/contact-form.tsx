"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactPayload } from "@/lib/schemas";

type ContactFormProps = {
  /** Marks which form sent the message (affects the email subject) */
  source?: ContactPayload["source"];
};

export function ContactForm({ source = "contact" }: ContactFormProps) {
  const [status, setStatus] = React.useState<"idle" | "sent" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { source },
  });

  async function onSubmit(data: ContactPayload) {
    setStatus("idle");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 border border-primary/40 bg-accent px-6 py-12 text-center"
      >
        <CircleCheckBig className="size-10 text-primary" aria-hidden />
        <p className="text-lg font-semibold">Thank you!</p>
        <p className="text-muted-foreground">
          Your message has been sent. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First name *</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last name *</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="organization">Organization *</Label>
        <Input
          id="organization"
          autoComplete="organization"
          aria-invalid={!!errors.organization}
          {...register("organization")}
        />
        {errors.organization && (
          <p className="text-sm text-destructive">
            {errors.organization.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="helpMessage">How may we help you? *</Label>
        <Textarea
          id="helpMessage"
          rows={3}
          maxLength={75}
          placeholder="75 characters max, no links"
          aria-invalid={!!errors.helpMessage}
          {...register("helpMessage")}
        />
        {errors.helpMessage && (
          <p className="text-sm text-destructive">
            {errors.helpMessage.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your message. Please try again, or email
          us directly at info@safestartmedical.com.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting && (
          <LoaderCircle className="size-4 animate-spin" aria-hidden />
        )}
        {isSubmitting ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
