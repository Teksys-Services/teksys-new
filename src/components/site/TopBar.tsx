import { Phone, Mail, MapPin, Linkedin, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden w-full bg-ink text-white md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-indigo-glow">
            <Phone className="h-3.5 w-3.5" /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-indigo-glow">
            <Mail className="h-3.5 w-3.5" /> {SITE.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> India | Singapore
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/teksys-services-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtvoylxWlf-_TsyQ41x7psA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="grid h-6 w-6 place-items-center rounded-sm bg-primary text-white hover:bg-indigo-glow"
          >
            <Youtube className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}