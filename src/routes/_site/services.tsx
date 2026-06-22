import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cpu, Zap, Layers, GraduationCap, Wrench, Microscope, CheckCircle2, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Section, SectionTitle } from "@/components/site/Section";

const ICONS = { Cpu, Zap, Layers, GraduationCap, Wrench, Microscope } as const;

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services · TEKSYS" },
      {
        name: "description",
        content:
          "GaN consulting, SiC power, fabless MMIC design, semiconductor training and OSAT lab partnerships — full-stack engineering services from TEKSYS.",
      },
      { property: "og:title", content: "TEKSYS Services" },
      {
        property: "og:description",
        content:
          "End-to-end semiconductor engineering: GaN, SiC, MMIC design, training and process labs.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-radial text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering services for <span className="text-gradient-brand">advanced semiconductor</span> programs
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            From device-level consulting to fabless MMIC tape-out and workforce development —
            TEKSYS provides the engineering depth your roadmap needs.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-12">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-3xl border border-border">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-indigo-glow"
                  >
                    Discuss this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}