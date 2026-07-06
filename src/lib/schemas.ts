import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  organization: z.string().trim().min(1, "Organization is required").max(200),
  email: z.email("Enter a valid email address").max(254),
  phone: z.string().trim().min(1, "Phone number is required").max(40),
  helpMessage: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(75, "75 characters maximum")
    .refine((v) => !/https?:\/\/|www\./i.test(v), "Links are not allowed"),
  /** Honeypot — humans never fill this in; route silently accepts+drops when set */
  website: z.string().optional(),
  /** Optional origin marker so different site forms get distinct subjects */
  source: z.enum(["contact", "usi-path", "signup"]).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
