import { createFileRoute, Link, useNavigate, useRouteContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Actions, Area, ImagePicker, Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorBook, removeBook, saveBook } from "@/lib/cms";
import { slugify, type Book, type Status } from "@/lib/content-types";

export const Route = createFileRoute("/admin/books/$id")({ component: BookEditor });

function BookEditor() {
  const { id } = Route.useParams();
  const settings = useRouteContext({ from: "__root__" }).settings;
  const state = useDesk(id, () => loadEditorBook({ data: id === "new" ? null : Number(id) }));
  const [form, setForm] = useState<Book | null>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!state.data) return;
    setForm(
      state.data.book ?? {
        id: 0,
        title: "",
        slug: "",
        subtitle: "",
        coverImage: "/images/linen.jpg",
        coverAlt: "",
        description: "",
        authorName: settings.ministerName,
        publisher: "",
        publicationYear: "",
        isbn: "",
        price: "",
        currency: "USD",
        purchaseUrl: "",
        featured: false,
        status: "draft",
        seoTitle: "",
        seoDescription: "",
      },
    );
  }, [state.data, settings.ministerName]);

  if (state.loading || !form || !state.data) return <p className="text-sm text-muted">{state.error || "Loading book…"}</p>;
  if (id !== "new" && !state.data.book) return <p>That book is not on the desk.</p>;

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const status: Status = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value === "published" ? "published" : "draft";
        setPending(true);
        void saveBook({ data: { ...form, id: id === "new" ? null : Number(id), status } })
          .then(async (result) => {
            if (!result.ok) return setMessage(result.message);
            setMessage(status === "published" ? "Published." : "Draft saved.");
            await router.invalidate();
            if (id === "new") await navigate({ to: "/admin/books/$id", params: { id: String(result.id) } });
            else state.reload();
          })
          .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not save."))
          .finally(() => setPending(false));
      }}
    >
      <div className="flex justify-between gap-3">
        <h1 className="display text-4xl">{id === "new" ? "New book" : "Edit book"}</h1>
        {id !== "new" ? <Link to="/preview/$kind/$id" params={{ kind: "book", id }} className="text-sm text-oxblood">Preview</Link> : null}
      </div>
      <div>
        <Label htmlFor="title">Title</Label>
        <TextInput id="title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value, slug: form.slug || slugify(event.target.value) })} />
      </div>
      <div>
        <Label htmlFor="slug">Address</Label>
        <TextInput id="slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: slugify(event.target.value) })} />
      </div>
      <div>
        <Label htmlFor="subtitle">Subtitle</Label>
        <TextInput id="subtitle" value={form.subtitle} onChange={(event) => setForm({ ...form, subtitle: event.target.value })} />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Area id="description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
      </div>
      <ImagePicker label="Cover" value={form.coverImage} alt={form.coverAlt} media={state.data.media} onChange={(coverImage) => setForm({ ...form, coverImage })} onAlt={(coverAlt) => setForm({ ...form, coverAlt })} />
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="author">Author</Label><TextInput id="author" value={form.authorName} onChange={(event) => setForm({ ...form, authorName: event.target.value })} /></div>
        <div><Label htmlFor="publisher">Publisher</Label><TextInput id="publisher" value={form.publisher} onChange={(event) => setForm({ ...form, publisher: event.target.value })} /></div>
        <div><Label htmlFor="year">Year</Label><TextInput id="year" value={form.publicationYear} onChange={(event) => setForm({ ...form, publicationYear: event.target.value })} /></div>
        <div><Label htmlFor="isbn">ISBN</Label><TextInput id="isbn" value={form.isbn} onChange={(event) => setForm({ ...form, isbn: event.target.value })} /></div>
        <div><Label htmlFor="price">Price</Label><TextInput id="price" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} /></div>
        <div><Label htmlFor="currency">Currency</Label><TextInput id="currency" value={form.currency} onChange={(event) => setForm({ ...form, currency: event.target.value })} /></div>
      </div>
      <div>
        <Label htmlFor="purchase">Purchase URL</Label>
        <TextInput id="purchase" value={form.purchaseUrl} onChange={(event) => setForm({ ...form, purchaseUrl: event.target.value })} />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} />
        Feature on the homepage
      </label>
      <Actions pending={pending} message={message} onDelete={id === "new" ? undefined : () => void removeBook({ data: Number(id) }).then(() => navigate({ to: "/admin/books" }))} />
    </form>
  );
}
