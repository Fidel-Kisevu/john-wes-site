import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import type { Book } from "@/lib/content-types";

export function BooksSection({ firstBook, otherBooks }: { firstBook: Book | undefined; otherBooks: Book[] }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl">Books</h2>
          <Link to="/books" className="text-sm text-oxblood">
            All books
          </Link>
        </div>
        {firstBook === undefined && otherBooks.length === 0 ? (
          <p className="mt-6 text-muted">No books published yet.</p>
        ) : (
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            {firstBook ? (
              <Link to="/books/$slug" params={{ slug: firstBook.slug }} className="md:col-span-5">
                <Photo src={firstBook.coverImage} alt={firstBook.coverAlt || firstBook.title} ratio="book" />
                <p className="display mt-4 text-2xl">{firstBook.title}</p>
                <p className="mt-1 text-sm text-muted">{firstBook.subtitle}</p>
              </Link>
            ) : null}
            <ul className="md:col-span-7 md:pt-2">
              {otherBooks.map((book) => (
                <li key={book.id} className="border-t border-line py-5 first:border-t-0">
                  <Link to="/books/$slug" params={{ slug: book.slug }} className="display text-2xl hover:text-oxblood">
                    {book.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted">
                    {book.subtitle}
                    {book.publicationYear ? ` · ${book.publicationYear}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
