import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Goodreads Listopia promotion, cinematic book trailers, author website design and Amazon SEO optimisation from Fourth Group & Co.",
      },
      { property: "og:title", content: "Services | Fourth Group & Co" },
      {
        property: "og:description",
        content:
          "Four author marketing disciplines: Listopia, trailers, author websites and Amazon SEO.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Everything a book needs <span className="italic text-gold">after the last edit.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((s) => (
          <section
            key={s.slug}
            className="grid gap-10 border-b border-border py-20 md:grid-cols-[auto_1fr_1fr] md:gap-16"
          >
            <span className="font-display text-4xl text-gold/70">{s.n}</span>
            <div>
              <h2 className="text-3xl leading-tight">{s.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <p className="mt-8 font-display text-2xl">{s.price}</p>
              <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.note}
              </p>
            </div>
            <ul className="space-y-4 md:border-l md:border-border md:pl-12">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl">
          Not sure which one <span className="italic text-gold">your book needs?</span>
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
        >
          Ask us
        </Link>
      </section>

      <Footer />
    </div>
  );
}
