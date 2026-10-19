import type { ReactNode } from "react";

export function SimplePage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 fade-up">
      <p className="eyebrow">— {eyebrow}</p>
      <h1 className="mt-2 text-4xl md:text-5xl">{title}</h1>
      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
