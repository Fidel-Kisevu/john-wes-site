import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import { formatDay, type Article } from "@/lib/content-types";

export function LeadEssaySection({ lead, rest }: { lead: Article | undefined; rest: Article[] }) {
  if (!lead) {
    return <p className="mx-auto max-w-6xl px-5 py-12 text-muted">Essays will appear here once they are published.</p>;
  }

  return (
    <section className="mt-8 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Photo src={lead.heroImage} alt={lead.heroAlt || ""} ratio="wide" />
        </div>
        <div className="flex flex-col justify-center md:col-span-5">
          <p className="text-sm text-oxblood">{lead.categoryName || "Essay"}</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            <Link to="/articles/$slug" params={{ slug: lead.slug }} className="hover:text-oxblood">
              {lead.title}
            </Link>
          </h2>
          <p className="mt-4 text-ink">{lead.excerpt}</p>
          <p className="mt-4 text-sm text-muted">{formatDay(lead.publishedAt)}</p>
        </div>
      </div>
      {rest.length > 0 ? (
        <ol className="mx-auto max-w-6xl divide-y divide-line border-t border-line px-5">
          {rest.map((essay, index) => (
            <li key={essay.id} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
              <span className="text-sm text-muted md:col-span-1">{String(index + 2).padStart(2, "0")}</span>
              <Link to="/articles/$slug" params={{ slug: essay.slug }} className="display text-2xl hover:text-oxblood md:col-span-7">
                {essay.title}
              </Link>
              <span className="text-sm text-muted md:col-span-2">{essay.categoryName}</span>
              <span className="text-sm text-muted md:col-span-2 md:text-right">{formatDay(essay.publishedAt)}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
