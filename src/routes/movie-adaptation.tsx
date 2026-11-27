import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/movie-adaptation")({
  head: () => ({ meta: [
    { title: "Screen Adaptation | Fourth Group & Co" },
    { name: "description", content: "Book-to-screen packaging and adaptation potential assessment for authors exploring film and television pathways." },
    { property: "og:title", content: "Screen Adaptation | Fourth Group & Co" },
    { property: "og:description", content: "Explore story assessment, character development and submission readiness." },
  ],
    links: [{ rel: "canonical", href: "https://fourthgroup.co/movie-adaptation" }],
  }),
  component: MovieAdaptation,
});

const stages = [
  ["Story assessment", "Review the premise, themes, narrative arc and the elements that could translate to a screen format."],
  ["Character development", "Consider principal characters, relationships, motivations and the dramatic engine of the story."],
  ["Submission readiness", "Discuss rights position, project readiness and the information required before any professional submission."],
  ["Representation pathway", "Where genuine industry relationships and a suitable written mandate exist, representation or producer submissions may be discussed as a separate service."],
];

function MovieAdaptation() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Book-to-screen packaging</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">When a story has <span className="italic text-gold">another life.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">A book-to-screen conversation begins with the story. We help authors consider adaptation potential, character development and whether the project is ready for a professional submission discussion.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <p className="eyebrow">The assessment pathway</p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map(([title,description],i) => <article key={title} className="border-t border-gold/50 pt-6"><span className="font-display text-2xl text-gold">0{i+1}</span><h2 className="mt-4 text-xl">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <div className="mt-16 border border-border p-10 lg:p-14">
        <h2 className="text-3xl">A realistic route from <span className="italic text-gold">page to screen.</span></h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">An assessment can help clarify a book’s adaptation potential and identify what may be needed for a submission. It does not guarantee representation, producer interest, an option, a sale, financing, casting or a film or television production. Representation or external submissions are only offered where genuine industry relationships and an appropriate written mandate are in place.</p>
        <Link to="/contact" className="mt-9 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Request a screen assessment</Link>
      </div>
    </section>
    <Footer />
  </div>;
}
