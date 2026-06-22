import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe2 } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Section, SectionTitle } from "@/components/site/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact TEKSYS · Get in touch" },
      {
        name: "description",
        content:
          "Talk to TEKSYS about GaN/SiC consulting, MMIC design, semiconductor training and engineering programs. Offices across India, Singapore and the USA.",
      },
      { property: "og:title", content: "Contact TEKSYS" },
      {
        property: "og:description",
        content:
          "Reach our engineering team for semiconductor consulting, MMIC design and training programs.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-hero-radial text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build your next <span className="text-gradient-brand">semiconductor program</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Reach our engineering team to discuss services, partnerships or training enrolments.
            We typically respond within 1–2 business days.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Get in touch" title="Talk to TEKSYS" />
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <a href={SITE.phoneHref} className="text-base font-semibold hover:text-primary">{SITE.phone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-base font-semibold hover:text-primary">{SITE.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Offices</p>
                  <p className="text-base font-semibold">India · Singapore · USA</p>
                  <p className="text-sm text-muted-foreground">Serving clients globally</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Globe2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Online</p>
                  <p className="text-base font-semibold">Teksys Services</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <div className="relative h-64 w-full">
                <iframe
                  title="TEKSYS office location"
                  src="https://www.google.com/maps?q=Bengaluru%2C+India&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <ContactForm source="contact" title="Send us a message" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}