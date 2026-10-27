import { Link } from "@tanstack/react-router";
import { formatDay, type Teaching } from "@/lib/content-types";

export function MessagesSection({ messages }: { messages: Teaching[] }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl">Latest messages</h2>
          <Link to="/messages" search={{ series: "" }} className="text-sm text-oxblood">
            All messages
          </Link>
        </div>
        {messages.length === 0 ? (
          <p className="mt-6 text-muted">Recorded messages will be listed here.</p>
        ) : (
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {messages.map((message) => (
              <li key={message.id} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                <span className="text-sm text-oxblood md:col-span-3">{message.scripture || message.series}</span>
                <Link to="/messages/$slug" params={{ slug: message.slug }} className="display text-xl hover:text-oxblood md:col-span-6">
                  {message.title}
                </Link>
                <span className="text-sm text-muted md:col-span-3 md:text-right">
                  {message.duration}
                  {message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
