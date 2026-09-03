import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { reviews, reviewFilters } from "@/components/site/showcase";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Authors on working with Fourth Group & Co — reviews by service, from Listopia campaigns to trailers, websites and Amazon SEO.",
      },
      { property: "og:title", content: "Reviews | Fourth Group & Co" },
      {
        property: "og:description",
        content: "What authors say about working with the studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const [filter, setFilter] = useState(reviewFilters[0]!);
  const shown = filter === reviewFilters[0] ? reviews : reviews.filter((r) => r.service === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">What authors say</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Authors on working <span className="italic text-gold">with us.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Every review published here is checked against a completed project first. Nothing is
            written for us, and nothing goes up without the author's permission.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {reviewFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`border px-4 py-2 text-[0.64rem] uppercase tracking-[0.18em] transition-colors ${
                filter === f
                  ? "border-gold bg-navy text-cream"
                  : "border-border text-muted-foreground hover:border-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <figure key={r.quote} className="flex flex-col bg-background p-10">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">Verified project</p>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm">{r.name}</p>
                <p className="mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-14 text-sm text-muted-foreground">
            No reviews published for this service yet.
          </p>
        )}

        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Ready to write <span className="italic text-gold">the next one?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Start your project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
