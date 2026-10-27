import { ContactForm } from "@/components/engage";
import { SiteFrame } from "@/components/site";
import type { Settings } from "@/lib/content-types";

export function ContactView({ settings }: { settings: Settings }) {
  return (
    <SiteFrame>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="text-sm text-oxblood">Correspondence</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">Contact</h1>
          <p className="mt-5">{settings.speakingNote}</p>
          <p className="mt-6 text-sm">
            <a className="border-b border-line hover:border-oxblood" href={`mailto:${settings.contactEmail}`}>
              {settings.contactEmail}
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">{settings.footerNote}</p>
        </div>
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </SiteFrame>
  );
}
