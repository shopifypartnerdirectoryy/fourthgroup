import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { reviews, reviewFilters, videoReviews } from "@/components/site/showcase";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Authors on working with Fourth Group & Co — written and filmed reviews by service, from Listopia campaigns to trailers, websites and Amazon SEO.",
      },
      { property: "og:title", content: "Reviews | Fourth Group & Co" },
      {
        property: "og:description",
        content: "What authors say about working with the studio, in writing and on camera.",
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

      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
        <p className="eyebrow">On camera</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Authors, <span className="italic text-gold">in their own words.</span>
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {videoReviews.map((v) => (
            <figure key={v.slug}>
              <video
                src={v.video}
                controls
                preload="metadata"
                playsInline
                aria-label={`${v.name} video review`}
                className="aspect-video w-full bg-navy-deep object-cover"
              />
              <figcaption className="mt-6">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">
                  Filmed review
                </p>
                <p className="mt-3 text-xl">{v.name}</p>
                <p className="mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {v.detail}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </figcaption>
            </figure>
          ))}
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

        <WriteReview />

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

function WriteReview() {
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [service, setService] = useState(reviewFilters[1]!);
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Book: ${book}`,
      `Service: ${service}`,
      `Rating: ${rating}/5`,
      "",
      text,
    ].join("\n");
    window.location.href = `mailto:info@fourthgroupco.com?subject=${encodeURIComponent(
      "Author review submission",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="write-a-review" className="mt-24 border border-border p-10 lg:p-14">
      <p className="eyebrow">Write a review</p>
      <h2 className="mt-5 text-3xl sm:text-4xl">
        Worked with us? <span className="italic text-gold">Tell the truth.</span>
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Reviews are published only after we confirm the project and you approve the wording. If you
        would rather record a short video review, say so below and we will send a link.
      </p>

      <form onSubmit={submit} className="mt-10 grid gap-6 md:grid-cols-2">
        <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
          Your name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
          />
        </label>
        <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
          Book title
          <input
            required
            value={book}
            onChange={(e) => setBook(e.target.value)}
            className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
          />
        </label>
        <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
          Service
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
          >
            {reviewFilters.slice(1).map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
        <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
          Rating
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
          >
            {["5", "4", "3", "2", "1"].map((r) => (
              <option key={r} value={r}>
                {r} out of 5
              </option>
            ))}
          </select>
        </label>
        <label className="md:col-span-2 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
          Your review
          <textarea
            required
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
          />
        </label>
        <button
          type="submit"
          className="md:col-span-2 justify-self-start bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
        >
          Send review
        </button>
      </form>
    </div>
  );
}
