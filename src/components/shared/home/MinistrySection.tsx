import { Link } from "@tanstack/react-router";
import { interestLines } from "@/lib/content-types";
import type { Settings } from "@/lib/content-types";

export function MinistrySection({ settings }: { settings: Settings }) {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm text-oxblood">The ministry</p>
          <h2 className="display mt-3 text-3xl">A teacher who stays with the text</h2>
        </div>
        <div className="md:col-span-8">
          <blockquote className="display text-2xl leading-snug md:text-3xl">{settings.pullQuote}</blockquote>
          <p className="mt-6 max-w-2xl">{settings.biographySummary}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {interestLines(settings.interests).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/about" className="mt-6 inline-block border-b border-oxblood text-sm text-oxblood">
            Read the biography
          </Link>
        </div>
      </div>
    </section>
  );
}
