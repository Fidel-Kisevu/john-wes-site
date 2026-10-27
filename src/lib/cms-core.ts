import { getSql, type Sql } from "@/lib/db";
import {
  articleSeed,
  bookSeed,
  categorySeed,
  eventSeed,
  messageSeed,
  SEED_KEY,
  settingsSeed,
} from "@/lib/seed-data";
import {
  safeHttpUrl,
  slugify,
  type Article,
  type Book,
  type Category,
  type ContactResult,
  type Enquiry,
  type Gathering,
  type MediaItem,
  type SaveResult,
  type SearchHit,
  type Settings,
  type Status,
  type Teaching,
} from "@/lib/content-types";

const hits = new Map<string, number[]>();

function asString(value: unknown): string {
  if (value == null) return "";
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function asDate(value: unknown): string {
  const raw = asString(value);
  return raw.length >= 10 ? raw.slice(0, 10) : raw;
}

function asBool(value: unknown): boolean {
  return value === true || value === "t" || value === "true" || value === 1;
}

function asNum(value: unknown): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

function asStatus(value: unknown): Status {
  return value === "published" ? "published" : "draft";
}

let seedPromise: Promise<void> | null = null;

async function seed(sql: Sql): Promise<void> {
  const existing = await sql<{ value: string }>`select value from app_meta where key = ${SEED_KEY}`;
  if (existing.length > 0) return;

  const s = settingsSeed;
  await sql`
    insert into site_settings (
      id, minister_name, professional_title, kicker, homepage_intro, pull_quote,
      biography_summary, biography, interests, credentials_note, portrait_url, portrait_alt,
      contact_email, youtube_url, x_url, facebook_url, instagram_url, seo_title, seo_description,
      footer_note, newsletter_heading, newsletter_text, speaking_note, show_sample_notice
    ) values (
      1, ${s.ministerName}, ${s.professionalTitle}, ${s.kicker}, ${s.homepageIntro}, ${s.pullQuote},
      ${s.biographySummary}, ${s.biography}, ${s.interests}, ${s.credentialsNote}, ${s.portraitUrl}, ${s.portraitAlt},
      ${s.contactEmail}, ${s.youtubeUrl}, ${s.xUrl}, ${s.facebookUrl}, ${s.instagramUrl}, ${s.seoTitle}, ${s.seoDescription},
      ${s.footerNote}, ${s.newsletterHeading}, ${s.newsletterText}, ${s.speakingNote}, ${s.showSampleNotice}
    )
    on conflict (id) do nothing
  `;

  for (const category of categorySeed) {
    await sql`
      insert into categories (name, slug, description)
      values (${category.name}, ${category.slug}, ${category.description})
      on conflict (slug) do nothing
    `;
  }
  const cats = await sql<{ id: number; slug: string }>`select id, slug from categories`;
  const catId = (slug: string) => {
    const row = cats.find((item) => item.slug === slug);
    return row ? Number(row.id) : null;
  };

  for (const article of articleSeed) {
    await sql`
      insert into articles (
        title, slug, excerpt, body, hero_image, hero_alt, category_id, author_name,
        featured, published_at, status, seo_title, seo_description
      ) values (
        ${article.title}, ${article.slug}, ${article.excerpt}, ${article.body}, ${article.heroImage},
        ${article.heroAlt}, ${catId(article.category)}, ${s.ministerName}, ${article.featured},
        ${article.publishedAt}, ${article.status}, ${article.title}, ${article.excerpt}
      )
      on conflict (slug) do nothing
    `;
  }

  for (const book of bookSeed) {
    await sql`
      insert into books (
        title, slug, subtitle, cover_image, cover_alt, description, author_name, publisher,
        publication_year, isbn, price, currency, purchase_url, featured, status, seo_title, seo_description
      ) values (
        ${book.title}, ${book.slug}, ${book.subtitle}, ${book.coverImage}, ${book.coverAlt}, ${book.description},
        ${s.ministerName}, ${book.publisher}, ${book.publicationYear}, ${book.isbn}, ${book.price}, ${book.currency},
        ${book.purchaseUrl}, ${book.featured}, ${book.status}, ${book.title}, ${book.subtitle}
      )
      on conflict (slug) do nothing
    `;
  }

  for (const message of messageSeed) {
    await sql`
      insert into messages (
        title, slug, description, video_url, thumbnail, thumbnail_alt, speaker, recorded_on,
        duration, series, scripture, category_id, featured, status, seo_title, seo_description
      ) values (
        ${message.title}, ${message.slug}, ${message.description}, ${message.videoUrl}, ${message.thumbnail},
        ${message.thumbnailAlt}, ${s.ministerName}, ${message.recordedOn}, ${message.duration}, ${message.series},
        ${message.scripture}, ${catId(message.category)}, ${message.featured}, ${message.status},
        ${message.title}, ${message.description}
      )
      on conflict (slug) do nothing
    `;
  }

  for (const event of eventSeed) {
    await sql`
      insert into events (
        title, slug, description, starts_on, ends_on, when_label, time_zone, venue, registration_url, status
      ) values (
        ${event.title}, ${event.slug}, ${event.description}, ${event.startsOn}, ${event.endsOn},
        ${event.whenLabel}, ${event.timeZone}, ${event.venue}, ${event.registrationUrl}, ${event.status}
      )
      on conflict (slug) do nothing
    `;
  }

  await sql`
    insert into app_meta (key, value) values (${SEED_KEY}, '1')
    on conflict (key) do nothing
  `;
}

const COVER_FIX: Record<string, { image: string; alt: string }> = {
  "a-table-in-the-wilderness": { image: "/images/covers/table.jpg", alt: "Clothbound cover of A Table in the Wilderness" },
  "the-ordinary-hours": { image: "/images/covers/hours.jpg", alt: "Clothbound cover of The Ordinary Hours" },
  "reading-mark-slowly": { image: "/images/covers/mark.jpg", alt: "Oxblood cloth cover of Reading Mark Slowly" },
  "letters-for-a-tired-church": { image: "/images/covers/letters.jpg", alt: "Clothbound cover of Letters for a Tired Church" },
};

let coversReady = false;

async function refreshCovers(sql: Sql): Promise<void> {
  if (coversReady) return;
  for (const [slug, cover] of Object.entries(COVER_FIX)) {
    await sql`
      update books set cover_image = ${cover.image}, cover_alt = ${cover.alt}
      where slug = ${slug} and cover_image is distinct from ${cover.image}
    `;
  }
  coversReady = true;
}

export async function ready(): Promise<Sql> {
  const sql = await getSql();
  seedPromise ??= seed(sql).catch((error) => {
    seedPromise = null;
    throw error;
  });
  await seedPromise;
  await refreshCovers(sql);
  return sql;
}

function mapSettings(row: Record<string, unknown>): Settings {
  return {
    ministerName: asString(row.minister_name),
    professionalTitle: asString(row.professional_title),
    kicker: asString(row.kicker),
    homepageIntro: asString(row.homepage_intro),
    pullQuote: asString(row.pull_quote),
    biographySummary: asString(row.biography_summary),
    biography: asString(row.biography),
    interests: asString(row.interests),
    credentialsNote: asString(row.credentials_note),
    portraitUrl: asString(row.portrait_url),
    portraitAlt: asString(row.portrait_alt),
    contactEmail: asString(row.contact_email),
    youtubeUrl: asString(row.youtube_url),
    xUrl: asString(row.x_url),
    facebookUrl: asString(row.facebook_url),
    instagramUrl: asString(row.instagram_url),
    seoTitle: asString(row.seo_title),
    seoDescription: asString(row.seo_description),
    footerNote: asString(row.footer_note),
    newsletterHeading: asString(row.newsletter_heading),
    newsletterText: asString(row.newsletter_text),
    speakingNote: asString(row.speaking_note),
    showSampleNotice: asBool(row.show_sample_notice),
  };
}

function mapArticle(row: Record<string, unknown>): Article {
  return {
    id: Number(row.id),
    title: asString(row.title),
    slug: asString(row.slug),
    excerpt: asString(row.excerpt),
    body: asString(row.body),
    heroImage: asString(row.hero_image),
    heroAlt: asString(row.hero_alt),
    categoryId: asNum(row.category_id),
    categoryName: asString(row.category_name),
    categorySlug: asString(row.category_slug),
    authorName: asString(row.author_name),
    featured: asBool(row.featured),
    publishedAt: asString(row.published_at),
    status: asStatus(row.status),
    seoTitle: asString(row.seo_title),
    seoDescription: asString(row.seo_description),
    updatedAt: asString(row.updated_at),
  };
}

function mapBook(row: Record<string, unknown>): Book {
  const year = asNum(row.publication_year);
  return {
    id: Number(row.id),
    title: asString(row.title),
    slug: asString(row.slug),
    subtitle: asString(row.subtitle),
    coverImage: asString(row.cover_image),
    coverAlt: asString(row.cover_alt),
    description: asString(row.description),
    authorName: asString(row.author_name),
    publisher: asString(row.publisher),
    publicationYear: year == null ? "" : String(year),
    isbn: asString(row.isbn),
    price: asString(row.price),
    currency: asString(row.currency),
    purchaseUrl: asString(row.purchase_url),
    featured: asBool(row.featured),
    status: asStatus(row.status),
    seoTitle: asString(row.seo_title),
    seoDescription: asString(row.seo_description),
  };
}

function mapTeaching(row: Record<string, unknown>): Teaching {
  return {
    id: Number(row.id),
    title: asString(row.title),
    slug: asString(row.slug),
    description: asString(row.description),
    videoUrl: asString(row.video_url),
    thumbnail: asString(row.thumbnail),
    thumbnailAlt: asString(row.thumbnail_alt),
    speaker: asString(row.speaker),
    recordedOn: asDate(row.recorded_on),
    duration: asString(row.duration),
    series: asString(row.series),
    scripture: asString(row.scripture),
    categoryId: asNum(row.category_id),
    categoryName: asString(row.category_name),
    featured: asBool(row.featured),
    status: asStatus(row.status),
    seoTitle: asString(row.seo_title),
    seoDescription: asString(row.seo_description),
  };
}

function mapEvent(row: Record<string, unknown>): Gathering {
  const startsOn = asDate(row.starts_on);
  const endsOn = asDate(row.ends_on);
  const today = new Date().toISOString().slice(0, 10);
  const end = endsOn || startsOn;
  const upcoming = asString(row.status) !== "cancelled" && end >= today;
  return {
    id: Number(row.id),
    title: asString(row.title),
    slug: asString(row.slug),
    description: asString(row.description),
    startsOn,
    endsOn,
    whenLabel: asString(row.when_label),
    timeZone: asString(row.time_zone),
    venue: asString(row.venue),
    registrationUrl: asString(row.registration_url),
    status: row.status === "cancelled" ? "cancelled" : "scheduled",
    upcoming,
  };
}

function mapCategory(row: Record<string, unknown>): Category {
  return {
    id: Number(row.id),
    name: asString(row.name),
    slug: asString(row.slug),
    description: asString(row.description),
  };
}

export async function readSettings(): Promise<Settings> {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`select * from site_settings where id = 1`;
  const row = rows[0];
  if (!row) throw new Error("Site settings are not ready.");
  return mapSettings(row);
}

export async function readHome() {
  const sql = await ready();
  const essayRows = await sql<Record<string, unknown>>`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published'
    order by a.featured desc, a.published_at desc nulls last
    limit 5
  `;
  const bookRows = await sql<Record<string, unknown>>`
    select * from books where status = 'published' order by featured desc, publication_year desc nulls last limit 4
  `;
  const messageRows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name
    from messages m
    left join categories c on c.id = m.category_id
    where m.status = 'published'
    order by m.featured desc, m.recorded_on desc nulls last
    limit 4
  `;
  const eventRows = await sql<Record<string, unknown>>`
    select * from events
    where status = 'scheduled' and coalesce(ends_on, starts_on) >= current_date
    order by starts_on asc
    limit 1
  `;
  return {
    essays: essayRows.map(mapArticle),
    books: bookRows.map(mapBook),
    messages: messageRows.map(mapTeaching),
    nextEvent: eventRows[0] ? mapEvent(eventRows[0]) : null,
  };
}

export async function readArticles(category: string) {
  const sql = await ready();
  const slug = slugify(category);
  const rows = await sql<Record<string, unknown>>`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published' and (${slug} = '' or c.slug = ${slug})
    order by a.published_at desc nulls last
  `;
  const categories = await sql<Record<string, unknown>>`select * from categories order by name`;
  return { articles: rows.map(mapArticle), categories: categories.map(mapCategory) };
}

export async function readArticle(slug: string) {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`
    select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
    from articles a
    left join categories c on c.id = a.category_id
    where a.slug = ${slug} and a.status = 'published'
  `;
  const row = rows[0];
  if (!row) return null;
  const article = mapArticle(row);
  const relatedRows = await sql<Record<string, unknown>>`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published' and a.id <> ${article.id}
    order by case when a.category_id is not distinct from ${article.categoryId} then 0 else 1 end,
      a.published_at desc nulls last
    limit 3
  `;
  return { article, related: relatedRows.map(mapArticle) };
}

export async function readBooks() {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`
    select * from books where status = 'published' order by featured desc, publication_year desc nulls last, title
  `;
  return rows.map(mapBook);
}

export async function readBook(slug: string) {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`select * from books where slug = ${slug} and status = 'published'`;
  const row = rows[0];
  if (!row) return null;
  const book = mapBook(row);
  const others = await sql<Record<string, unknown>>`
    select * from books where status = 'published' and id <> ${book.id} order by publication_year desc nulls last limit 3
  `;
  return { book, related: others.map(mapBook) };
}

export async function readMessages(series: string) {
  const sql = await ready();
  const filter = series.trim().slice(0, 80);
  const rows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name
    from messages m
    left join categories c on c.id = m.category_id
    where m.status = 'published' and (${filter} = '' or m.series = ${filter})
    order by m.recorded_on desc nulls last
  `;
  const seriesRows = await sql<{ series: string }>`
    select distinct series from messages where status = 'published' and series <> '' order by series
  `;
  return { messages: rows.map(mapTeaching), series: seriesRows.map((item) => item.series) };
}

export async function readMessage(slug: string) {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name
    from messages m left join categories c on c.id = m.category_id
    where m.slug = ${slug} and m.status = 'published'
  `;
  const row = rows[0];
  if (!row) return null;
  const message = mapTeaching(row);
  const relatedRows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name
    from messages m left join categories c on c.id = m.category_id
    where m.status = 'published' and m.id <> ${message.id}
    order by case when m.series = ${message.series} and ${message.series} <> '' then 0 else 1 end,
      m.recorded_on desc nulls last
    limit 3
  `;
  return { message, related: relatedRows.map(mapTeaching) };
}

export async function readEvents() {
  const sql = await ready();
  const rows = await sql<Record<string, unknown>>`select * from events order by starts_on desc`;
  const events = rows.map(mapEvent);
  return {
    upcoming: events.filter((event) => event.upcoming).sort((a, b) => a.startsOn.localeCompare(b.startsOn)),
    past: events.filter((event) => !event.upcoming),
  };
}

export async function readSearch(query: string): Promise<SearchHit[]> {
  const q = query.trim().slice(0, 120);
  if (q.length < 2) return [];
  const pattern = `%${q.replace(/[\\%_]/g, (char) => `\\${char}`)}%`;
  const sql = await ready();
  const articles = await sql<{ title: string; slug: string; excerpt: string }>`
    select title, slug, excerpt from articles
    where status = 'published' and (title ilike ${pattern} escape '\\' or excerpt ilike ${pattern} escape '\\' or body ilike ${pattern} escape '\\')
    order by published_at desc nulls last limit 8
  `;
  const books = await sql<{ title: string; slug: string; subtitle: string }>`
    select title, slug, subtitle from books
    where status = 'published' and (title ilike ${pattern} escape '\\' or subtitle ilike ${pattern} escape '\\' or description ilike ${pattern} escape '\\')
    order by title limit 6
  `;
  const messages = await sql<{ title: string; slug: string; description: string }>`
    select title, slug, description from messages
    where status = 'published' and (title ilike ${pattern} escape '\\' or description ilike ${pattern} escape '\\' or scripture ilike ${pattern} escape '\\' or series ilike ${pattern} escape '\\')
    order by recorded_on desc nulls last limit 6
  `;
  return [
    ...articles.map((item) => ({ kind: "article" as const, title: item.title, slug: item.slug, summary: item.excerpt })),
    ...books.map((item) => ({ kind: "book" as const, title: item.title, slug: item.slug, summary: item.subtitle })),
    ...messages.map((item) => ({ kind: "message" as const, title: item.title, slug: item.slug, summary: item.description })),
  ];
}

export async function readSitemap() {
  const sql = await ready();
  const articles = await sql<{ slug: string }>`select slug from articles where status = 'published'`;
  const books = await sql<{ slug: string }>`select slug from books where status = 'published'`;
  const messages = await sql<{ slug: string }>`select slug from messages where status = 'published'`;
  return {
    articles: articles.map((item) => item.slug),
    books: books.map((item) => item.slug),
    messages: messages.map((item) => item.slug),
  };
}

function cleanText(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && value.length <= 80;
}

function assetPath(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("/images/") || trimmed.startsWith("/media/")) {
    if (trimmed.includes("..") || trimmed.includes("\\") || /\s/.test(trimmed)) {
      throw new Error("That image path is not allowed.");
    }
    return trimmed.slice(0, 240);
  }
  const url = safeHttpUrl(trimmed);
  if (!url) throw new Error("Image addresses must be a site path or an http(s) URL.");
  return url;
}

async function requireEditor(sql: Sql, userId: string) {
  const inserted = await sql<{ user_id: string }>`
    insert into site_admins (user_id)
    select ${userId}
    where not exists (select 1 from site_admins)
    returning user_id
  `;
  if (inserted.length > 0) return;
  const mine = await sql`select user_id from site_admins where user_id = ${userId}`;
  if (mine.length === 0) throw new Error("You do not have access to this desk.");
}

async function slugTaken(sql: Sql, table: "articles" | "books" | "messages" | "events", slug: string, id: number | null) {
  const rows =
    table === "articles"
      ? await sql<{ id: number }>`select id from articles where slug = ${slug} and id is distinct from ${id}`
      : table === "books"
        ? await sql<{ id: number }>`select id from books where slug = ${slug} and id is distinct from ${id}`
        : table === "messages"
          ? await sql<{ id: number }>`select id from messages where slug = ${slug} and id is distinct from ${id}`
          : await sql<{ id: number }>`select id from events where slug = ${slug} and id is distinct from ${id}`;
  return rows.length > 0;
}

export async function editorOverview(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const counts = await sql<{
    articles: number;
    drafts: number;
    books: number;
    messages: number;
    events: number;
    enquiries: number;
  }>`
    select
      (select count(*)::int from articles) as articles,
      (select count(*)::int from articles where status = 'draft') as drafts,
      (select count(*)::int from books) as books,
      (select count(*)::int from messages) as messages,
      (select count(*)::int from events) as events,
      (select count(*)::int from contact_messages) as enquiries
  `;
  const recent = await sql<Record<string, unknown>>`
    select id, title, slug, status, updated_at from articles order by updated_at desc limit 6
  `;
  const row = counts[0];
  return {
    counts: {
      articles: Number(row?.articles ?? 0),
      drafts: Number(row?.drafts ?? 0),
      books: Number(row?.books ?? 0),
      messages: Number(row?.messages ?? 0),
      events: Number(row?.events ?? 0),
      enquiries: Number(row?.enquiries ?? 0),
    },
    recent: recent.map((row) => ({
      id: Number(row.id),
      title: asString(row.title),
      slug: asString(row.slug),
      status: asStatus(row.status),
      updatedAt: asString(row.updated_at),
    })),
  };
}

export async function editorArticles(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a left join categories c on c.id = a.category_id
    order by a.updated_at desc
  `;
  return rows.map(mapArticle);
}

export async function editorArticle(userId: string, id: number | null) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const categories = (await sql<Record<string, unknown>>`select * from categories order by name`).map(mapCategory);
  const media = await listMedia(sql);
  if (id == null) return { article: null, categories, media };
  const rows = await sql<Record<string, unknown>>`
    select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
    from articles a left join categories c on c.id = a.category_id
    where a.id = ${id}
  `;
  return { article: rows[0] ? mapArticle(rows[0]) : null, categories, media };
}

type ArticleInput = {
  id: number | null;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  heroImage: string;
  heroAlt: string;
  categoryId: number | null;
  authorName: string;
  featured: boolean;
  status: Status;
  seoTitle: string;
  seoDescription: string;
  publishedOn: string;
};

function articleInput(raw: unknown): ArticleInput {
  const input = (raw ?? {}) as Record<string, unknown>;
  const title = cleanText(input.title, 180);
  const slug = slugify(cleanText(input.slug, 90) || title);
  const excerpt = cleanText(input.excerpt, 500);
  const body = cleanText(input.body, 50000);
  const authorName = cleanText(input.authorName, 120);
  if (title.length < 3) throw new Error("Give the essay a title.");
  if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
  if (excerpt.length < 10) throw new Error("Add a short summary of at least a sentence.");
  if (body.length < 20) throw new Error("The essay needs a body.");
  if (authorName.length < 2) throw new Error("Name the author.");
  const status: Status = input.status === "published" ? "published" : "draft";
  const publishedOn = cleanText(input.publishedOn, 10);
  if (publishedOn && !/^\d{4}-\d{2}-\d{2}$/.test(publishedOn)) throw new Error("The date should be YYYY-MM-DD.");
  const categoryId = asNum(input.categoryId);
  return {
    id: asNum(input.id),
    title,
    slug,
    excerpt,
    body,
    heroImage: assetPath(cleanText(input.heroImage, 400)),
    heroAlt: cleanText(input.heroAlt, 300),
    categoryId,
    authorName,
    featured: input.featured === true,
    status,
    seoTitle: cleanText(input.seoTitle, 180),
    seoDescription: cleanText(input.seoDescription, 300),
    publishedOn,
  };
}

export async function saveArticleRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = articleInput(raw);
  if (await slugTaken(sql, "articles", input.slug, input.id)) {
    return { ok: false, message: "That address is already used. Choose another." };
  }
  const publishedAt =
    input.status === "published" ? `${input.publishedOn || new Date().toISOString().slice(0, 10)}T08:00:00.000Z` : input.publishedOn ? `${input.publishedOn}T08:00:00.000Z` : null;
  if (input.id == null) {
    const rows = await sql<{ id: number }>`
      insert into articles (
        title, slug, excerpt, body, hero_image, hero_alt, category_id, author_name, featured,
        published_at, status, seo_title, seo_description
      ) values (
        ${input.title}, ${input.slug}, ${input.excerpt}, ${input.body}, ${input.heroImage || null}, ${input.heroAlt},
        ${input.categoryId}, ${input.authorName}, ${input.featured}, ${publishedAt}, ${input.status},
        ${input.seoTitle}, ${input.seoDescription}
      ) returning id
    `;
    return { ok: true, id: Number(rows[0]?.id), slug: input.slug };
  }
  const rows = await sql<{ id: number }>`
    update articles set
      title = ${input.title}, slug = ${input.slug}, excerpt = ${input.excerpt}, body = ${input.body},
      hero_image = ${input.heroImage || null}, hero_alt = ${input.heroAlt}, category_id = ${input.categoryId},
      author_name = ${input.authorName}, featured = ${input.featured}, published_at = ${publishedAt},
      status = ${input.status}, seo_title = ${input.seoTitle}, seo_description = ${input.seoDescription},
      updated_at = now()
    where id = ${input.id}
    returning id
  `;
  if (!rows[0]) return { ok: false, message: "That essay could not be found." };
  return { ok: true, id: input.id, slug: input.slug };
}

export async function deleteArticleRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from articles where id = ${id}`;
  return { ok: true as const };
}

export async function editorBooks(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`select * from books order by updated_at desc`;
  return rows.map(mapBook);
}

export async function editorBook(userId: string, id: number | null) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const media = await listMedia(sql);
  if (id == null) return { book: null, media };
  const rows = await sql<Record<string, unknown>>`select * from books where id = ${id}`;
  return { book: rows[0] ? mapBook(rows[0]) : null, media };
}

export async function saveBookRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const title = cleanText(input.title, 180);
  const slug = slugify(cleanText(input.slug, 90) || title);
  const description = cleanText(input.description, 20000);
  if (title.length < 2) throw new Error("Give the book a title.");
  if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
  if (description.length < 20) throw new Error("Add a description.");
  const id = asNum(input.id);
  if (await slugTaken(sql, "books", slug, id)) return { ok: false, message: "That address is already used. Choose another." };
  const yearText = cleanText(input.publicationYear, 4);
  const year = yearText ? Number(yearText) : null;
  if (year != null && (!Number.isInteger(year) || year < 1400 || year > 2200)) throw new Error("Check the publication year.");
  const purchase = cleanText(input.purchaseUrl, 400);
  const purchaseUrl = purchase ? safeHttpUrl(purchase) : "";
  if (purchase && !purchaseUrl) throw new Error("The purchase link must be an http(s) URL.");
  const price = cleanText(input.price, 20);
  if (price && !/^\d+(\.\d{1,2})?$/.test(price)) throw new Error("Price should be a number like 18.00, or left blank.");
  const fields = {
    subtitle: cleanText(input.subtitle, 200),
    coverImage: assetPath(cleanText(input.coverImage, 400)),
    coverAlt: cleanText(input.coverAlt, 300),
    authorName: cleanText(input.authorName, 120) || "John Wes",
    publisher: cleanText(input.publisher, 160),
    isbn: cleanText(input.isbn, 40),
    currency: cleanText(input.currency, 8).toUpperCase(),
    featured: input.featured === true,
    status: input.status === "published" ? "published" : "draft",
    seoTitle: cleanText(input.seoTitle, 180),
    seoDescription: cleanText(input.seoDescription, 300),
  };
  if (id == null) {
    const rows = await sql<{ id: number }>`
      insert into books (
        title, slug, subtitle, cover_image, cover_alt, description, author_name, publisher, publication_year,
        isbn, price, currency, purchase_url, featured, status, seo_title, seo_description
      ) values (
        ${title}, ${slug}, ${fields.subtitle}, ${fields.coverImage || null}, ${fields.coverAlt}, ${description},
        ${fields.authorName}, ${fields.publisher}, ${year}, ${fields.isbn}, ${price}, ${fields.currency},
        ${purchaseUrl}, ${fields.featured}, ${fields.status}, ${fields.seoTitle}, ${fields.seoDescription}
      ) returning id
    `;
    return { ok: true, id: Number(rows[0]?.id), slug };
  }
  const rows = await sql<{ id: number }>`
    update books set
      title = ${title}, slug = ${slug}, subtitle = ${fields.subtitle}, cover_image = ${fields.coverImage || null},
      cover_alt = ${fields.coverAlt}, description = ${description}, author_name = ${fields.authorName},
      publisher = ${fields.publisher}, publication_year = ${year}, isbn = ${fields.isbn}, price = ${price},
      currency = ${fields.currency}, purchase_url = ${purchaseUrl}, featured = ${fields.featured},
      status = ${fields.status}, seo_title = ${fields.seoTitle}, seo_description = ${fields.seoDescription},
      updated_at = now()
    where id = ${id} returning id
  `;
  if (!rows[0]) return { ok: false, message: "That book could not be found." };
  return { ok: true, id, slug };
}

export async function deleteBookRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from books where id = ${id}`;
  return { ok: true as const };
}

export async function editorMessages(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name from messages m
    left join categories c on c.id = m.category_id
    order by m.updated_at desc
  `;
  return rows.map(mapTeaching);
}

export async function editorMessage(userId: string, id: number | null) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const categories = (await sql<Record<string, unknown>>`select * from categories order by name`).map(mapCategory);
  const media = await listMedia(sql);
  if (id == null) return { message: null, categories, media };
  const rows = await sql<Record<string, unknown>>`
    select m.*, coalesce(c.name, '') as category_name from messages m
    left join categories c on c.id = m.category_id where m.id = ${id}
  `;
  return { message: rows[0] ? mapTeaching(rows[0]) : null, categories, media };
}

export async function saveMessageRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const title = cleanText(input.title, 180);
  const slug = slugify(cleanText(input.slug, 90) || title);
  const description = cleanText(input.description, 5000);
  if (title.length < 3) throw new Error("Give the message a title.");
  if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
  if (description.length < 10) throw new Error("Add a short description.");
  const id = asNum(input.id);
  if (await slugTaken(sql, "messages", slug, id)) return { ok: false, message: "That address is already used. Choose another." };
  const video = cleanText(input.videoUrl, 400);
  const videoUrl = video ? safeHttpUrl(video) : "";
  if (video && !videoUrl) throw new Error("The video link must be an http(s) URL.");
  const recordedOn = cleanText(input.recordedOn, 10);
  if (recordedOn && !/^\d{4}-\d{2}-\d{2}$/.test(recordedOn)) throw new Error("The date should be YYYY-MM-DD.");
  const status: Status = input.status === "published" ? "published" : "draft";
  const speaker = cleanText(input.speaker, 120) || "John Wes";
  const thumbnail = assetPath(cleanText(input.thumbnail, 400));
  if (id == null) {
    const rows = await sql<{ id: number }>`
      insert into messages (
        title, slug, description, video_url, thumbnail, thumbnail_alt, speaker, recorded_on, duration,
        series, scripture, category_id, featured, status, seo_title, seo_description
      ) values (
        ${title}, ${slug}, ${description}, ${videoUrl ?? ""}, ${thumbnail || null}, ${cleanText(input.thumbnailAlt, 300)},
        ${speaker}, ${recordedOn || null}, ${cleanText(input.duration, 40)}, ${cleanText(input.series, 80)},
        ${cleanText(input.scripture, 120)}, ${asNum(input.categoryId)}, ${input.featured === true}, ${status},
        ${cleanText(input.seoTitle, 180)}, ${cleanText(input.seoDescription, 300)}
      ) returning id
    `;
    return { ok: true, id: Number(rows[0]?.id), slug };
  }
  const rows = await sql<{ id: number }>`
    update messages set
      title = ${title}, slug = ${slug}, description = ${description}, video_url = ${videoUrl ?? ""},
      thumbnail = ${thumbnail || null}, thumbnail_alt = ${cleanText(input.thumbnailAlt, 300)}, speaker = ${speaker},
      recorded_on = ${recordedOn || null}, duration = ${cleanText(input.duration, 40)}, series = ${cleanText(input.series, 80)},
      scripture = ${cleanText(input.scripture, 120)}, category_id = ${asNum(input.categoryId)},
      featured = ${input.featured === true}, status = ${status}, seo_title = ${cleanText(input.seoTitle, 180)},
      seo_description = ${cleanText(input.seoDescription, 300)}, updated_at = now()
    where id = ${id} returning id
  `;
  if (!rows[0]) return { ok: false, message: "That message could not be found." };
  return { ok: true, id, slug };
}

export async function deleteMessageRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from messages where id = ${id}`;
  return { ok: true as const };
}

export async function editorEvents(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`select * from events order by starts_on desc`;
  return rows.map(mapEvent);
}

export async function editorEvent(userId: string, id: number | null) {
  const sql = await ready();
  await requireEditor(sql, userId);
  if (id == null) return { event: null };
  const rows = await sql<Record<string, unknown>>`select * from events where id = ${id}`;
  return { event: rows[0] ? mapEvent(rows[0]) : null };
}

export async function saveEventRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const title = cleanText(input.title, 180);
  const slug = slugify(cleanText(input.slug, 90) || title);
  const description = cleanText(input.description, 8000);
  const startsOn = cleanText(input.startsOn, 10);
  const endsOn = cleanText(input.endsOn, 10);
  const whenLabel = cleanText(input.whenLabel, 160);
  if (title.length < 3) throw new Error("Give the event a title.");
  if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startsOn)) throw new Error("Add a start date.");
  if (endsOn && !/^\d{4}-\d{2}-\d{2}$/.test(endsOn)) throw new Error("Check the end date.");
  if (whenLabel.length < 3) throw new Error("Add the wording visitors should see for the date.");
  const id = asNum(input.id);
  if (await slugTaken(sql, "events", slug, id)) return { ok: false, message: "That address is already used. Choose another." };
  const registration = cleanText(input.registrationUrl, 400);
  const registrationUrl = registration ? safeHttpUrl(registration) : "";
  if (registration && !registrationUrl) throw new Error("The registration link must be an http(s) URL.");
  const status = input.status === "cancelled" ? "cancelled" : "scheduled";
  if (id == null) {
    const rows = await sql<{ id: number }>`
      insert into events (title, slug, description, starts_on, ends_on, when_label, time_zone, venue, registration_url, status)
      values (
        ${title}, ${slug}, ${description}, ${startsOn}, ${endsOn || null}, ${whenLabel},
        ${cleanText(input.timeZone, 80)}, ${cleanText(input.venue, 200)}, ${registrationUrl}, ${status}
      ) returning id
    `;
    return { ok: true, id: Number(rows[0]?.id), slug };
  }
  const rows = await sql<{ id: number }>`
    update events set
      title = ${title}, slug = ${slug}, description = ${description}, starts_on = ${startsOn}, ends_on = ${endsOn || null},
      when_label = ${whenLabel}, time_zone = ${cleanText(input.timeZone, 80)}, venue = ${cleanText(input.venue, 200)},
      registration_url = ${registrationUrl}, status = ${status}, updated_at = now()
    where id = ${id} returning id
  `;
  if (!rows[0]) return { ok: false, message: "That event could not be found." };
  return { ok: true, id, slug };
}

export async function deleteEventRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from events where id = ${id}`;
  return { ok: true as const };
}

export async function editorCategories(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`select * from categories order by name`;
  return rows.map(mapCategory);
}

export async function saveCategoryRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const name = cleanText(input.name, 80);
  const slug = slugify(cleanText(input.slug, 90) || name);
  const description = cleanText(input.description, 400);
  if (name.length < 2) throw new Error("Name the category.");
  if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
  const existing = await sql<{ id: number }>`select id from categories where slug = ${slug}`;
  if (existing[0]) return { ok: false, message: "That category already exists." };
  const rows = await sql<{ id: number }>`
    insert into categories (name, slug, description) values (${name}, ${slug}, ${description}) returning id
  `;
  return { ok: true, id: Number(rows[0]?.id), slug };
}

export async function deleteCategoryRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from categories where id = ${id}`;
  return { ok: true as const };
}

async function listMedia(sql: Sql): Promise<MediaItem[]> {
  const rows = await sql<Record<string, unknown>>`
    select id, filename, alt, caption, mime from media order by created_at desc limit 40
  `;
  return rows.map((row) => ({
    id: Number(row.id),
    filename: asString(row.filename),
    alt: asString(row.alt),
    caption: asString(row.caption),
    mime: asString(row.mime),
    url: `/media/${Number(row.id)}`,
  }));
}

export async function editorMedia(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  return listMedia(sql);
}

export async function saveMediaRecord(userId: string, raw: unknown) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const mime = cleanText(input.mime, 40);
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(mime)) throw new Error("Use a JPEG, PNG, WebP, or GIF.");
  const base64 = typeof input.base64 === "string" ? input.base64 : "";
  if (!/^[A-Za-z0-9+/=\s]+$/.test(base64) || base64.length < 32 || base64.length > 1_700_000) {
    throw new Error("That file is empty or larger than 1.2 MB.");
  }
  const filename = cleanText(input.filename, 120).replace(/[^\w.\- ]+/g, "") || "image";
  const alt = cleanText(input.alt, 300);
  if (alt.length < 3) throw new Error("Describe the image for people who cannot see it.");
  const rows = await sql<{ id: number }>`
    insert into media (filename, alt, caption, mime, bytes_base64)
    values (${filename}, ${alt}, ${cleanText(input.caption, 300)}, ${mime}, ${base64.replace(/\s/g, "")})
    returning id
  `;
  return { ok: true as const, id: Number(rows[0]?.id), url: `/media/${Number(rows[0]?.id)}` };
}

export async function deleteMediaRecord(userId: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  await sql`delete from media where id = ${id}`;
  return { ok: true as const };
}

export async function readMediaFile(id: number) {
  const sql = await ready();
  const rows = await sql<{ mime: string; bytes_base64: string }>`
    select mime, bytes_base64 from media where id = ${id}
  `;
  return rows[0] ?? null;
}

export async function saveSettingsRecord(userId: string, raw: unknown): Promise<SaveResult> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const input = (raw ?? {}) as Record<string, unknown>;
  const ministerName = cleanText(input.ministerName, 120);
  const contactEmail = cleanText(input.contactEmail, 160);
  if (ministerName.length < 2) throw new Error("The site needs the minister's name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) throw new Error("Enter a usable contact email.");
  const urlField = (key: string) => {
    const value = cleanText(input[key], 400);
    if (!value) return "";
    const url = safeHttpUrl(value);
    if (!url) throw new Error("Social links must be http(s) URLs or left blank.");
    return url;
  };
  await sql`
    update site_settings set
      minister_name = ${ministerName},
      professional_title = ${cleanText(input.professionalTitle, 160)},
      kicker = ${cleanText(input.kicker, 120)},
      homepage_intro = ${cleanText(input.homepageIntro, 800)},
      pull_quote = ${cleanText(input.pullQuote, 400)},
      biography_summary = ${cleanText(input.biographySummary, 800)},
      biography = ${cleanText(input.biography, 12000)},
      interests = ${cleanText(input.interests, 800)},
      credentials_note = ${cleanText(input.credentialsNote, 600)},
      portrait_url = ${assetPath(cleanText(input.portraitUrl, 400)) || null},
      portrait_alt = ${cleanText(input.portraitAlt, 300)},
      contact_email = ${contactEmail},
      youtube_url = ${urlField("youtubeUrl")},
      x_url = ${urlField("xUrl")},
      facebook_url = ${urlField("facebookUrl")},
      instagram_url = ${urlField("instagramUrl")},
      seo_title = ${cleanText(input.seoTitle, 180)},
      seo_description = ${cleanText(input.seoDescription, 300)},
      footer_note = ${cleanText(input.footerNote, 300)},
      newsletter_heading = ${cleanText(input.newsletterHeading, 120)},
      newsletter_text = ${cleanText(input.newsletterText, 600)},
      speaking_note = ${cleanText(input.speakingNote, 1200)},
      show_sample_notice = ${input.showSampleNotice !== false},
      updated_at = now()
    where id = 1
  `;
  return { ok: true, id: 1, slug: "settings" };
}

export async function editorEnquiries(userId: string): Promise<Enquiry[]> {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<Record<string, unknown>>`select * from contact_messages order by created_at desc limit 100`;
  return rows.map((row) => ({
    id: Number(row.id),
    name: asString(row.name),
    email: asString(row.email),
    enquiryType: asString(row.enquiry_type),
    message: asString(row.message),
    createdAt: asString(row.created_at),
  }));
}

export async function editorNewsletter(userId: string) {
  const sql = await ready();
  await requireEditor(sql, userId);
  const rows = await sql<{ email: string; created_at: unknown }>`
    select email, created_at from newsletter_signups order by created_at desc limit 200
  `;
  return rows.map((row) => ({ email: row.email, createdAt: asString(row.created_at) }));
}

function allowRate(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < 10 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export async function submitContact(raw: unknown): Promise<ContactResult> {
  const input = (raw ?? {}) as Record<string, unknown>;
  if (cleanText(input.company, 200)) return { ok: true, saved: false };
  const name = cleanText(input.name, 120);
  const email = cleanText(input.email, 160);
  const enquiryType = cleanText(input.enquiryType, 40);
  const message = cleanText(input.message, 4000);
  const fields: Record<string, string> = {};
  if (name.length < 2) fields.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "Enter an email address we can reply to.";
  if (!["Speaking", "Writing", "Media", "General"].includes(enquiryType)) fields.enquiryType = "Choose a kind of enquiry.";
  if (message.length < 20) fields.message = "Write at least a sentence or two.";
  if (message.split("http").length > 4) fields.message = "Too many links for a first note.";
  if (Object.keys(fields).length > 0) return { ok: false, message: "Please correct the highlighted fields.", fields };
  if (!allowRate(email.toLowerCase())) {
    return { ok: false, message: "Please wait a few minutes before sending another note." };
  }
  const sql = await ready();
  await sql`
    insert into contact_messages (name, email, enquiry_type, message)
    values (${name}, ${email}, ${enquiryType}, ${message})
  `;
  return { ok: true, saved: true };
}

export async function subscribeNewsletter(raw: unknown): Promise<ContactResult> {
  const input = (raw ?? {}) as Record<string, unknown>;
  if (cleanText(input.company, 200)) return { ok: true, saved: false };
  const email = cleanText(input.email, 160).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Enter an email address.", fields: { email: "Enter an email address." } };
  }
  if (!allowRate(`news:${email}`)) return { ok: false, message: "Please wait a few minutes and try again." };
  const sql = await ready();
  await sql`
    insert into newsletter_signups (email) values (${email})
    on conflict (email) do nothing
  `;
  return { ok: true, saved: true };
}

export async function previewRecord(userId: string, kind: string, id: number) {
  const sql = await ready();
  await requireEditor(sql, userId);
  if (kind === "article") {
    const rows = await sql<Record<string, unknown>>`
      select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
      from articles a left join categories c on c.id = a.category_id where a.id = ${id}
    `;
    return rows[0] ? { kind, article: mapArticle(rows[0]) } : null;
  }
  if (kind === "book") {
    const rows = await sql<Record<string, unknown>>`select * from books where id = ${id}`;
    return rows[0] ? { kind, book: mapBook(rows[0]) } : null;
  }
  if (kind === "message") {
    const rows = await sql<Record<string, unknown>>`
      select m.*, coalesce(c.name, '') as category_name from messages m
      left join categories c on c.id = m.category_id where m.id = ${id}
    `;
    return rows[0] ? { kind, message: mapTeaching(rows[0]) } : null;
  }
  return null;
}
