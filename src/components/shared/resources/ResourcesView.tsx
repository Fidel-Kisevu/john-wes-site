import { Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site";

import type { Article, Book, Teaching } from "@/lib/content-types";

export function ResourcesView({
  data,
}: {
  data: {
    essays: Article[];
    books: Book[];
    messages: Teaching[];
  };
}) {
  return (
    <SiteFrame>
      <header className="mx-auto max-w-6xl px-5 pt-12 md:pt-16">
        <p className="text-sm text-oxblood">Start here</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Resources</h1>
        <p className="mt-4 max-w-2xl">A short path through the shelf, rather than everything at once.</p>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-3">
        <section>
          <h2 className="display text-2xl">If you are new</h2>
          <ul className="mt-4 space-y-4">
            {data.essays.slice(0, 2).map((essay) => (
              <li key={essay.id}>
                <Link to="/articles/$slug" params={{ slug: essay.slug }} className="hover:text-oxblood">
                  {essay.title}
                </Link>
                <p className="text-sm text-muted">{essay.categoryName}</p>
              </li>
            ))}
            {data.books[0] ? (
              <li>
                <Link to="/books/$slug" params={{ slug: data.books[0].slug }} className="hover:text-oxblood">
                  {data.books[0].title}
                </Link>
                <p className="text-sm text-muted">Book</p>
              </li>
            ) : null}
          </ul>
        </section>
        <section>
          <h2 className="display text-2xl">For a congregation</h2>
          <ul className="mt-4 space-y-4">
            {data.messages.map((message) => (
              <li key={message.id}>
                <Link to="/messages/$slug" params={{ slug: message.slug }} className="hover:text-oxblood">
                  {message.title}
                </Link>
                <p className="text-sm text-muted">{message.scripture}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="display text-2xl">On the shelf</h2>
          <ul className="mt-4 space-y-4">
            {data.books.map((book) => (
              <li key={book.id}>
                <Link to="/books/$slug" params={{ slug: book.slug }} className="hover:text-oxblood">
                  {book.title}
                </Link>
                <p className="text-sm text-muted">{book.publicationYear}</p>
              </li>
            ))}
          </ul>
          <Link to="/search" search={{ q: "" }} className="mt-6 inline-block text-sm text-oxblood">
            Search the library
          </Link>
        </section>
      </div>
    </SiteFrame>
  );
}
