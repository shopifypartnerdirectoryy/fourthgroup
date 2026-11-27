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
          "An overview of Fourth Group & Co's author marketing capabilities, including creative production, reader discovery and author platforms.",
      },
      { property: "og:title", content: "Work | Fourth Group & Co" },
      {
        property: "og:description",
        content: "An overview of campaign services and creative deliverables offered by Fourth Group & Co.",
      },
    ],
      links: [{ rel: "canonical", href: "https://fourthgroup.co/work" }],
  }),
  component: Work,
});

const disciplines = [
  {
    title: "Cinematic book trailers",
    text: "Book-led trailer concepts, storyboards, editing and final video files prepared for agreed campaign placements.",
    meta: "Film",
  },
  {
    title: "Listopia campaigns",
    text: "Relevant list research, compliant reader engagement and live placement links where placements are secured.",
    meta: "Discovery",
  },
  {
    title: "Author websites",
    text: "Responsive author websites designed around books, biography, events, press and reader journeys.",
    meta: "Design & build",
  },
  {
    title: "Listing optimisation",
    text: "Review of relevant keywords, categories, book descriptions and A+ content recommendations.",
    meta: "Retail",
  },
];

function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Our capabilities</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Creative work, <span className="italic text-gold">built around books.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">
            This page outlines the types of work we can undertake. Public client examples are added only when the project details and publication permissions have been verified.
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
            Looking for examples <span className="italic text-gold">relevant to your book?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Ask about approved examples
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
