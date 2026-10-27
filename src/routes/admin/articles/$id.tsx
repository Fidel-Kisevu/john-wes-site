import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Actions, Area, ImagePicker, Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorArticle, removeArticle, saveArticle } from "@/lib/cms";
import { slugify, type Article, type Category, type MediaItem, type Status } from "@/lib/content-types";
import { useRouteContext } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/articles/$id")({
  component: ArticleEditor,
});

type Form = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  heroImage: string;
  heroAlt: string;
  categoryId: string;
  authorName: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  publishedOn: string;
  slugTouched: boolean;
};

function fromArticle(article: Article): Form {
  return {
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    body: article.body,
    heroImage: article.heroImage,
    heroAlt: article.heroAlt,
    categoryId: article.categoryId ? String(article.categoryId) : "",
    authorName: article.authorName,
    featured: article.featured,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription,
    publishedOn: article.publishedAt ? article.publishedAt.slice(0, 10) : "",
    slugTouched: true,
  };
}

function ArticleEditor() {
  const { id } = Route.useParams();
  const settings = useRouteContext({ from: "__root__" }).settings;
  const state = useDesk(id, () => loadEditorArticle({ data: id === "new" ? null : Number(id) }));
  const [form, setForm] = useState<Form | null>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!state.data) return;
    if (state.data.article) setForm(fromArticle(state.data.article));
    else {
      setForm({
        title: "",
        slug: "",
        excerpt: "",
        body: "",
        heroImage: "/images/desk.jpg",
        heroAlt: "A writing desk in morning light",
        categoryId: "",
        authorName: settings.ministerName,
        featured: false,
        seoTitle: "",
        seoDescription: "",
        publishedOn: "",
        slugTouched: false,
      });
    }
  }, [state.data, settings.ministerName]);

  if (state.loading || !form || !state.data) return <p className="text-sm text-muted">{state.error || "Loading essay…"}</p>;
  if (id !== "new" && !state.data.article) return <p>That essay is not on the desk.</p>;

  const categories: Category[] = state.data.categories;
  const media: MediaItem[] = state.data.media;

  function patch(partial: Partial<Form>) {
    setForm((current) => (current ? { ...current, ...partial } : current));
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
        const status: Status = submitter?.value === "published" ? "published" : "draft";
        setPending(true);
        setMessage("");
        void saveArticle({
          data: {
            id: id === "new" ? null : Number(id),
            ...form,
            categoryId: form.categoryId ? Number(form.categoryId) : null,
            status,
          },
        })
          .then(async (result) => {
            if (!result.ok) {
              setMessage(result.message);
              return;
            }
            setMessage(status === "published" ? "Published." : "Draft saved. It is not on the public site.");
            await router.invalidate();
            if (id === "new") {
              await navigate({ to: "/admin/articles/$id", params: { id: String(result.id) } });
            } else state.reload();
          })
          .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not save."))
          .finally(() => setPending(false));
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h1 className="display text-4xl">{id === "new" ? "New essay" : "Edit essay"}</h1>
        {id !== "new" ? (
          <Link to="/preview/$kind/$id" params={{ kind: "article", id }} className="text-sm text-oxblood">
            Preview
          </Link>
        ) : null}
      </div>
      <p className="text-sm text-muted">Blank line between paragraphs. Start a line with ## for a heading, {">"} for a quotation, or - for a list.</p>
      <div>
        <Label htmlFor="title">Title</Label>
        <TextInput
          id="title"
          value={form.title}
          onChange={(event) => {
            const title = event.target.value;
            patch(form.slugTouched ? { title } : { title, slug: slugify(title) });
          }}
        />
      </div>
      <div>
        <Label htmlFor="slug">Address</Label>
        <TextInput id="slug" value={form.slug} onChange={(event) => patch({ slug: slugify(event.target.value), slugTouched: true })} />
      </div>
      <div>
        <Label htmlFor="excerpt">Summary</Label>
        <Area id="excerpt" value={form.excerpt} onChange={(event) => patch({ excerpt: event.target.value })} />
      </div>
      <div>
        <Label htmlFor="body">Body</Label>
        <Area id="body" value={form.body} onChange={(event) => patch({ body: event.target.value })} className="field min-h-80" />
      </div>
      <ImagePicker
        label="Hero image"
        value={form.heroImage}
        alt={form.heroAlt}
        media={media}
        onChange={(heroImage) => patch({ heroImage })}
        onAlt={(heroAlt) => patch({ heroAlt })}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="category">Category</Label>
          <select id="category" className="field" value={form.categoryId} onChange={(event) => patch({ categoryId: event.target.value })}>
            <option value="">None</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <TextInput id="author" value={form.authorName} onChange={(event) => patch({ authorName: event.target.value })} />
        </div>
        <div>
          <Label htmlFor="date">Publication date</Label>
          <TextInput id="date" type="date" value={form.publishedOn} onChange={(event) => patch({ publishedOn: event.target.value })} />
        </div>
        <label className="mt-7 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.featured} onChange={(event) => patch({ featured: event.target.checked })} />
          Feature on the homepage
        </label>
      </div>
      <div>
        <Label htmlFor="seo-title">SEO title</Label>
        <TextInput id="seo-title" value={form.seoTitle} onChange={(event) => patch({ seoTitle: event.target.value })} />
      </div>
      <div>
        <Label htmlFor="seo-desc">SEO description</Label>
        <Area id="seo-desc" value={form.seoDescription} onChange={(event) => patch({ seoDescription: event.target.value })} />
      </div>
      <Actions
        pending={pending}
        message={message}
        onDelete={
          id === "new"
            ? undefined
            : () => {
                void removeArticle({ data: Number(id) }).then(() => navigate({ to: "/admin/articles" }));
              }
        }
      />
    </form>
  );
}
