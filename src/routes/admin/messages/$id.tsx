import { createFileRoute, Link, useNavigate, useRouteContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Actions, Area, ImagePicker, Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorMessage, removeMessage, saveMessage } from "@/lib/cms";
import { slugify, type Status, type Teaching } from "@/lib/content-types";

export const Route = createFileRoute("/admin/messages/$id")({ component: MessageEditor });

function MessageEditor() {
  const { id } = Route.useParams();
  const settings = useRouteContext({ from: "__root__" }).settings;
  const state = useDesk(id, () => loadEditorMessage({ data: id === "new" ? null : Number(id) }));
  const [form, setForm] = useState<Teaching | null>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!state.data) return;
    setForm(
      state.data.message ?? {
        id: 0,
        title: "",
        slug: "",
        description: "",
        videoUrl: "",
        thumbnail: "/images/lectern.jpg",
        thumbnailAlt: "",
        speaker: settings.ministerName,
        recordedOn: "",
        duration: "",
        series: "",
        scripture: "",
        categoryId: null,
        categoryName: "",
        featured: false,
        status: "draft",
        seoTitle: "",
        seoDescription: "",
      },
    );
  }, [state.data, settings.ministerName]);

  if (state.loading || !form || !state.data) return <p className="text-sm text-muted">{state.error || "Loading message…"}</p>;
  if (id !== "new" && !state.data.message) return <p>That message is not on the desk.</p>;

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const status: Status = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value === "published" ? "published" : "draft";
        setPending(true);
        void saveMessage({ data: { ...form, id: id === "new" ? null : Number(id), status, categoryId: form.categoryId } })
          .then(async (result) => {
            if (!result.ok) return setMessage(result.message);
            setMessage(status === "published" ? "Published." : "Draft saved.");
            await router.invalidate();
            if (id === "new") await navigate({ to: "/admin/messages/$id", params: { id: String(result.id) } });
            else state.reload();
          })
          .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not save."))
          .finally(() => setPending(false));
      }}
    >
      <div className="flex justify-between">
        <h1 className="display text-4xl">{id === "new" ? "New message" : "Edit message"}</h1>
        {id !== "new" ? <Link to="/preview/$kind/$id" params={{ kind: "message", id }} className="text-sm text-oxblood">Preview</Link> : null}
      </div>
      <div><Label htmlFor="title">Title</Label><TextInput id="title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value, slug: slugify(event.target.value) })} /></div>
      <div><Label htmlFor="slug">Address</Label><TextInput id="slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: slugify(event.target.value) })} /></div>
      <div><Label htmlFor="description">Description</Label><Area id="description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /></div>
      <div><Label htmlFor="video">Video URL</Label><TextInput id="video" value={form.videoUrl} placeholder="https://www.youtube.com/watch?v=" onChange={(event) => setForm({ ...form, videoUrl: event.target.value })} /></div>
      <ImagePicker label="Thumbnail" value={form.thumbnail} alt={form.thumbnailAlt} media={state.data.media} onChange={(thumbnail) => setForm({ ...form, thumbnail })} onAlt={(thumbnailAlt) => setForm({ ...form, thumbnailAlt })} />
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="speaker">Speaker</Label><TextInput id="speaker" value={form.speaker} onChange={(event) => setForm({ ...form, speaker: event.target.value })} /></div>
        <div><Label htmlFor="date">Recorded on</Label><TextInput id="date" type="date" value={form.recordedOn} onChange={(event) => setForm({ ...form, recordedOn: event.target.value })} /></div>
        <div><Label htmlFor="duration">Duration</Label><TextInput id="duration" value={form.duration} onChange={(event) => setForm({ ...form, duration: event.target.value })} /></div>
        <div><Label htmlFor="series">Series</Label><TextInput id="series" value={form.series} onChange={(event) => setForm({ ...form, series: event.target.value })} /></div>
        <div><Label htmlFor="scripture">Scripture</Label><TextInput id="scripture" value={form.scripture} onChange={(event) => setForm({ ...form, scripture: event.target.value })} /></div>
        <div>
          <Label htmlFor="category">Category</Label>
          <select id="category" className="field" value={form.categoryId ?? ""} onChange={(event) => setForm({ ...form, categoryId: event.target.value ? Number(event.target.value) : null })}>
            <option value="">None</option>
            {state.data.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} />
        Feature on the homepage
      </label>
      <Actions pending={pending} message={message} onDelete={id === "new" ? undefined : () => void removeMessage({ data: Number(id) }).then(() => navigate({ to: "/admin/messages" }))} />
    </form>
  );
}
