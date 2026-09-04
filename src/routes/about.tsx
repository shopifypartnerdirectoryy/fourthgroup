import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { team, process } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Fourth Group & Co is a small author marketing studio. Meet the team behind the campaigns, films and author websites.",
      },
      { property: "og:title", content: "About the Studio | Fourth Group & Co" },
      {
        property: "og:description",
        content: "A small studio taking a short list of books each quarter, handled properly.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            A small studio, <span className="italic text-gold">by design.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Fourth Group &amp; Co exists because most books are marketed by people who never read
            them. We work the other way round: the manuscript first, the campaign second, and only
            as many titles as we can genuinely carry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">The team</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Three people, <span className="italic text-gold">no handoffs.</span>
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
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

      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="eyebrow">Our process</p>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">What we look for</p>
            <h2 className="mt-5 text-4xl">
              We say yes <span className="italic text-gold">carefully.</span>
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                "A finished manuscript, or one close enough to read properly.",
                "A reader you can describe in a sentence.",
                "A launch window that leaves time to make something good.",
                "An author who wants a plan, not a package.",
              ].map((t) => (
                <li key={t} className="flex gap-4 border-b border-border pb-5 text-sm">
                  <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-fit border border-border p-10">
            <p className="eyebrow">Submit your manuscript</p>
            <h3 className="mt-5 text-2xl">Send the book, not a brief.</h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Email the manuscript or a sample with your title, genre and launch date. We read
              everything ourselves, reply in under an hour, and come back with an honest view of
              what we would do — whether or not you hire us.
            </p>
            <a
              href="mailto:info@fourthgroupco.com?subject=Manuscript%20submission"
              className="mt-8 block bg-navy px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
            >
              Email your manuscript
            </a>
            <p className="mt-5 text-center text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
              Four titles taken each quarter
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
