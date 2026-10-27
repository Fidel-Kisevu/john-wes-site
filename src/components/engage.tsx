import { useEffect, useState, type ReactNode } from "react";
import { joinNotes, sendContact } from "@/lib/cms";
import { safeHttpUrl, youtubeId } from "@/lib/content-types";

export function VideoEmbed({ url, title, poster }: { url: string; title: string; poster?: string }) {
  const id = youtubeId(url);
  const [play, setPlay] = useState(false);
  if (!url) {
    return (
      <div className="ratio-wide relative flex items-end overflow-hidden bg-paper-2 p-6">
        {poster ? <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" /> : null}
        <p className="relative bg-ivory/90 px-3 py-2 text-sm text-ink">Recording to be added.</p>
      </div>
    );
  }
  if (!id) {
    const href = safeHttpUrl(url);
    if (!href) return null;
    return (
      <a href={href} className="inline-block border-b border-oxblood text-oxblood" rel="noopener noreferrer">
        Open the recording
      </a>
    );
  }
  if (!play) {
    return (
      <button type="button" onClick={() => setPlay(true)} className="ratio-wide relative block w-full overflow-hidden bg-ink text-left">
        {poster ? <img src={poster} alt="" className="h-full w-full object-cover opacity-90" /> : null}
        <span className="absolute bottom-4 left-4 bg-ivory px-4 py-2 text-sm text-ink">Play recording</span>
      </button>
    );
  }
  return (
    <div className="ratio-wide bg-ink">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function ShareRow({ title }: { title: string }) {
  const [href, setHref] = useState("");
  useEffect(() => {
    setHref(window.location.href);
  }, []);
  if (!href) return <p className="text-sm text-muted">Share</p>;
  const url = encodeURIComponent(href);
  const text = encodeURIComponent(title);
  return (
    <p className="flex flex-wrap gap-4 text-sm">
      <a className="border-b border-line hover:border-oxblood" href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}>
        Share on X
      </a>
      <a className="border-b border-line hover:border-oxblood" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        Facebook
      </a>
      <a className="border-b border-line hover:border-oxblood" href={`mailto:?subject=${text}&body=${url}`}>
        Email
      </a>
    </p>
  );
}

export function NotesForm({ heading, text }: { heading: string; text: string }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:items-end">
        <div>
          <h2 className="display text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-md text-muted">{text}</p>
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus("saving");
            void joinNotes({ data: { email, company } })
              .then((result) => {
                if (!result.ok) {
                  setStatus("error");
                  setMessage(result.message);
                  return;
                }
                setStatus("done");
                setMessage("Saved on this site. No letter will be sent until a mailing service is connected.");
                setEmail("");
              })
              .catch(() => {
                setStatus("error");
                setMessage("Could not save that address. Try again.");
              });
          }}
        >
          <label className="text-sm" htmlFor="notes-email">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="notes-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="field sm:flex-1"
            />
            <button
              type="submit"
              disabled={status === "saving"}
              className="inline-flex h-11 items-center justify-center bg-oxblood px-5 text-sm font-semibold text-paper disabled:opacity-60"
            >
              {status === "saving" ? "Saving" : "Keep me posted"}
            </button>
          </div>
          <label className="hp" htmlFor="notes-company">
            Company
            <input id="notes-company" value={company} onChange={(event) => setCompany(event.target.value)} tabIndex={-1} autoComplete="off" />
          </label>
          {message ? (
            <p role="status" className={status === "error" ? "text-sm text-oxblood" : "text-sm text-ink"}>
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

const ENQUIRIES = ["Speaking", "Writing", "Media", "General"] as const;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", enquiryType: "Speaking", message: "", company: "" });
  const [fields, setFields] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <form
      className="space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("saving");
        setFields({});
        void sendContact({ data: form })
          .then((result) => {
            if (!result.ok) {
              setStatus("error");
              setMessage(result.message);
              setFields(result.fields ?? {});
              return;
            }
            setStatus("done");
            setMessage(
              result.saved
                ? "Saved for the minister. Email delivery is not configured, so this note stays on the site rather than arriving in an inbox."
                : "Thank you.",
            );
            setForm({ name: "", email: "", enquiryType: "Speaking", message: "", company: "" });
          })
          .catch(() => {
            setStatus("error");
            setMessage("Could not save the note. Try again in a moment.");
          });
      }}
    >
      <Field label="Name" id="contact-name" error={fields.name}>
        <input id="contact-name" className="field" autoComplete="name" value={form.name} onChange={(event) => set("name", event.target.value)} />
      </Field>
      <Field label="Email" id="contact-email" error={fields.email}>
        <input id="contact-email" type="email" className="field" autoComplete="email" value={form.email} onChange={(event) => set("email", event.target.value)} />
      </Field>
      <Field label="Enquiry" id="contact-type" error={fields.enquiryType}>
        <select id="contact-type" className="field" value={form.enquiryType} onChange={(event) => set("enquiryType", event.target.value)}>
          {ENQUIRIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" id="contact-message" error={fields.message}>
        <textarea id="contact-message" className="field" value={form.message} onChange={(event) => set("message", event.target.value)} />
      </Field>
      <label className="hp" htmlFor="contact-company">
        Company
        <input id="contact-company" value={form.company} onChange={(event) => set("company", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" disabled={status === "saving"} className="inline-flex h-11 items-center bg-oxblood px-5 text-sm font-semibold text-paper disabled:opacity-60">
        {status === "saving" ? "Sending" : "Send the note"}
      </button>
      {message ? (
        <p role="status" className={status === "error" ? "text-sm text-oxblood" : "text-sm text-ink"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-oxblood">{error}</p> : null}
    </div>
  );
}
