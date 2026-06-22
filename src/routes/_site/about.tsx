import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import lab from "@/assets/about-lab.jpg";
import advisor from "@/assets/dr-kumud-ranjan.jpg";
import { Section, SectionTitle } from "@/components/site/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About TEKSYS · Semiconductor & Defence Technology" },
      {
        name: "description",
        content:
          "TEKSYS supports industry, academia, startups and government with semiconductor consulting, MMIC design and workforce development across India, Singapore and the USA.",
      },
      { property: "og:title", content: "About TEKSYS" },
      {
        property: "og:description",
        content:
          "Founded by experienced defence and semiconductor technologists — combining engineering services with skill development.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-radial text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering teams behind <span className="text-gradient-brand">next-generation</span>{" "}
            semiconductor programs
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            TEKSYS partners with industry, academia, startups and government organizations to
            accelerate semiconductor, defence and advanced technology programs — combining
            engineering services with structured workforce development.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={lab}
            alt="Semiconductor cleanroom"
            className="rounded-3xl border border-border object-cover"
            width={1400}
            height={900}
            loading="lazy"
          />
          <div>
            <SectionTitle
              eyebrow="Our mission"
              title="Innovate · Train · Transform"
              description="We bridge advanced engineering services and structured skill development so that India, Singapore and the USA build resilient semiconductor capability — across GaN, SiC, RF, power electronics and defence systems."
            />
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Trusted advisor for defence electronics and semiconductor programs",
                "Fabless flow expertise — design, layout, tape-out, measurement",
                "Hands-on training academy with global certification",
                "Operating from India, Singapore and the USA",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-secondary/40">
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Lead Technical Advisor & Mentor"
                title="Dr. Kumud Ranjan"
                description="Cofounder & Director, Teksys Services Pvt. Ltd. — a defence and semiconductor technologist with two decades of practical experience."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Former Scientist", v: "DRDO" },
                  { k: "Specialisation", v: "GaN · RF · MMIC" },
                  { k: "Experience", v: "20+ years" },
                  { k: "Role", v: "Mentor & Strategist" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p>
                    <p className="mt-1 text-base font-semibold">{s.v}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-indigo-glow"
              >
                Connect with our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-white">
              <img
                src={advisor}
                alt="Dr. Kumud Ranjan"
                className="h-full w-full object-cover"
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Global footprint"
          title="Operating across three continents"
          description="Working with semiconductor, defence and academic partners across India, Singapore and the USA."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {SITE.locations.map((l) => (
            <div key={l} className="card-elevated rounded-2xl p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Office</p>
              <p className="mt-2 text-2xl font-bold">{l}</p>
              <p className="mt-1 text-sm text-muted-foreground">Serving clients globally</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}