import { Link, useRouteContext } from "@tanstack/react-router";
import type { Settings } from "@/lib/content-types";

function useSettings(): Settings {
  return useRouteContext({ from: "__root__" }).settings;
}

function SocialLinkItem({ label, href }: { label: string; href: string }) {
  return (
    <li key={label}>
      <a href={href} className="hover:text-oxblood" rel="noopener noreferrer">
        {label}
      </a>
    </li>
  );
}

export function SiteFooterView({ settings, socials }: { settings: Settings; socials: Array<[string, string]> }) {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="display text-3xl">{settings.ministerName}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{settings.footerNote}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Ministry</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-oxblood">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-oxblood">
                Speaking
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-oxblood">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-oxblood">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-oxblood">
                Editor
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            {socials.map(([label, href]) => (
              <SocialLinkItem key={label} label={label} href={href} />
            ))}
            <li>
              <a href={`mailto:${settings.contactEmail}`} className="hover:text-oxblood">
                {settings.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {settings.showSampleNotice ? (
        <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-muted">
          Illustrative sample for a fictional minister. Replace the biography, essays, books, and recordings before a public launch.
        </p>
      ) : (
        <div className="h-6" />
      )}
    </footer>
  );
}

export function SiteFooter() {
  const settings = useSettings();
  const socials = [
    ["YouTube", settings.youtubeUrl],
    ["X", settings.xUrl],
    ["Facebook", settings.facebookUrl],
    ["Instagram", settings.instagramUrl],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return <SiteFooterView settings={settings} socials={socials} />;
}
