import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

import { contactSchema } from "@/lib/schemas";

const TO = "info@safestartmedical.com";
const FROM = "no-reply@safestartmedical.com"; // verified sender in SendGrid

const SUBJECT_PREFIX: Record<string, string> = {
  contact: "New Contact Form Submission",
  "usi-path": "New PATH Client Inquiry",
  signup: "New iOS App Signup Request",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const { firstName, lastName, organization, email, phone, helpMessage } =
    parsed.data;

  // Honeypot tripped — pretend success, send nothing.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const subject = `${
    SUBJECT_PREFIX[parsed.data.source ?? "contact"]
  } from ${firstName} ${lastName}`;

  const msg = {
    to: TO,
    from: FROM,
    replyTo: email,
    subject,
    text: `You have received a new message from the SafeStart Medical website.\n\nName: ${firstName} ${lastName}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${helpMessage}`,
    html: `<h2>${escapeHtml(subject)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(helpMessage).replace(/\n/g, "<br>")}</p>`,
  };

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-email failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
