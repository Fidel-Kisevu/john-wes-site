import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Area, Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorEvent, removeEvent, saveEvent } from "@/lib/cms";
import { slugify, type Gathering } from "@/lib/content-types";

export const Route = createFileRoute("/admin/events/$id")({ component: EventEditor });

function EventEditor() {
  const { id } = Route.useParams();
  const state = useDesk(id, () => loadEditorEvent({ data: id === "new" ? null : Number(id) }));
  const [form, setForm] = useState<Gathering | null>(null);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [armed, setArmed] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    if (!state.data) return;
    setForm(
      state.data.event ?? {
        id: 0,
        title: "",
        slug: "",
        description: "",
        startsOn: "",
        endsOn: "",
        whenLabel: "",
        timeZone: "Africa/Nairobi",
        venue: "",
        registrationUrl: "",
        status: "scheduled",
        upcoming: true,
      },
    );
  }, [state.data]);

  if (state.loading || !form || !state.data) return <p className="text-sm text-muted">{state.error || "Loading event…"}</p>;
  if (id !== "new" && !state.data.event) return <p>That event is not on the desk.</p>;

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setPending(true);
        void saveEvent({ data: { ...form, id: id === "new" ? null : Number(id) } })
          .then(async (result) => {
            if (!result.ok) return setMessage(result.message);
            setMessage("Saved.");
            await router.invalidate();
            if (id === "new") await navigate({ to: "/admin/events/$id", params: { id: String(result.id) } });
          })
          .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not save."))
          .finally(() => setPending(false));
      }}
    >
      <h1 className="display text-4xl">{id === "new" ? "New event" : "Edit event"}</h1>
      <div><Label htmlFor="title">Title</Label><TextInput id="title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value, slug: slugify(event.target.value) })} /></div>
      <div><Label htmlFor="slug">Address</Label><TextInput id="slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: slugify(event.target.value) })} /></div>
      <div><Label htmlFor="when">Date as visitors should read it</Label><TextInput id="when" value={form.whenLabel} onChange={(event) => setForm({ ...form, whenLabel: event.target.value })} /></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="start">Starts</Label><TextInput id="start" type="date" value={form.startsOn} onChange={(event) => setForm({ ...form, startsOn: event.target.value })} /></div>
        <div><Label htmlFor="end">Ends</Label><TextInput id="end" type="date" value={form.endsOn} onChange={(event) => setForm({ ...form, endsOn: event.target.value })} /></div>
        <div><Label htmlFor="zone">Time zone</Label><TextInput id="zone" value={form.timeZone} onChange={(event) => setForm({ ...form, timeZone: event.target.value })} /></div>
        <div><Label htmlFor="venue">Venue</Label><TextInput id="venue" value={form.venue} onChange={(event) => setForm({ ...form, venue: event.target.value })} /></div>
      </div>
      <div><Label htmlFor="reg">Registration URL</Label><TextInput id="reg" value={form.registrationUrl} onChange={(event) => setForm({ ...form, registrationUrl: event.target.value })} /></div>
      <div><Label htmlFor="description">Description</Label><Area id="description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /></div>
      <div>
        <Label htmlFor="status">Status</Label>
        <select id="status" className="field" value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value === "cancelled" ? "cancelled" : "scheduled" })}>
          <option value="scheduled">Scheduled</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={pending} className="h-11 bg-oxblood px-4 text-sm font-semibold text-paper">Save</button>
        {id !== "new" ? (
          <button type="button" className="h-11 px-4 text-sm text-oxblood" onClick={() => { if (!armed) return setArmed(true); void removeEvent({ data: Number(id) }).then(() => navigate({ to: "/admin/events" })); }}>
            {armed ? "Confirm delete" : "Delete"}
          </button>
        ) : null}
        {message ? <p role="status" className="text-sm">{message}</p> : null}
      </div>
    </form>
  );
}
