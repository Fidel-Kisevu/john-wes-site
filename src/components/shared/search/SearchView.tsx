import { Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site";

const KIND = { article: "Essay", book: "Book", message: "Message" } as const;

export function SearchView({
  q,
  hits,
  error,
  value,
  onValueChange,
  onSubmit,
}: {
  q: string;
  hits: Array<{ kind: keyof typeof KIND; slug: string; title: string; summary?: string | null }>;
  error: string;
  value: string;
  onValueChange: (next: string) => void;
  onSubmit: () => void;
}) {
  return (
    <SiteFrame>
      <header className="mx-auto max-w-3xl px-5 pt-12 md:pt-16">
        <h1 className="display text-4xl md:text-6xl">Search</h1>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <label className="sr-only" htmlFor="q">
            Search published work
          </label>
          <input id="q" value={value} onChange={(event) => onValueChange(event.target.value)} className="field sm:flex-1" placeholder="A word, a book, a passage" />
          <button type="submit" className="inline-flex h-11 items-center justify-center bg-oxblood px-5 text-sm font-semibold text-paper">
            Search
          </button>
        </form>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-10">
        {error ? <p className="text-oxblood">{error}</p> : null}
        {!error && q.trim().length < 2 ? <p className="text-muted">Enter at least two letters. Only published work is searched.</p> : null}
        {!error && q.trim().length >= 2 && hits.length === 0 ? (
          <p>No published essays, books, or messages match “{q.trim()}”.</p>
        ) : null}
        <ul className="divide-y divide-line">
          {hits.map((hit) => (
            <li key={`${hit.kind}-${hit.slug}`} className="py-5">
              <p className="text-sm text-oxblood">{KIND[hit.kind]}</p>
              <Link
                to={hit.kind === "article" ? "/articles/$slug" : hit.kind === "book" ? "/books/$slug" : "/messages/$slug"}
                params={{ slug: hit.slug }}
                className="display text-2xl hover:text-oxblood"
              >
                {hit.title}
              </Link>
              {hit.summary ? <p className="mt-2 text-sm text-muted">{hit.summary}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </SiteFrame>
  );
}
