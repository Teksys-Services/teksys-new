/* eslint-disable prettier/prettier */
import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContact } from "@/lib/contact.functions";

type Props = {
  source?: "contact" | "enroll" | "service";
  topic?: string;
  compact?: boolean;
  title?: string;
};

export function ContactForm({ source = "contact", topic, compact, title }: Props) {
  const submit = useServerFn(sendContact);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      subject: String(fd.get("subject") || ""),
      topic: topic || String(fd.get("topic") || ""),
      message: String(fd.get("message") || ""),
      source,
    };
    try {
      const result = await submit({ data: payload });
      if (!result.ok) {
        setStatus("error");
        setError(result.error);
        return;
      }
      setStatus("success");
      formRef.current?.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(prettifyError(err));
    }
  }

  function prettifyError(err: unknown): string {
    const raw = err instanceof Error ? err.message : String(err ?? "");
    const trimmed = raw.trim();
    if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
      try {
        const parsed = JSON.parse(trimmed);
        const issues = Array.isArray(parsed) ? parsed : parsed?.issues;
        if (Array.isArray(issues) && issues[0]?.message) return issues[0].message;
      } catch {
        // ignore
      }
    }
    return trimmed || "Something went wrong. Please try again.";
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-3 text-xl font-semibold">Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you — we've emailed you a confirmation and our team will respond within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  const input =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
      {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="name">Name *</label>
          <input id="name" name="name" required minLength={2} maxLength={120} className={input} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required maxLength={200} className={input} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={40} className={input} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="company">Company / Institute</label>
          <input id="company" name="company" maxLength={160} className={input} />
        </div>
      </div>
      {!topic && source !== "enroll" ? (
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="subject">Subject</label>
          <input id="subject" name="subject" maxLength={160} className={input} />
        </div>
      ) : null}
      {topic ? (
        <p className="rounded-md bg-secondary px-3 py-2 text-xs text-secondary-foreground">
          Regarding: <span className="font-semibold">{topic}</span>
        </p>
      ) : null}
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">Message *</label>
        <textarea id="message" name="message" required minLength={2} maxLength={4000} rows={5} className={input} />
      </div>
      {status === "error" && (
        <div className="flex items-start gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {status === "loading" ? "Sending…" : source === "enroll" ? "Request enrolment info" : "Send message"}
      </button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}