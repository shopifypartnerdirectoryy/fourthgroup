import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { portfolio } from "@/components/site/showcase";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Cinematic book trailers, Listopia campaigns and author websites produced by Fourth Group & Co, shown genre by genre.",
      },
      { property: "og:title", content: "Portfolio | Fourth Group & Co" },
      {
        property: "og:description",
        content: "Films, campaigns and author sites made book by book at Fourth Group & Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">The work</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Every campaign began <span className="italic text-gold">with a manuscript.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Each piece below was scripted from the book itself, art-directed shot by shot and scored
            to picture. Full films are shared privately during a project conversation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
        <p className="eyebrow">Filmed by authors</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Authors on <span className="italic text-gold">the finished work.</span>
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {videoReviews.map((v) => (
            <figure key={v.slug}>
              <video
                src={v.video}
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full bg-navy-deep object-cover"
              />
              <figcaption className="mt-5">
                <p className="text-xl">{v.name}</p>
                <p className="mt-1 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {v.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="space-y-24">

          {portfolio.map((p, i) => (
            <article
              key={p.slug}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
            >
              <figure className="relative overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-4 right-4 bg-navy-deep/80 px-3 py-1 text-[0.66rem] tracking-[0.18em] text-cream/80">
                  Book trailer · {p.length}
                </figcaption>
              </figure>

              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">
                  {p.n} · {p.category}
                </p>
                <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.author}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.disciplines.map((d) => (
                    <li
                      key={d}
                      className="border border-border px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-foreground/70"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-navy hover:text-gold"
                >
                  Request the full film →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-16 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Want the reel <span className="italic text-gold">for your genre?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Tell us the book and we will send the closest work we have made, usually within the hour.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Request the portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
