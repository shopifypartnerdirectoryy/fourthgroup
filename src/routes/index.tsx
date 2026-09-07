import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, team, process, reasons, faqs } from "@/components/site/data";
import { reel } from "@/components/site/reel";
import heroAsset from "@/assets/hero-library.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fourth Group & Co | Author Marketing Studio" },
      {
        name: "description",
        content:
          "Fourth Group & Co is an author marketing studio: Goodreads Listopia campaigns, cinematic book trailers, author websites and Amazon SEO.",
      },
      { property: "og:title", content: "Fourth Group & Co | Author Marketing Studio" },
      {
        property: "og:description",
        content:
          "Goodreads Listopia campaigns, cinematic book trailers, author websites and Amazon SEO, made book by book.",
      },
    ],
  }),
  component: Home,
});

const platforms = ["Goodreads", "Amazon", "NetGalley", "Reedsy", "BookBub", "Kobo"];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={hero}
          alt="A lamplit private library at dusk with an open book on a polished desk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/70" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
          <div className="max-w-3xl rise">
            <p className="eyebrow">Author Marketing Studio</p>
            <h1 className="mt-6 text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
              From manuscript
              <br />
              to the shelves
              <br />
              <span className="italic text-gold">readers remember.</span>
            </h1>
            <div className="rule-gold mt-8 w-40" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75">
              Fourth Group &amp; Co builds visibility for serious authors — Listopia campaigns,
              cinematic trailers, author websites and Amazon optimisation, executed with the care a
              manuscript deserves.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center border border-cream/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                View our work
              </Link>
            </div>

            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-cream/15 pt-8">
              {[
                ["40+", "Trailers delivered"],
                ["4", "Marketing disciplines"],
                ["100%", "Bespoke, never templated"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-4xl text-gold">{v}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/55">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="surface-navy overflow-hidden border-y border-cream/10 py-10">
        <p className="mb-8 text-center text-[0.66rem] uppercase tracking-[0.28em] text-cream/45">
          Supporting authors across leading publishing platforms
        </p>
        <div className="flex w-max marquee-track">
          {[...platforms, ...platforms, ...platforms, ...platforms].map((p, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-12 font-display text-2xl tracking-[0.1em] text-cream/35"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Four disciplines, <span className="italic text-gold">one quiet obsession.</span>
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          We take a small number of books each quarter, so every campaign gets the attention of the
          people who designed it.
        </p>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="group bg-background p-10 transition-colors hover:bg-secondary">
              <span className="font-display text-3xl text-gold/70">{s.n}</span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                <div>
                  <p className="font-display text-xl">{s.price}</p>
                  <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.note}
                  </p>
                </div>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-navy hover:text-gold"
                >
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-navy border-y border-gold/15">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The reel</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-cream sm:text-5xl">
                Trailers made <span className="italic text-gold">like short films.</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-[0.72rem] uppercase tracking-[0.22em] text-gold hover:text-gold-soft"
            >
              View full portfolio →
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {reel.map((r) => (
              <article key={r.title} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 right-4 bg-navy-deep/80 px-3 py-1 text-[0.66rem] tracking-[0.18em] text-cream/80">
                    {r.length}
                  </span>
                </div>
                <p className="mt-5 text-[0.66rem] uppercase tracking-[0.22em] text-gold">
                  {r.genre}
                </p>
                <h3 className="mt-3 text-2xl text-cream">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="eyebrow">Why authors stay</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Four habits we <span className="italic text-gold">refuse to drop.</span>
        </h2>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-background p-8">
              <h3 className="text-xl">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight text-cream sm:text-5xl">
            A short list of books, <span className="italic text-gold">handled properly.</span>
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="border-t border-gold/40 pt-6">
                <span className="font-display text-2xl text-gold">{p.step}</span>
                <h3 className="mt-4 text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <p className="eyebrow">The studio</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
          The people who <span className="italic text-gold">read your book.</span>
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name}>
              <div className="overflow-hidden bg-secondary">
                <img
                  src={m.image}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 text-2xl">{m.name}</h3>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-gold">{m.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <a
                href={`mailto:${m.email}`}
                className="mt-4 inline-block text-sm text-navy underline-offset-4 hover:text-gold hover:underline"
              >
                {m.email}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-28">
          <p className="eyebrow text-center">Questions</p>
          <h2 className="mt-5 text-center text-4xl leading-tight sm:text-5xl">
            The things authors <span className="italic text-gold">ask us first.</span>
          </h2>
          <dl className="mt-14 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="grid gap-3 py-7 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <dt className="text-xl leading-snug">{f.q}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>



      <section className="surface-navy border-t border-gold/20">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="eyebrow">Next step</p>
          <h2 className="mt-5 text-4xl leading-tight text-cream sm:text-5xl">
            Tell us about <span className="italic text-gold">your book.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-cream/65">
            Send the title, the genre and where you are in the journey. We will tell you honestly
            whether we are the right studio for it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep transition-colors hover:bg-gold-soft"
            >
              Start your project
            </Link>
            <a
              href="mailto:info@fourthgroupco.com"
              className="border border-cream/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              info@fourthgroupco.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
