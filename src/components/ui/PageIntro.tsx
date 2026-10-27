export function PageIntro({ kicker, title, deck }: { kicker?: string; title: string; deck?: string }) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-16">
      {kicker ? <p className="text-sm text-oxblood">{kicker}</p> : null}
      <h1 className="display mt-3 max-w-3xl text-4xl text-ink md:text-6xl">{title}</h1>
      {deck ? <p className="mt-5 max-w-2xl text-lg text-ink">{deck}</p> : null}
    </header>
  );
}
