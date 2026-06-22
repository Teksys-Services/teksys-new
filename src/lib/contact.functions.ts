/* eslint-disable prettier/prettier */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendEmail } from "./mailer";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().max(160).optional().or(z.literal("")),
  // Optional course/service context (for enroll & request-info forms)
  topic: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(2, "Please add a short message").max(4000),
  source: z.enum(["contact", "enroll", "service"]).default("contact"),
});

export type ContactInput = z.infer<typeof ContactSchema>;

type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export const sendContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as ContactInput)
  .handler(async ({ data }) => {
    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || "Please check the form and try again.",
      } satisfies ContactResult;
    }

    const submission = parsed.data;
    const admin = process.env.ADMIN_EMAIL || "admin@teksys-services.com";
    const fromEmail = process.env.EMAIL_ADDRESS || "admin@teksys-services.com";

    // Verify SMTP is configured
    if (!process.env.SMTP_SERVER || !process.env.SMTP_PORT || !process.env.EMAIL_PASSWORD) {
      return {
        ok: false,
        error: "Email service is not configured. Please contact admin@teksys-services.com directly.",
      } satisfies ContactResult;
    }

    const sourceLabel =
      submission.source === "enroll"
        ? "Course Enrolment"
        : submission.source === "service"
          ? "Service Enquiry"
          : "Contact Form";

    const adminHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0">New ${esc(sourceLabel)} submission — TEKSYS</h2>
        <table style="width:100%;border-collapse:collapse" cellpadding="8">
          <tr><td><b>Name</b></td><td>${esc(submission.name)}</td></tr>
          <tr><td><b>Email</b></td><td>${esc(submission.email)}</td></tr>
          ${submission.phone ? `<tr><td><b>Phone</b></td><td>${esc(submission.phone)}</td></tr>` : ""}
          ${submission.company ? `<tr><td><b>Company</b></td><td>${esc(submission.company)}</td></tr>` : ""}
          ${submission.topic ? `<tr><td><b>Topic</b></td><td>${esc(submission.topic)}</td></tr>` : ""}
          ${submission.subject ? `<tr><td><b>Subject</b></td><td>${esc(submission.subject)}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px">Message</h3>
        <p style="white-space:pre-wrap;background:#f5f6ff;padding:14px;border-radius:8px">${esc(submission.message)}</p>
      </div>`;

    const userHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#2a18b0">Thanks for reaching out to TEKSYS</h2>
        <p>Hi ${esc(submission.name)},</p>
        <p>We've received your ${esc(sourceLabel.toLowerCase())} and our team will get back to you within 1–2 business days.</p>
        <p><b>Your message</b></p>
        <p style="white-space:pre-wrap;background:#f5f6ff;padding:14px;border-radius:8px">${esc(submission.message)}</p>
        <p>Warm regards,<br/>TEKSYS Services</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="font-size:12px;color:#777">Teksys Services Pvt. Ltd. · India · Singapore · USA</p>
      </div>`;

    // Send admin notification
    const adminSent = await sendEmail({
      to: admin,
      subject: `[TEKSYS] ${sourceLabel}: ${submission.subject || submission.topic || submission.name}`,
      html: adminHtml,
      replyTo: submission.email,
    });

    if (!adminSent) {
      return {
        ok: false,
        error: "Email failed to send. Please email admin@teksys-services.com directly.",
      } satisfies ContactResult;
    }

    // Send user confirmation (silently fail if this doesn't work)
    try {
      await sendEmail({
        to: submission.email,
        subject: "We've received your message — TEKSYS",
        html: userHtml,
      });
    } catch (error) {
      // ignore confirmation failure
      console.error("Failed to send user confirmation:", error);
    }

    return { ok: true } satisfies ContactResult;
  });