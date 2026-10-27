import { createFileRoute, Link } from "@tanstack/react-router";
import { VideoEmbed } from "@/components/engage";
import { Markdown } from "@/components/markdown";
import { EditorGate } from "@/components/gate";
import { Photo, SiteFrame } from "@/components/site";
import { useDesk } from "@/components/desk";
import { loadPreview } from "@/lib/cms";

export const Route = createFileRoute("/preview/$kind/$id")({
  component: PreviewPage,
});

function PreviewPage() {
  return (
    <EditorGate>
      <PreviewBody />
    </EditorGate>
  );
}

function PreviewBody() {
  const { kind, id } = Route.useParams();
  const state = useDesk(`${kind}-${id}`, () => loadPreview({ data: { kind, id: Number(id) } }));
  if (state.loading) return <p className="bg-ivory px-5 py-16 text-sm text-muted">Opening preview…</p>;
  if (state.error) return <p className="bg-ivory px-5 py-16 text-oxblood">{state.error}</p>;
  const data = state.data;
  if (!data) return <p className="bg-ivory px-5 py-16">Nothing to preview.</p>;
  return (
    <SiteFrame>
      <p className="bg-oxblood px-5 py-3 text-center text-sm text-paper">Draft preview. Visitors cannot see this until it is published.</p>
      {data.kind === "article" && data.article ? (
        <article className="mx-auto max-w-2xl px-5 py-12">
          <h1 className="display text-4xl">{data.article.title}</h1>
          <p className="mt-4">{data.article.excerpt}</p>
          <div className="mt-6"><Photo src={data.article.heroImage} alt={data.article.heroAlt} ratio="wide" /></div>
          <div className="mt-8"><Markdown source={data.article.body} /></div>
        </article>
      ) : null}
      {data.kind === "book" && data.book ? (
        <article className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
          <Photo src={data.book.coverImage} alt={data.book.coverAlt || data.book.title} ratio="book" />
          <div>
            <h1 className="display text-4xl">{data.book.title}</h1>
            <p className="mt-4">{data.book.description}</p>
          </div>
        </article>
      ) : null}
      {data.kind === "message" && data.message ? (
        <article className="mx-auto max-w-3xl px-5 py-12">
          <h1 className="display text-4xl">{data.message.title}</h1>
          <div className="mt-6"><VideoEmbed url={data.message.videoUrl} title={data.message.title} poster={data.message.thumbnail} /></div>
          <p className="mt-6">{data.message.description}</p>
        </article>
      ) : null}
      <p className="px-5 pb-12 text-sm">
        <Link to="/admin" className="text-oxblood">Back to the desk</Link>
      </p>
    </SiteFrame>
  );
}
