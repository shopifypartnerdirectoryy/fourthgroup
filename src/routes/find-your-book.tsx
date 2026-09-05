import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { books, bookGenres } from "@/components/site/showcase";

export const Route = createFileRoute("/find-your-book")({
  head: () => ({
    meta: [
      { title: "Find Your Book | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Browse the Fourth Group & Co library by genre — crime, literary, non-fiction, fantasy, romance and young adult titles we have taken to market.",
      },
      { property: "og:title", content: "Find Your Book | Fourth Group & Co" },
      {
        property: "og:description",
        content: "A reader's library of the books the studio has worked on, sorted by genre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindYourBook,
});

function FindYourBook() {
  const [genre, setGenre] = useState(bookGenres[0]!);
  const [query, setQuery] = useState("");

  const shown = books.filter((b) => {
    const byGenre = genre === bookGenres[0] || b.genre === genre;
    const q = query.trim().toLowerCase();
    const bySearch = !q || b.title.toLowerCase().includes(q) || b.blurb.toLowerCase().includes(q);
    return byGenre && bySearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">For readers</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Find your <span className="italic text-gold">next book.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Every title here came through the studio, which means somebody read it cover to cover
            before it was ever marketed. Pick a genre, or search for a mood.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {bookGenres.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGenre(g)}
                className={`border px-4 py-2 text-[0.64rem] uppercase tracking-[0.18em] transition-colors ${
                  genre === g
                    ? "border-gold bg-navy text-cream"
                    : "border-border text-muted-foreground hover:border-gold"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles"
            aria-label="Search titles"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold lg:w-64"
          />
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((b) => (
            <article key={b.slug} className="flex flex-col bg-background">
              <img
                src={b.image}
                alt={`${b.title} — cover artwork`}
                width={1280}
                height={720}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">{b.genre}</p>
                <h2 className="mt-4 text-2xl leading-tight">{b.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {b.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {b.work.map((w) => (
                    <li
                      key={w}
                      className="border border-border px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-foreground/70"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-14 text-sm text-muted-foreground">
            Nothing matches that search yet — try another genre.
          </p>
        )}
      </section>

      <section id="submit" className="surface-navy">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Submit your book</p>
            <h2 className="mt-5 text-4xl text-cream sm:text-5xl">
              Want your book <span className="italic text-gold">in this library?</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cream/70">
              We take four titles a quarter. Send the manuscript or a generous sample with the
              genre, the reader you wrote it for and your launch window. You will hear back from a
              person who has read it, in under an hour.
            </p>
          </div>
          <div className="border border-gold/30 p-10">
            <ul className="space-y-5 text-sm text-cream/75">
              {[
                "Manuscript or sample chapters, any format",
                "Title, genre and comparable books",
                "Publication date or launch window",
                "What you have already tried, honestly",
              ].map((t) => (
                <li key={t} className="flex gap-4 border-b border-cream/10 pb-5">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 block bg-gold px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep transition-opacity hover:opacity-90"
            >
              Submit your book
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
