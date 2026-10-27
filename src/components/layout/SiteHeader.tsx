import { Link, useRouteContext, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Settings } from "@/lib/content-types";

const NAV = [
  { to: "/articles", label: "Essays" },
  { to: "/books", label: "Books" },
  { to: "/messages", label: "Messages" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
] as const;

function useSettings(): Settings {
  return useRouteContext({ from: "__root__" }).settings;
}

function SkipToContentLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
    >
      Skip to content
    </a>
  );
}

function NavLinkItem({ item, path }: { item: (typeof NAV)[number]; path: string }) {
  const on = path === item.to || path.startsWith(`${item.to}/`);

  return (
    <Link
      key={item.to}
      to={item.to}
      aria-current={on ? "page" : undefined}
      className={on ? "text-sm text-oxblood" : "text-sm text-ink hover:text-oxblood"}
    >
      {item.label}
    </Link>
  );
}

function MobileNavPanel({ path }: { path: string }) {
  return (
    <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ivory px-5 py-6 md:hidden">
      <ul className="space-y-1">
        {NAV.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="block py-3 font-serif text-3xl">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/search" search={{ q: "" }} className="block py-3 font-serif text-3xl">
            Search
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block py-3 font-serif text-3xl">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function SiteHeaderView({
  settings,
  path,
  open,
  onToggleMenu,
}: {
  settings: Settings;
  path: string;
  open: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ivory">
      <SkipToContentLink />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:py-4">
        <Link to="/" className="min-w-0">
          <span className="block text-xs tracking-widest text-muted uppercase">Teacher</span>
          <span className="display block truncate text-2xl text-ink">
            {settings.ministerName.replace(/^Minister\s+/i, "") || settings.ministerName}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLinkItem key={item.to} item={item} path={path} />
          ))}
          <Link to="/search" search={{ q: "" }} aria-label="Search" className="text-ink hover:text-oxblood">
            <Search className="size-5" strokeWidth={1.75} />
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={onToggleMenu}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? <MobileNavPanel path={path} /> : null}
    </header>
  );
}

export function SiteHeader() {
  const settings = useSettings();
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return <SiteHeaderView settings={settings} path={path} open={open} onToggleMenu={() => setOpen((value) => !value)} />;
}
