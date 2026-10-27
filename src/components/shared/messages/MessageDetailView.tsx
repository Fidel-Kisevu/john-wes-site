import { Link } from "@tanstack/react-router";
import { ShareRow, VideoEmbed } from "@/components/engage";
import { formatDay, type Teaching, youtubeId } from "@/lib/content-types";

export function MessageDetailView({
  message,
  related,
}: {
  message: Teaching;
  related: Teaching[];
}) {
  const externalSample = Boolean(youtubeId(message.videoUrl));

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm text-oxblood">
          <Link to="/messages" search={{ series: message.series }}>{message.series || "Message"}</Link>
        </p>
        <h1 className="display mt-3 max-w-3xl text-4xl md:text-6xl">{message.title}</h1>
        <p className="mt-4 text-sm text-muted">
          {message.speaker}
          {message.scripture ? ` · ${message.scripture}` : ""}
          {message.duration ? ` · ${message.duration}` : ""}
          {message.recordedOn ? ` · ${formatDay(message.recordedOn)}` : ""}
        </p>
        <div className="mt-8 max-w-3xl">
          <VideoEmbed url={message.videoUrl} title={message.title} poster={message.thumbnail} />
          {externalSample ? (
            <p className="mt-3 text-sm text-muted">
              Sample embed for the demonstration player. It is not a recording by John Wes. Replace the link in the editor.
            </p>
          ) : null}
        </div>
        <p className="mt-8 max-w-2xl text-lg">{message.description}</p>
        <div className="mt-8">
          <ShareRow title={message.title} />
        </div>
      </article>
      {related.length > 0 ? (
        <aside className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-10">
            <h2 className="display text-2xl">Related messages</h2>
            <ul className="mt-4 divide-y divide-line">
              {related.map((item) => (
                <li key={item.id} className="py-4">
                  <Link to="/messages/$slug" params={{ slug: item.slug }} className="display text-xl hover:text-oxblood">
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted">{item.scripture}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </>
  );
}
