import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { team } from "@/components/site/data";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Team | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Meet the people at Fourth Group & Co who read your book before they market it — strategy, film and author platform, all in-house.",
      },
      { property: "og:title", content: "Our Team | Fourth Group & Co" },
      {
        property: "og:description",
        content: "The people who read your book before they market it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurTeam,
});

function OurTeam() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">The studio</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Three people, <span className="italic text-gold">four books a quarter.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            No account managers, no outsourced edit suite. The people below are the people who read
            the manuscript, write the plan and answer your email.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name}>
              <img
                src={m.image}
                alt={m.name}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full bg-secondary object-cover object-top"
              />
              <h2 className="mt-6 text-2xl">{m.name}</h2>
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

        <div className="mt-24 grid gap-px border border-border bg-border sm:grid-cols-3">
          {[
            { v: "Under 1 hr", l: "Average reply time" },
            { v: "4 titles", l: "Taken each quarter" },
            { v: "In-house", l: "Strategy, film and web" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-10">
              <p className="font-display text-3xl text-gold">{s.v}</p>
              <p className="mt-2 text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Prefer to talk <span className="italic text-gold">to a person?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
