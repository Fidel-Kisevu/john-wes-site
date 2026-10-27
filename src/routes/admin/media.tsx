import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorMedia, removeMedia, saveMedia } from "@/lib/cms";

export const Route = createFileRoute("/admin/media")({ component: MediaPage });

function MediaPage() {
  const state = useDesk("media", () => loadEditorMedia());
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");
  const [message, setMessage] = useState("");
  if (state.loading) return <p className="text-sm text-muted">Loading media…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <h1 className="display text-4xl">Media</h1>
      <p className="mt-3 max-w-xl text-sm text-muted">JPEG, PNG, WebP, or GIF under 1.2 MB. Images are kept with the site, not on a separate disk.</p>
      <form
        className="mt-6 max-w-lg space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.currentTarget.elements.namedItem("file");
          const file = input instanceof HTMLInputElement ? input.files?.[0] : undefined;
          if (!file) return setMessage("Choose a file.");
          if (file.size > 1_200_000) return setMessage("Images must be under 1.2 MB.");
          const reader = new FileReader();
          reader.onload = () => {
            const result = String(reader.result ?? "");
            const base64 = result.slice(result.indexOf(",") + 1);
            void saveMedia({ data: { filename: file.name, mime: file.type, alt, caption, base64 } })
              .then(() => {
                setMessage("Uploaded.");
                setAlt("");
                setCaption("");
                event.currentTarget.reset();
                state.reload();
              })
              .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not upload."));
          };
          reader.readAsDataURL(file);
        }}
      >
        <div><Label htmlFor="file">File</Label><input id="file" name="file" type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="block w-full text-sm" /></div>
        <div><Label htmlFor="alt">Alternative text</Label><TextInput id="alt" value={alt} onChange={(event) => setAlt(event.target.value)} /></div>
        <div><Label htmlFor="caption">Caption</Label><TextInput id="caption" value={caption} onChange={(event) => setCaption(event.target.value)} /></div>
        <button type="submit" className="h-11 bg-oxblood px-4 text-sm font-semibold text-paper">Upload</button>
        {message ? <p role="status" className="text-sm">{message}</p> : null}
      </form>
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {(state.data ?? []).map((item) => (
          <li key={item.id} className="border border-line p-2">
            <img src={item.url} alt={item.alt} className="aspect-video w-full object-cover" />
            <p className="mt-2 truncate text-sm">{item.filename}</p>
            <button type="button" className="mt-1 text-sm text-oxblood" onClick={() => void removeMedia({ data: item.id }).then(() => state.reload())}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
