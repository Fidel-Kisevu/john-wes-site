import { Link } from "@tanstack/react-router";
import { SiteFrame } from "../layout/SiteFrame";

export function Missing({ title, body }: { title: string; body: string }) {
  return (
    <SiteFrame>
      <div className="mx-auto max-w-xl px-5 py-24">
        <p className="text-sm text-oxblood">Not found</p>
        <h1 className="display mt-3 text-4xl">{title}</h1>
        <p className="mt-4 text-muted">{body}</p>
        <Link to="/" className="mt-8 inline-block border-b border-oxblood text-oxblood">
          Return home
        </Link>
      </div>
    </SiteFrame>
  );
}
