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
      links: [{ rel: "canonical", href: "https://fourthgroup.co/about" }],
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
            A full-service agency, <span className="italic text-gold">built around books.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Fourth Group &amp; Co brings book promotion, publicity and author marketing together under one roof. We begin by understanding the book, the readers it is intended to reach and the outcome the author wants to pursue.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">The team</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          A leadership team, <span className="italic text-gold">one shared standard.</span>
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name}>
              <div className="flex aspect-[4/5] items-end bg-navy p-8"><span className="font-display text-5xl text-gold">{m.name.split(" ").map((part) => part[0]).join("")}</span></div>
              <h3 className="mt-6 text-2xl">{m.name}</h3>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-gold">{m.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
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
              Send your title, genre, publishing stage and launch date. We will review the information you provide and discuss an appropriate next step.
            </p>
            <a
              href="mailto:info@fourthgroupco.com?subject=Manuscript%20submission"
              className="mt-8 block bg-navy px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
            >
              Email your manuscript
            </a>
            <p className="mt-5 text-center text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
              Projects accepted by scope and availability
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
