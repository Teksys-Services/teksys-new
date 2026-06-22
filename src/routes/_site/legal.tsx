import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/legal")({
  head: () => ({
    meta: [
      { title: "Legal · Privacy, Terms & Cookies · TEKSYS" },
      { name: "description", content: "Privacy Policy, Terms of Service and Cookie Policy for TEKSYS Services." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <Section className="prose-headings:scroll-mt-24">
      <h1 className="text-4xl font-bold tracking-tight">Legal</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Summary policies for {SITE.legalName}. For specific questions, contact{" "}
        <a className="text-primary underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <div className="mt-10 space-y-12">
        <section id="privacy" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
          <p className="mt-3 text-muted-foreground">
            We collect only the information you provide via our forms (name, email, phone, company
            and message) to respond to your enquiry, deliver requested services and improve our
            communications. We do not sell your information. Submissions are stored securely and
            retained only as long as needed for the stated purpose.
          </p>
        </section>
        <section id="terms" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Terms of Service</h2>
          <p className="mt-3 text-muted-foreground">
            Content on this site is provided for general information about TEKSYS services and
            training programs. Engagement terms for consulting, MMIC design or training are
            governed by individual agreements signed between {SITE.legalName} and its clients.
          </p>
        </section>
        <section id="cookies" className="scroll-mt-24">
          <h2 className="text-2xl font-bold">Cookie Policy</h2>
          <p className="mt-3 text-muted-foreground">
            This website uses only essential cookies required to operate the site. We do not use
            third-party advertising cookies. Embedded maps may set cookies governed by their
            respective providers.
          </p>
        </section>
      </div>
    </Section>
  );
}