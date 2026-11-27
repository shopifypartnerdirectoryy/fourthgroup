import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/movie-adaptation")({
  head: () => ({ meta: [
    { title: "Publishing & Screen Opportunities | Fourth Group & Co" },
    { name: "description", content: "An initial editorial conversation about book adaptation potential and screen-ready author materials." },
    { property: "og:title", content: "Publishing & Screen Opportunities | Fourth Group & Co" },
    { property: "og:description", content: "Explore the adaptation potential of a book with a clear, realistic first assessment." },
  ] }),
  component: MovieAdaptation,
});

function MovieAdaptation() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Publishing & screen opportunities</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">When a story has <span className="italic text-gold">another life.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">Some books invite a conversation about adaptation. We can help authors consider the story's screen potential and prepare a concise, book-led overview as an initial step.</p>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
      <h2 className="text-3xl sm:text-4xl">A grounded first assessment</h2>
      <div className="mt-10 space-y-6">
        {[
          ["Story and format", "Discuss the central premise, characters, themes and the formats that might suit the material."],
          ["Rights and readiness", "Identify the rights position and information that should be clarified before any external approach."],
          ["Presentation materials", "Consider a concise synopsis and project overview suitable for a later professional conversation."],
        ].map(([title,description]) => <article key={title} className="border-b border-border pb-6"><h3 className="text-xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <p className="mt-10 text-sm leading-relaxed text-muted-foreground">This service is an initial editorial and preparation conversation. Fourth Group &amp; Co does not promise representation, a producer attachment, an option, a sale, financing, casting or a film or television production.</p>
      <Link to="/contact" className="mt-10 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Discuss screen potential</Link>
    </section>
    <Footer />
  </div>;
}
