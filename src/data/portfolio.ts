export type PortfolioCategory =
  | "Book Covers"
  | "Interior Scenes"
  | "Character Design"
  | "Sketches"
  | "Coloring Book Covers";

export const portfolioCategories: PortfolioCategory[] = [
  "Book Covers",
  "Interior Scenes",
  "Character Design",
  "Sketches",
  "Coloring Book Covers",
];

export type PortfolioItem = {
  /** Image source. Use an imported asset or a public/ path. */
  src: string;
  title: string;
  caption: string;
  category: PortfolioCategory;
  alt: string;
  /** Mark the strongest pieces — they render first and larger. */
  featured?: boolean;
};

/**
 * Add a new piece by appending one object below. Nothing else needs to change:
 * the grid, filters and lightbox all read from this list.
 */
export const portfolioItems: PortfolioItem[] = [];

export const sortedPortfolioItems = (): PortfolioItem[] =>
  [...portfolioItems].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
