import { Link } from "@tanstack/react-router";
import { Photo, SiteFrame } from "@/components/site";
import { safeHttpUrl, type Book } from "@/lib/content-types";

export function BookDetailView({ book, related }: { book: Book; related: Book[] }) {
  const purchase = safeHttpUrl(book.purchaseUrl);
  const paragraphs = book.description.split(/\n{2,}/).filter(Boolean);

  return (
    <SiteFrame>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Photo src={book.coverImage} alt={book.coverAlt || book.title} ratio="book" priority className="max-w-md" />
        </div>
        <div className="md:col-span-7">
          <p className="text-sm text-oxblood">
            <Link to="/books">Books</Link>
          </p>
          <h1 className="display mt-3 text-4xl md:text-5xl">{book.title}</h1>
          {book.subtitle ? <p className="mt-3 text-lg text-muted">{book.subtitle}</p> : null}
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted">Author</dt>
              <dd>{book.authorName}</dd>
            </div>
            {book.publisher ? (
              <div>
                <dt className="text-muted">Publisher</dt>
                <dd>{book.publisher}</dd>
              </div>
            ) : null}
            {book.publicationYear ? (
              <div>
                <dt className="text-muted">Year</dt>
                <dd>{book.publicationYear}</dd>
              </div>
            ) : null}
            {book.isbn ? (
              <div>
                <dt className="text-muted">ISBN</dt>
                <dd>{book.isbn}</dd>
              </div>
            ) : null}
            {book.price ? (
              <div>
                <dt className="text-muted">Sample price</dt>
                <dd>
                  {book.currency ? `${book.currency} ` : ""}
                  {book.price}
                </dd>
              </div>
            ) : null}
          </dl>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          {purchase ? (
            <p className="mt-8">
              <a href={purchase} className="inline-flex h-11 items-center bg-oxblood px-5 text-sm font-semibold text-paper" rel="noopener noreferrer">
                Order link
              </a>
              <span className="mt-3 block text-sm text-muted">Placeholder retailer. This site does not take payment.</span>
            </p>
          ) : null}
        </div>
      </article>
      {related.length > 0 ? (
        <aside className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-10">
            <h2 className="display text-2xl">Other books</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Link to="/books/$slug" params={{ slug: item.slug }} className="hover:text-oxblood">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: { "@type": "Person", name: book.authorName },
            description: book.subtitle || book.description.slice(0, 240),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </SiteFrame>
  );
}
