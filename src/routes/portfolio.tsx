import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio | Fourth Group & Co" },
    { name: "description", content: "A selection of author campaign and creative work from Fourth Group & Co, shared with client permission." },
    { property: "og:title", content: "Portfolio | Fourth Group & Co" },
    { property: "og:description", content: "Book promotion, publicity and author marketing work." },
    { property: "og:type", content: "website" },
  ] }),
  component: Portfolio,
});

function Portfolio() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Campaigns made <span className="italic text-gold">around books.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">We respect client confidentiality. Work is shown publicly only when the author has approved the title, assets and project details for publication.</p>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
      <p className="eyebrow">Portfolio access</p>
      <h2 className="mt-5 text-4xl">Request relevant examples <span className="italic text-gold">for your genre.</span></h2>
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">Tell us about your book and the services you are considering. We can discuss which approved examples are suitable to share privately. We do not publish fictional client titles, invented results or unapproved author endorsements.</p>
      <Link to="/contact" className="mt-9 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Request portfolio examples</Link>
    </section>
    <Footer />
  </div>;
}
