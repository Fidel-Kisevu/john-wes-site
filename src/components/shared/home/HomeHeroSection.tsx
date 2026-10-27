import { Link } from "@tanstack/react-router";
import { Photo } from "@/components/site";
import type { Settings } from "@/lib/content-types";

export function HomeHeroSection({ settings }: { settings: Settings }) {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-6 md:grid-cols-12 md:pt-16">
      <div className="md:col-span-7">
        <p className="text-sm text-oxblood">{settings.kicker}</p>
        <h1 className="display mt-4 text-5xl text-ink md:text-7xl">{settings.ministerName}</h1>
        <p className="mt-6 max-w-xl text-lg">{settings.homepageIntro}</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/articles" search={{ category: "" }} className="border-b border-oxblood pb-1 text-oxblood">
            Read the essays
          </Link>
          <Link to="/about" className="border-b border-line pb-1 hover:border-oxblood">
            About the ministry
          </Link>
        </div>
      </div>
      <figure className="md:col-span-5">
        <Photo src={settings.portraitUrl} alt={settings.portraitAlt} ratio="portrait" priority />
        <figcaption className="mt-3">
          <span className="display block text-2xl">{settings.ministerName}</span>
          <span className="text-sm text-muted">{settings.professionalTitle}</span>
        </figcaption>
      </figure>
    </section>
  );
}
