import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { pricingTiers, pricingComparison } from "@/components/site/showcase";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Goodreads Listopia campaigns from $95. Trailers, author websites and Amazon SEO quoted per book by Fourth Group & Co.",
      },
      { property: "og:title", content: "Pricing | Fourth Group & Co" },
      {
        property: "og:description",
        content: "Transparent Listopia pricing and per-project quotes, with no long lock-ins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Investment</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Priced like a <span className="italic text-gold">commission.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            No retainers you cannot leave and no impressions you cannot verify. Listopia work is
            priced openly; everything else is quoted as a body of work with a stated outcome.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Goodreads Listopia</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Three ways to <span className="italic text-gold">get seen.</span>
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col border p-10 ${
                t.featured ? "border-gold bg-secondary/40" : "border-border"
              }`}
            >
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">{t.tag}</p>
              <h3 className="mt-4 text-2xl">{t.name}</h3>
              <p className="mt-6 font-display text-5xl">{t.price}</p>
              <p className="mt-4 text-sm text-muted-foreground">{t.summary}</p>
              <ul className="mt-8 flex-1 space-y-4">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 block px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
                  t.featured
                    ? "bg-gold text-navy-deep hover:bg-gold-soft"
                    : "bg-navy text-cream hover:bg-navy-deep"
                }`}
              >
                Start with {t.name.split(" ")[0]}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="eyebrow">Compare</p>
          <h2 className="mt-5 text-4xl text-cream sm:text-5xl">
            What changes <span className="italic text-gold">between tiers.</span>
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-sm text-cream/80">
              <thead>
                <tr className="border-b border-gold/30 text-left">
                  <th className="py-4 pr-6 font-normal text-[0.66rem] uppercase tracking-[0.2em] text-gold">
                    Included
                  </th>
                  {pricingTiers.map((t) => (
                    <th
                      key={t.name}
                      className="py-4 pr-6 font-normal text-[0.66rem] uppercase tracking-[0.2em] text-gold"
                    >
                      {t.name} {t.price}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingComparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-cream/10">
                    <td className="py-4 pr-6 text-cream/60">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i} className="py-4 pr-6">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Studio services</p>
        <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
          Quoted per project, because <span className="italic text-gold">no two books match.</span>
        </h2>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
          {services
            .filter((s) => s.slug !== "goodreads-listopia")
            .map((s) => (
              <article key={s.slug} className="bg-background p-10">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">{s.price}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-navy hover:text-gold"
                >
                  Explore →
                </Link>
              </article>
            ))}
        </div>

        <div className="mt-20 text-center">
          <p className="eyebrow">Taking four titles next quarter</p>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            Let the right readers <span className="italic text-gold">find your book.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Tell us about the book. We reply in under an hour, read it, then say honestly what we
            would do.
          </p>
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
