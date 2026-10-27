import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import { formatDay, type Teaching } from "@/lib/content-types";

export function MessagesIndexView({
  series,
  data,
}: {
  series: string;
  data: { series: string[]; messages: Teaching[] };
}) {
  return (
    <>
      <header className="mx-auto max-w-6xl px-5 pt-12 md:pt-16">
        <p className="text-sm text-oxblood">Recorded</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Messages</h1>
        <p className="mt-4 max-w-2xl">Sermons, series, and conversations. A player loads only after you choose to play.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link to="/messages" search={{ series: "" }} className={series ? "border border-line px-3 py-2 text-sm" : "border border-oxblood px-3 py-2 text-sm text-oxblood"}>
            All
          </Link>
          {data.series.map((item) => (
            <Link
              key={item}
              to="/messages"
              search={{ series: item }}
              className={series === item ? "border border-oxblood px-3 py-2 text-sm text-oxblood" : "border border-line px-3 py-2 text-sm"}
            >
              {item}
            </Link>
          ))}
        </div>
      </header>
      {data.messages.length === 0 ? (
        <p className="mx-auto max-w-6xl px-5 py-16 text-muted">No messages in this series yet.</p>
      ) : (
        <ul className="mx-auto max-w-6xl px-5 py-8">
          {data.messages.map((message) => (
            <li key={message.id} className="grid items-center gap-6 border-t border-line py-7 md:grid-cols-12">
              <div className="md:col-span-4">
                <Photo src={message.thumbnail} alt={message.thumbnailAlt || ""} ratio="wide" />
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-oxblood">{message.scripture || message.series}</p>
                <h2 className="display mt-2 text-3xl">
                  <Link to="/messages/$slug" params={{ slug: message.slug }} className="hover:text-oxblood">
                    {message.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-xl">{message.description}</p>
                <p className="mt-3 text-sm text-muted">
                  {message.speaker}
                  {message.duration ? ` · ${message.duration}` : ""}
                  {message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
