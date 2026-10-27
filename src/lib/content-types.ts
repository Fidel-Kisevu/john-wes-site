export type Status = "draft" | "published";

export type Settings = {
  ministerName: string;
  professionalTitle: string;
  kicker: string;
  homepageIntro: string;
  pullQuote: string;
  biographySummary: string;
  biography: string;
  interests: string;
  credentialsNote: string;
  portraitUrl: string;
  portraitAlt: string;
  contactEmail: string;
  youtubeUrl: string;
  xUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  seoTitle: string;
  seoDescription: string;
  footerNote: string;
  newsletterHeading: string;
  newsletterText: string;
  speakingNote: string;
  showSampleNotice: boolean;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  heroImage: string;
  heroAlt: string;
  categoryId: number | null;
  categoryName: string;
  categorySlug: string;
  authorName: string;
  featured: boolean;
  publishedAt: string;
  status: Status;
  seoTitle: string;
  seoDescription: string;
  updatedAt: string;
};

export type Book = {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  coverImage: string;
  coverAlt: string;
  description: string;
  authorName: string;
  publisher: string;
  publicationYear: string;
  isbn: string;
  price: string;
  currency: string;
  purchaseUrl: string;
  featured: boolean;
  status: Status;
  seoTitle: string;
  seoDescription: string;
};

export type Teaching = {
  id: number;
  title: string;
  slug: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  thumbnailAlt: string;
  speaker: string;
  recordedOn: string;
  duration: string;
  series: string;
  scripture: string;
  categoryId: number | null;
  categoryName: string;
  featured: boolean;
  status: Status;
  seoTitle: string;
  seoDescription: string;
};

export type Gathering = {
  id: number;
  title: string;
  slug: string;
  description: string;
  startsOn: string;
  endsOn: string;
  whenLabel: string;
  timeZone: string;
  venue: string;
  registrationUrl: string;
  status: "scheduled" | "cancelled";
  upcoming: boolean;
};

export type Enquiry = {
  id: number;
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  createdAt: string;
};

export type MediaItem = {
  id: number;
  filename: string;
  alt: string;
  caption: string;
  mime: string;
  url: string;
};

export type SearchHit = {
  kind: "article" | "book" | "message";
  title: string;
  slug: string;
  summary: string;
};

export type SaveResult = { ok: true; id: number; slug: string } | { ok: false; message: string };

export type ContactResult =
  | { ok: true; saved: boolean }
  | { ok: false; message: string; fields?: Record<string, string> };

export const STOCK = [
  { src: "/images/portrait.jpg", alt: "Portrait of John Wes, in a charcoal jacket against a pale wall" },
  { src: "/images/desk.jpg", alt: "A wooden writing desk with a book, tea, and morning light" },
  { src: "/images/bible.jpg", alt: "An open Bible on a dark wooden table, pages soft in the light" },
  { src: "/images/chapel.jpg", alt: "Empty wooden pews in a quiet chapel with a shaft of afternoon light" },
  { src: "/images/highlands.jpg", alt: "Mist over rolling highlands at dawn" },
  { src: "/images/hands.jpg", alt: "Hands writing slowly in a notebook at a wooden table" },
  { src: "/images/lectern.jpg", alt: "A simple wooden lectern with a closed clothbound book" },
  { src: "/images/linen.jpg", alt: "Ivory linen paper beside a band of deep burgundy cloth" },
] as const;

export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function formatDay(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

export function youtubeId(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0] ?? "";
      return /^[\w-]{6,}$/.test(id) ? id : null;
    }
    if (host === "youtube.com" || host === "youtube-nocookie.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) {
        const id = u.pathname.split("/")[2] ?? "";
        return /^[\w-]{6,}$/.test(id) ? id : null;
      }
      const id = u.searchParams.get("v") ?? "";
      return /^[\w-]{6,}$/.test(id) ? id : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function safeHttpUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  return url.toString();
}

export function interestLines(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}
