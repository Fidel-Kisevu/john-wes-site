import { Link } from "@tanstack/react-router";
import { Photo, SiteFrame } from "@/components/site";
import { interestLines, type Settings } from "@/lib/content-types";

export function AboutView({ settings }: { settings: Settings }) {
  const paragraphs = settings.biography.split(/\n{2,}/).filter(Boolean);

  return (
    <SiteFrame>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Photo src={settings.portraitUrl} alt={settings.portraitAlt} ratio="portrait" priority />
          <p className="mt-4 text-sm text-muted">{settings.professionalTitle}</p>
        </div>
        <div className="md:col-span-7">
          <p className="text-sm text-oxblood">About</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">{settings.ministerName}</h1>
          <p className="mt-6 text-lg">{settings.biographySummary}</p>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <h2 className="display mt-10 text-2xl">Areas of attention</h2>
          <ul className="mt-4 space-y-2">
            {interestLines(settings.interests).map((item) => (
              <li key={item} className="border-t border-line py-2">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">{settings.credentialsNote}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/articles" search={{ category: "" }} className="border-b border-oxblood text-oxblood">Essays</Link>
            <Link to="/books" className="border-b border-line hover:border-oxblood">Books</Link>
            <Link to="/contact" className="border-b border-line hover:border-oxblood">Speaking enquiries</Link>
          </div>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: settings.ministerName,
            jobTitle: settings.professionalTitle,
            description: settings.biographySummary,
            email: settings.contactEmail,
          }).replace(/</g, "\\u003c"),
        }}
      />
    </SiteFrame>
  );
}
