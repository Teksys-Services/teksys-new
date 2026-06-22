import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Zap,
  Layers,
  GraduationCap,
  Wrench,
  Microscope,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Hexagon,
  MonitorPlay,
  Network,
  ClipboardList,
  Handshake,
  Factory,
  Radio,
} from "lucide-react";
import hero from "@/assets/hero-semiconductor.jpg";
import advisor from "@/assets/dr-kumud-ranjan.jpg";
import partnerTdx from "@/assets/partner-techdatax.jpg";
import partnerAligned from "@/assets/partner-aligned-test.jpg";
import partnerSemicom from "@/assets/partner-semicom.jpg";
import collageGan from "@/assets/service-gan.jpg";
import collageMmic from "@/assets/service-rf.jpg";
import collageTraining from "@/assets/training-classroom.jpg";
import { SERVICES, COURSES, SITE } from "@/lib/site";
import { Section, SectionTitle, SectionEyebrow } from "@/components/site/Section";

const ICONS = { Cpu, Zap, Layers, GraduationCap, Wrench, Microscope } as const;

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "TEKSYS · Semiconductor, Defence & Advanced Technology Solutions" },
      {
        name: "description",
        content:
          "TEKSYS delivers GaN/SiC consulting, fabless MMIC design and semiconductor skill training for industry, defence, academia and government — across India, Singapore and the USA.",
      },
      { property: "og:title", content: "TEKSYS · Semiconductor & Advanced Technology Solutions" },
      {
        property: "og:description",
        content:
          "GaN/SiC technology consulting, fabless MMIC design, and a global semiconductor skill training academy.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <PillarGrid />
      <ServicesPreview />
      <TrainingPreview />
      <AdvisorBlock />
      <Partners />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
          >
            Semiconductor, Defence &amp; Advance Technology Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-primary"
          >
            Supporting Industry, Academic, Startup &amp; Government Organization Through Technology
            <br />
            Computing, Engineering Services &amp; Semiconductor Workforce Development
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          <HeroCard
            img={collageGan}
            eyebrow="GaN Technology"
            title="Consulting"
            position="top"
            className="aspect-[4/3]"
          />
          <HeroCard
            img={collageMmic}
            title="fabless & MMIC design and Development"
            caption="Semiconductor Fabless & MMIC Design and Development"
            className="aspect-[4/3]"
          />
          <HeroCard
            img={collageTraining}
            title="semiconductor skill training on GaN and SiC +"
            className="col-span-2 aspect-[16/7]"
          />
        </motion.div>
      </div>
      <img src={hero} alt="" className="hidden" aria-hidden />
    </section>
  );
}

function HeroCard({
  img,
  eyebrow,
  title,
  caption,
  position = "bottom",
  className = "",
}: {
  img: string;
  eyebrow?: string;
  title: string;
  caption?: string;
  position?: "top" | "bottom";
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-md shadow-md ${className}`}>
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
      <div
        className={`absolute inset-x-0 ${position === "top" ? "top-0 p-4" : "bottom-0 p-4"} text-white`}
      >
        {eyebrow && <p className="text-lg font-bold leading-tight">{eyebrow}</p>}
        <p className={`${eyebrow ? "text-sm" : "text-lg font-bold leading-tight"}`}>{title}</p>
        {caption && <p className="mt-1 text-[11px] leading-snug text-white/80">{caption}</p>}
      </div>
    </div>
  );
}

const PILL_ITEMS = [
  { n: "01", label: "Semiconductor Fundamentals", icon: Cpu, color: "bg-amber-200 text-amber-900", num: "bg-amber-500" },
  { n: "02", label: "GaN & SiC Technologies", icon: Hexagon, color: "bg-emerald-200 text-emerald-900", num: "bg-emerald-600" },
  { n: "03", label: "Device Simulation", icon: MonitorPlay, color: "bg-cyan-200 text-cyan-900", num: "bg-cyan-600" },
  { n: "04", label: "RF & GaN Applications", icon: Radio, color: "bg-blue-200 text-blue-900", num: "bg-blue-600" },
  { n: "05", label: "SiC / GaN Power Electronics", icon: Network, color: "bg-fuchsia-200 text-fuchsia-900", num: "bg-fuchsia-500" },
  { n: "06", label: "Fabless Design Flow", icon: Layers, color: "bg-orange-200 text-orange-900", num: "bg-orange-500" },
  { n: "07", label: "Mini Project & Presentation", icon: ClipboardList, color: "bg-pink-200 text-pink-900", num: "bg-pink-500" },
  { n: "08", label: "Fabless GaN MMIC", icon: Cpu, color: "bg-teal-200 text-teal-900", num: "bg-teal-600" },
  { n: "09", label: "GaN Technology Partner", icon: Handshake, color: "bg-lime-200 text-lime-900", num: "bg-lime-600" },
  { n: "10", label: "OSAT Lab and Process Lab", icon: Factory, color: "bg-violet-200 text-violet-900", num: "bg-violet-600" },
];

function PillarGrid() {
  return (
    <section className="bg-background pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 lg:gap-2">
          {PILL_ITEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative flex flex-col items-center rounded-2xl px-2 pb-3 pt-5 text-center ${p.color}`}
              >
                <span
                  className={`absolute -top-3 grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${p.num}`}
                >
                  {p.n}
                </span>
                <div className="my-2 grid h-12 w-12 place-items-center rounded-lg bg-white/70">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="mt-1 text-[11px] font-semibold leading-tight">{p.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <SectionTitle
        eyebrow="What we do"
        title={<>End-to-end semiconductor &<br className="hidden sm:block" /> deep-tech engineering</>}
        description="From GaN device consulting to MMIC tape-out and workforce training — we partner with engineering teams to deliver advanced technology programs."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group card-elevated rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                hash={s.slug}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function TrainingPreview() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Training Academy</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Semiconductor Skill <span className="text-gradient-brand">Training Academy</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Eight industry-led programs covering the full semiconductor value chain — taught by
              experienced practitioners with hands-on labs, projects and global certification.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {[
              { icon: ShieldCheck, label: "Industry Expert Faculty" },
              { icon: Globe2, label: "Global Certification with TechDataX" },
              { icon: GraduationCap, label: "Placement Assistance" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs"
              >
                <b.icon className="h-3.5 w-3.5 text-indigo-glow" /> {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.slice(0, 8).map((course) => {
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
              <Link
                key={course.slug}
                to="/training"
                hash={course.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/50"
              >
                {/* Number Circle */}
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${color.bg} ${color.text}`}
                >
                  {course.number}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-black">{course.title}</h3>

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
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfoZY580yp_rCbRtd73i_NRfD5PcstWpMFEWJTTbthPJt27mg/viewform", "_blank");
                  }}
                  className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow"
                >
                  ENROLL NOW
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AdvisorBlock() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary">
            <img
              src={advisor}
              alt="Dr. Kumud Ranjan, Director, Teksys Services"
              width={400}
              height={500}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl sm:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              20+ years experience
            </p>
            <p className="text-sm font-semibold">Defence Electronics · Semiconductor</p>
          </div>
        </motion.div>
        <div>
          <SectionEyebrow>Lead Technical Advisor & Mentor</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Dr. Kumud Ranjan</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cofounder & Director, Teksys Services Pvt. Ltd.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Former Scientist, DRDO",
              "GaN Technologist & RF / MMIC Expert",
              "20+ years in Defence Electronics and Semiconductor Technologies",
              "Mentor, Consultant and Technology Strategist",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-indigo-glow"
          >
            Know more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Partners() {
  const items = [
    { name: "TechDataX Singapore", img: partnerTdx },
    { name: "Aligned Test", img: partnerAligned },
    { name: "Semicom Consultancy Services", img: partnerSemicom },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Global Partners & Certifications
        </p>
        <div className="mt-8 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.name}
              className="flex h-20 w-full max-w-[260px] items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-border"
            >
              <img
                src={p.img}
                alt={p.name}
                className="max-h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-14">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-glow/40 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a semiconductor program in mind?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Whether it's a GaN MMIC, SiC power module or a workforce training rollout — talk to
              our engineering team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}