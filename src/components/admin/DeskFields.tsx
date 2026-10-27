import { useEffect, useState, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { STOCK, type MediaItem } from "@/lib/content-types";

export function useDesk<T>(key: string, load: () => Promise<T>) {
  const { user } = useCurrentUserState();
  const [tick, setTick] = useState(0);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;
    let cancel = false;
    setLoading(true);
    load()
      .then((value) => {
        if (!cancel) {
          setData(value);
          setError("");
        }
      })
      .catch((reason: unknown) => {
        if (!cancel) setError(reason instanceof Error ? reason.message : "Could not open this desk.");
      })
      .finally(() => {
        if (!cancel) setLoading(false);
      });
    return () => {
      cancel = true;
    };
    // `load` is current whenever key or tick changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, key, tick]);

  return { data, error, loading, reload: () => setTick((value) => value + 1) };
}

export function DeskNote({ children }: { children: ReactNode }) {
  return <p className="mb-6 border border-line bg-paper px-4 py-3 text-sm text-muted">{children}</p>;
}

export function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm">
      {children}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="field" />;
}

export function Area(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="field" />;
}

export function Actions({
  pending,
  message,
  onDelete,
}: {
  pending: boolean;
  message: string;
  onDelete?: () => void;
}) {
  const [armed, setArmed] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
      <button type="submit" name="intent" value="draft" disabled={pending} className="h-11 border border-line bg-paper px-4 text-sm">
        Save draft
      </button>
      <button type="submit" name="intent" value="published" disabled={pending} className="h-11 bg-oxblood px-4 text-sm font-semibold text-paper">
        Publish
      </button>
      {onDelete ? (
        <button
          type="button"
          className="h-11 px-4 text-sm text-oxblood"
          onClick={() => {
            if (!armed) {
              setArmed(true);
              return;
            }
            onDelete();
          }}
        >
          {armed ? "Confirm delete" : "Delete"}
        </button>
      ) : null}
      {message ? <p role="status" className="text-sm">{message}</p> : null}
    </div>
  );
}

export function ImagePicker({
  label,
  value,
  alt,
  media,
  onChange,
  onAlt,
}: {
  label: string;
  value: string;
  alt: string;
  media: MediaItem[];
  onChange: (value: string) => void;
  onAlt: (value: string) => void;
}) {
  const options = [
    ...STOCK.map((item) => ({ url: item.src, alt: item.alt })),
    ...media.map((item) => ({ url: item.url, alt: item.alt || item.filename })),
  ];
  return (
    <fieldset>
      <legend className="text-sm">{label}</legend>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
        {options.map((option) => (
          <button
            key={option.url}
            type="button"
            aria-label={option.alt}
            onClick={() => {
              onChange(option.url);
              if (!alt) onAlt(option.alt);
            }}
            className={value === option.url ? "shrink-0 border-2 border-oxblood p-0.5" : "shrink-0 border border-line p-0.5"}
          >
            <img src={option.url} alt="" className="h-16 w-20 object-cover" />
          </button>
        ))}
      </div>
      <input className="field" value={value} onChange={(event) => onChange(event.target.value)} aria-label={`${label} address`} />
      <label className="mt-3 block text-sm">
        Alternative text
        <input className="field mt-1" value={alt} onChange={(event) => onAlt(event.target.value)} />
      </label>
    </fieldset>
  );
}
