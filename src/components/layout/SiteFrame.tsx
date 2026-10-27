import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-ink">
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
