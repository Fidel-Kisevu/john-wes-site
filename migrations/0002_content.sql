-- Public ministry content. Published rows are world-readable.
-- Drafts, enquiries, and newsletter addresses are not.

create table if not exists app_meta (
  key text primary key,
  value text not null
);

create table if not exists site_admins (
  user_id text primary key,
  created_at timestamptz not null default now()
);

create table if not exists site_settings (
  id integer primary key check (id = 1),
  minister_name text not null,
  professional_title text not null,
  kicker text not null,
  homepage_intro text not null,
  pull_quote text not null,
  biography_summary text not null,
  biography text not null,
  interests text not null,
  credentials_note text not null,
  portrait_url text,
  portrait_alt text not null default '',
  contact_email text not null,
  youtube_url text not null default '',
  x_url text not null default '',
  facebook_url text not null default '',
  instagram_url text not null default '',
  seo_title text not null,
  seo_description text not null,
  footer_note text not null,
  newsletter_heading text not null,
  newsletter_text text not null,
  speaking_note text not null,
  show_sample_notice boolean not null default true,
  updated_at timestamptz not null default now()
);

create table if not exists categories (
  id serial primary key,
  name text not null,
  slug text not null unique,
  description text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists articles (
  id serial primary key,
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  body text not null default '',
  hero_image text,
  hero_alt text not null default '',
  category_id integer references categories (id) on delete set null,
  author_name text not null,
  featured boolean not null default false,
  published_at timestamptz,
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text not null default '',
  seo_description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists books (
  id serial primary key,
  title text not null,
  slug text not null unique,
  subtitle text not null default '',
  cover_image text,
  cover_alt text not null default '',
  description text not null default '',
  author_name text not null,
  publisher text not null default '',
  publication_year integer,
  isbn text not null default '',
  price text not null default '',
  currency text not null default '',
  purchase_url text not null default '',
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text not null default '',
  seo_description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists messages (
  id serial primary key,
  title text not null,
  slug text not null unique,
  description text not null default '',
  video_url text not null default '',
  thumbnail text,
  thumbnail_alt text not null default '',
  speaker text not null,
  recorded_on date,
  duration text not null default '',
  series text not null default '',
  scripture text not null default '',
  category_id integer references categories (id) on delete set null,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text not null default '',
  seo_description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists events (
  id serial primary key,
  title text not null,
  slug text not null unique,
  description text not null default '',
  starts_on date not null,
  ends_on date,
  when_label text not null,
  time_zone text not null default '',
  venue text not null default '',
  registration_url text not null default '',
  status text not null default 'scheduled' check (status in ('scheduled', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists media (
  id serial primary key,
  filename text not null,
  alt text not null default '',
  caption text not null default '',
  mime text not null,
  bytes_base64 text not null,
  created_at timestamptz not null default now()
);

create table if not exists contact_messages (
  id serial primary key,
  name text not null,
  email text not null,
  enquiry_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists newsletter_signups (
  id serial primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

create index if not exists articles_status_idx on articles (status);
create index if not exists books_status_idx on books (status);
create index if not exists messages_status_idx on messages (status);
create index if not exists events_starts_idx on events (starts_on);
