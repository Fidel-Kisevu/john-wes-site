import { createFileRoute, useRouteContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Area, ImagePicker, Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorMedia, saveSettings } from "@/lib/cms";
import type { Settings } from "@/lib/content-types";

export const Route = createFileRoute("/admin/settings")({ component: SettingsPage });

function SettingsPage() {
  const current = useRouteContext({ from: "__root__" }).settings;
  const media = useDesk("settings-media", () => loadEditorMedia());
  const [form, setForm] = useState<Settings>(current);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setForm(current);
  }, [current]);

  function set<K extends keyof Settings>(key: K, value: Settings[K]) {
    setForm((item) => ({ ...item, [key]: value }));
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setPending(true);
        void saveSettings({ data: form })
          .then(async (result) => {
            if (!result.ok) return setMessage(result.message);
            setMessage("Settings saved.");
            await router.invalidate();
          })
          .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not save."))
          .finally(() => setPending(false));
      }}
    >
      <h1 className="display text-4xl">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="name">Name</Label><TextInput id="name" value={form.ministerName} onChange={(event) => set("ministerName", event.target.value)} /></div>
        <div><Label htmlFor="title">Title</Label><TextInput id="title" value={form.professionalTitle} onChange={(event) => set("professionalTitle", event.target.value)} /></div>
      </div>
      <div><Label htmlFor="kicker">Kicker</Label><TextInput id="kicker" value={form.kicker} onChange={(event) => set("kicker", event.target.value)} /></div>
      <div><Label htmlFor="intro">Homepage introduction</Label><Area id="intro" value={form.homepageIntro} onChange={(event) => set("homepageIntro", event.target.value)} /></div>
      <div><Label htmlFor="quote">Pull quote</Label><Area id="quote" value={form.pullQuote} onChange={(event) => set("pullQuote", event.target.value)} /></div>
      <div><Label htmlFor="summary">Short biography</Label><Area id="summary" value={form.biographySummary} onChange={(event) => set("biographySummary", event.target.value)} /></div>
      <div><Label htmlFor="bio">Biography</Label><Area id="bio" value={form.biography} onChange={(event) => set("biography", event.target.value)} /></div>
      <div><Label htmlFor="interests">Areas of attention, one per line</Label><Area id="interests" value={form.interests} onChange={(event) => set("interests", event.target.value)} /></div>
      <div><Label htmlFor="credentials">Note on credentials</Label><Area id="credentials" value={form.credentialsNote} onChange={(event) => set("credentialsNote", event.target.value)} /></div>
      <ImagePicker
        label="Portrait"
        value={form.portraitUrl}
        alt={form.portraitAlt}
        media={media.data ?? []}
        onChange={(portraitUrl) => set("portraitUrl", portraitUrl)}
        onAlt={(portraitAlt) => set("portraitAlt", portraitAlt)}
      />
      <div><Label htmlFor="email">Contact email</Label><TextInput id="email" value={form.contactEmail} onChange={(event) => set("contactEmail", event.target.value)} /></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="youtube">YouTube</Label><TextInput id="youtube" value={form.youtubeUrl} onChange={(event) => set("youtubeUrl", event.target.value)} /></div>
        <div><Label htmlFor="x">X</Label><TextInput id="x" value={form.xUrl} onChange={(event) => set("xUrl", event.target.value)} /></div>
        <div><Label htmlFor="facebook">Facebook</Label><TextInput id="facebook" value={form.facebookUrl} onChange={(event) => set("facebookUrl", event.target.value)} /></div>
        <div><Label htmlFor="instagram">Instagram</Label><TextInput id="instagram" value={form.instagramUrl} onChange={(event) => set("instagramUrl", event.target.value)} /></div>
      </div>
      <div><Label htmlFor="seoTitle">SEO title</Label><TextInput id="seoTitle" value={form.seoTitle} onChange={(event) => set("seoTitle", event.target.value)} /></div>
      <div><Label htmlFor="seoDescription">SEO description</Label><Area id="seoDescription" value={form.seoDescription} onChange={(event) => set("seoDescription", event.target.value)} /></div>
      <div><Label htmlFor="footer">Footer line</Label><TextInput id="footer" value={form.footerNote} onChange={(event) => set("footerNote", event.target.value)} /></div>
      <div><Label htmlFor="newsHead">Notes heading</Label><TextInput id="newsHead" value={form.newsletterHeading} onChange={(event) => set("newsletterHeading", event.target.value)} /></div>
      <div><Label htmlFor="newsBody">Notes explanation</Label><Area id="newsBody" value={form.newsletterText} onChange={(event) => set("newsletterText", event.target.value)} /></div>
      <div><Label htmlFor="speaking">Speaking note</Label><Area id="speaking" value={form.speakingNote} onChange={(event) => set("speakingNote", event.target.value)} /></div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={form.showSampleNotice} onChange={(event) => set("showSampleNotice", event.target.checked)} />
        Show the sample-content notice in the footer
      </label>
      <button type="submit" disabled={pending} className="h-11 bg-oxblood px-4 text-sm font-semibold text-paper">Save settings</button>
      {message ? <p role="status" className="text-sm">{message}</p> : null}
    </form>
  );
}
