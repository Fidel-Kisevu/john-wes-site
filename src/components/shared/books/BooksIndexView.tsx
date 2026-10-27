import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import type { Book } from "@/lib/content-types";

export function BooksIndexView({ books }: { books: Book[] }) {
  return (
    <>
      <header className="mx-auto max-w-6xl px-5 pt-12 pb-4 md:pt-16">
        <p className="text-sm text-oxblood">Publications</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Books</h1>
        <p className="mt-4 max-w-2xl">
          Short books for congregations and readers who want Scripture kept in the foreground. Purchase links on this demonstration go to placeholder addresses and do not take payment.
        </p>
      </header>
      {books.length === 0 ? (
        <p className="mx-auto max-w-6xl px-5 py-16 text-muted">No books published yet.</p>
      ) : (
        <ul className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, index) => (
            <li key={book.id} className={index === 0 ? "sm:col-span-2" : ""}>
              <Link to="/books/$slug" params={{ slug: book.slug }}>
                <Photo src={book.coverImage} alt={book.coverAlt || book.title} ratio="book" className={index === 0 ? "max-w-md" : ""} />
                <h2 className="display mt-4 text-2xl">{book.title}</h2>
                <p className="mt-1 text-sm text-muted">
                  {book.subtitle}
                  {book.publicationYear ? ` · ${book.publicationYear}` : ""}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
