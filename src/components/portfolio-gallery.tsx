import { useMemo, useState } from "react";
import { sortedPortfolioItems, type PortfolioItem } from "@/data/portfolio";

export function PortfolioGallery() {
  const items = useMemo(() => sortedPortfolioItems(), []);
  const [active, setActive] = useState<PortfolioItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
        <p className="font-display text-xl text-foreground">Artwork coming in</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          This gallery is ready and waiting for Azeez&rsquo;s illustrations. Each piece appears
          here with its own title, caption and category.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item) => (
          <figure key={item.title} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group block w-full overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border transition-transform duration-300 hover:-translate-y-1"
              aria-label={`View ${item.title} larger`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="px-1 pt-3">
              <p className="font-display text-base text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.caption}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-accent">{item.category}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <div
            className="max-h-full w-full max-w-4xl overflow-auto rounded-2xl bg-background p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} className="w-full rounded-xl" />
            <div className="flex items-start justify-between gap-4 px-2 py-3">
              <div>
                <p className="font-display text-lg text-foreground">{active.title}</p>
                <p className="text-sm text-muted-foreground">{active.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
