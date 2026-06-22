import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Globe2, ShieldCheck, Users } from "lucide-react";
import classroom from "@/assets/training-classroom.jpg";
import { COURSES } from "@/lib/site";
import { Section, SectionTitle, SectionEyebrow } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/_site/training")({
  head: () => ({
    meta: [
      { title: "Semiconductor Skill Training Academy · TEKSYS" },
      {
        name: "description",
        content:
          "Eight industry-led semiconductor programs — GaN, SiC, RF, sensors, power electronics and more — with hands-on labs, global certification and placement assistance.",
      },
      { property: "og:title", content: "TEKSYS Semiconductor Training Academy" },
      {
        property: "og:description",
        content:
          "Industry expert faculty, hands-on labs, global certification with TechDataX, placement assistance and flexible learning.",
      },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const [requestSlug, setRequestSlug] = useState<string | null>(null);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-radial text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionEyebrow>Training Academy</SectionEyebrow>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Semiconductor Skill <span className="text-gradient-brand">Training Academy</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/75">
              Industry-led programs designed by practitioners — covering materials, devices,
              fabrication, RF/MMIC, power electronics and advanced semiconductor systems.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { i: ShieldCheck, t: "Industry Expert Faculty" },
                { i: GraduationCap, t: "Hands-on Labs & Projects" },
                { i: Globe2, t: "Global Certification with TechDataX" },
                { i: Users, t: "Placement Assistance" },
              ].map((x) => (
                <span key={x.t} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm">
                  <x.i className="h-4 w-4 text-indigo-glow" /> {x.t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-white/60">
              Who can join: Engineering Students · Faculty · Researchers · Working Professionals · Industry Experts
            </p>
          </div>
          <div className="relative">
            <img
              src={classroom}
              alt="TEKSYS semiconductor training classroom"
              className="glow-ring rounded-3xl object-cover"
              width={1400}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Certification Tracks"
          title="Our 8 Certification Tracks"
          description="Choose your path to semiconductor expertise"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => {
            const colors = [
              { bg: "bg-blue-900", text: "text-white" },
              { bg: "bg-green-700", text: "text-white" },
              { bg: "bg-blue-600", text: "text-white" },
              { bg: "bg-red-700", text: "text-white" },
              { bg: "bg-teal-600", text: "text-white" },
              { bg: "bg-pink-600", text: "text-white" },
              { bg: "bg-blue-800", text: "text-white" },
              { bg: "bg-amber-700", text: "text-white" },
            ];
            const color = colors[parseInt(course.number) - 1] || colors[0];
            
            return (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/50"
              >
                {/* Number Circle */}
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${color.bg} ${color.text}`}
                >
                  {course.number}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold">{course.title}</h3>

                {/* Description */}
                <p className="mb-4 flex-grow text-sm text-muted-foreground">
                  {course.overview}
                </p>

                {/* Key Learning Areas */}
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    Key Learning Areas
                  </h4>
                  <ul className="space-y-1.5">
                    {course.keyLearningAreas.map((area) => (
                      <li key={area} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enroll Button */}
                <button
                  type="button"
                  onClick={() => {
                    setRequestSlug(course.slug);
                    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow"
                >
                  ENROLL NOW
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      <section id="enroll" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Enrol"
                title={requestSlug ? "Request course information" : "Get details for any program"}
                description="Tell us a bit about you and the program you're interested in — our academy team will reach out within 1–2 business days."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {COURSES.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setRequestSlug(c.slug)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                      requestSlug === c.slug
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="mr-1 font-mono text-xs text-primary">{c.number}</span>
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm
                source="enroll"
                topic={
                  requestSlug
                    ? COURSES.find((c) => c.slug === requestSlug)?.title ?? undefined
                    : undefined
                }
              />
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}