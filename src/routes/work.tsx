import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";


export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Selected author marketing work from Fourth Group & Co: cinematic book trailers, Listopia campaigns, author websites and listing optimisation.",
      },
      { property: "og:title", content: "Work | Fourth Group & Co" },
      {
        property: "og:description",
        content: "Selected campaigns, films and author websites from Fourth Group & Co.",
      },
    ],
  }),
  component: Work,
});

const disciplines = [
  {
    title: "Cinematic book trailers",
    text: "Short films scored, cut and graded in house, delivered in every aspect ratio a launch needs.",
    meta: "Film",
  },
  {
    title: "Listopia campaigns",
    text: "List-by-list placement work, reported with live links so a position can always be checked.",
    meta: "Discovery",
  },
  {
    title: "Author websites",
    text: "Editorial sites built for readers who arrive from a trailer and stay for the newsletter.",
    meta: "Design & build",
  },
  {
    title: "Listing optimisation",
    text: "Categories, keywords and A+ content rewritten around how buyers actually search.",
    meta: "Retail",
  },
];

function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">The reel</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Work made <span className="italic text-gold">like short films.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            Our full portfolio is shared privately with authors during a project conversation —
            client titles stay confidential until they are published. Here is the shape of what we
            deliver.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Our work</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">
          Work shaped around <span className="italic text-gold">each book.</span>
        </h2>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {disciplines.map((d) => (
            <article key={d.title} className="bg-background p-10">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">{d.meta}</p>
              <h2 className="mt-5 text-2xl">{d.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </article>
          ))}
        </div>


        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl">
            Want to see the reel <span className="italic text-gold">for your genre?</span>
          </h2>
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
