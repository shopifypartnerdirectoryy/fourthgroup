import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { caseStudies } from "@/components/site/showcase";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Case studies from Fourth Group & Co: Listopia placements, trailer-led relaunches, author platform builds and listing rebuilds.",
      },
      { property: "og:title", content: "Success Stories | Fourth Group & Co" },
      {
        property: "og:description",
        content: "What happened after we read the book — case studies from the studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuccessStories,
});

const stats = [
  { value: "Under 1 hr", label: "Average reply time" },
  { value: "4 titles", label: "Taken each quarter" },
  { value: "100%", label: "Placements with live links" },
];

function SuccessStories() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            What happened <span className="italic text-gold">after we read it.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-8 border-t border-cream/15 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-gold">{s.value}</dt>
                <dd className="mt-2 text-[0.66rem] uppercase tracking-[0.2em] text-cream/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Selected engagements</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Books, and what <span className="italic text-gold">we actually did.</span>
        </h2>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {caseStudies.map((c) => (
            <article key={c.slug} className="bg-background p-10">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">{c.engagement}</p>
              <h3 className="mt-4 text-2xl">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="mt-1 font-display text-xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">
                Status · {c.status}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Your book could be <span className="italic text-gold">the next one.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Submit your manuscript
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
