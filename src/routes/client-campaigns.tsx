import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/client-campaigns")({
  head: () => ({ meta: [
    { title: "Client Campaigns | Fourth Group & Co" },
    { name: "description", content: "Book promotion and author marketing campaigns by Fourth Group & Co, with project examples shared by permission." },
    { property: "og:title", content: "Client Campaigns | Fourth Group & Co" },
    { property: "og:description", content: "Campaign planning, creative delivery and transparent reporting for authors." },
  ] }),
  component: ClientCampaigns,
});

const deliverables = [
  ["Book discovery", "Reader-focused promotion across appropriate discovery channels, with agreed links and delivery reporting."],
      links: [{ rel: "canonical", href: "https://fourthgroup.co/client-campaigns" }],
  ["Creative campaigns", "Book trailers, short-form social creative and coordinated launch assets built around the title."],
  ["Author platform", "Website design, redesign and digital materials that help readers explore an author's work."],
  ["Retail presentation", "Book listing and metadata recommendations designed to improve relevance and clarity."],
];

function ClientCampaigns() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Client campaigns</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">A campaign should <span className="italic text-gold">fit the book.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">Fourth Group &amp; Co plans coordinated book promotion and author marketing around each title, its intended readers and the author's goals.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {deliverables.map(([title,description],i) => <article key={title} className="bg-background p-10"><span className="font-display text-3xl text-gold/70">0{i+1}</span><h2 className="mt-5 text-2xl">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <div className="mt-20 border border-border p-10 lg:p-14">
        <p className="eyebrow">Featured Client Campaigns</p>
        <h2 className="mt-5 text-3xl sm:text-4xl">Evidence before <span className="italic text-gold">endorsement.</span></h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">Client titles, book covers, campaign screenshots and performance figures will be added here only after the project details have been verified and the relevant rights-holder has approved publication. We do not invent client campaigns or performance claims. Approved examples can be requested privately where available.</p>
        <Link to="/contact" className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Request campaign examples</Link>
      </div>
    </section>
    <Footer />
  </div>;
}
