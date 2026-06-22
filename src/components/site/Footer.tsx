/* eslint-disable prettier/prettier */
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/teksys-logo.png";
import { NAV, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-lg bg-white px-3 py-2">
            <img src={logo} alt="TEKSYS" className="h-7 w-auto" width={120} height={28} />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Supporting industry, academia, startups and government through technology computing,
            engineering services and semiconductor workforce development.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.linkedin.com/company/teksys-services-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X / Twitter" className="rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-md border border-white/15 p-2 text-white/80 hover:bg-white/10">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-white/70 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-indigo-glow" />
              <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-indigo-glow" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-indigo-glow" />
              <span>India · Singapore · USA<br /><span className="text-white/50">Serving clients globally</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.legalName} All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/legal" hash="privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/legal" hash="terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/legal" hash="cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}