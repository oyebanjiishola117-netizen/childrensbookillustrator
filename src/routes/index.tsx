import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, MAILTO, WHATSAPP } from "@/components/site-header";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import door from "@/assets/portfolio/door.jpg.asset.json";
import portrait from "@/assets/portrait.png.asset.json";

const TITLE = "Azeez Faruq — Children's Book Illustrator";
const DESCRIPTION =
  "Azeez Faruq is a children's book illustrator creating characters, story scenes, covers and print-ready files for authors and publishers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Full Children's Book Illustration",
    body: "Story scenes, full pages and spreads.",
  },
  {
    title: "Character Design",
    body: "Consistent characters, expressions, poses and character sheets.",
  },
  {
    title: "Book & Coloring Book Cover Art",
    body: "Cover illustrations shaped around the story.",
  },
  {
    title: "Layout & Print Preparation",
    body: "Book layout and files for publishing, including KDP and IngramSpark projects.",
  },
];

const steps = [
  "Manuscript",
  "Characters",
  "Sketches",
  "Illustrations",
  "Layout",
  "Print-ready files",
];


function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={door.url}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* soft cream scrim so the sticky header stays readable over the art */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[oklch(0.973_0.017_86/0.85)] to-transparent"
        />
        {/* warm dark scrim so the headline reads over the art */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[oklch(0.24_0.03_52/0.92)] via-[oklch(0.24_0.03_52/0.4)] to-transparent"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-highlight">
            Children&rsquo;s book illustrator
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.08] text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Children&rsquo;s book illustrations that bring every page together.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg">
            I&rsquo;m Azeez Faruq. I help turn manuscripts into expressive, cohesive
            books&mdash;from memorable characters to finished illustrations and print-ready
            files.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Message Me on WhatsApp
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl text-foreground sm:text-4xl">Selected work</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Covers, interior scenes, character designs and sketches. Click any piece for a larger
          view.
        </p>
        <div className="mt-10">
          <PortfolioGallery />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sand/50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-3xl text-foreground sm:text-4xl">Services</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl text-foreground sm:text-4xl">How a book comes together</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          I start by understanding your story so the characters, emotions, and scenes feel
          connected from page to page.
        </p>
        <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-soft">
                {step}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden className="text-highlight">
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-sand/50 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[320px_1fr]">
          <div className="aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl bg-sand/60 shadow-lift">
            <img
              src={portrait.url}
              alt="Portrait of Azeez Faruq"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-foreground sm:text-4xl">About Azeez</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I care about understanding a story before I draw it. That means reading the
              manuscript closely, then building characters who stay recognisable and expressive
              from the first page to the last.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              My focus is character consistency, emotion, and visual storytelling&mdash;so the
              pictures carry the story as much as the words do.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl text-foreground sm:text-4xl">Have a children&rsquo;s book in mind?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Send me your manuscript or tell me about your idea. We can talk about the characters,
          visual style, and what your book needs.
        </p>
        <div className="mt-8">
          <a
            href={MAILTO}
            className="inline-flex rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Tell Me About My Book
          </a>
        </div>
        <a
          href={MAILTO}
          className="mt-4 inline-block text-sm text-muted-foreground underline underline-offset-4"
        >
          azeezfaruk405@gmail.com
        </a>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Azeez Faruq &middot; Children&rsquo;s book illustrator
      </footer>
    </div>
  );
}
