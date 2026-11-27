import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/success-stories")({
  head: () => ({ meta: [
    { title: "Campaign Approach | Fourth Group & Co" },
    { name: "description", content: "How Fourth Group & Co plans, delivers and reports author promotion campaigns." },
    { property: "og:title", content: "Campaign Approach | Fourth Group & Co" },
    { property: "og:description", content: "A clear process for book promotion and author marketing." },
  ] }),
  component: SuccessStories,
});

const stages = [
  ["01", "The brief", "We understand the book, its intended readers, publishing stage, objectives and practical constraints."],
  ["02", "The plan", "We recommend a suitable mix of services and define deliverables, schedule, approvals and price."],
  ["03", "Delivery", "We produce and coordinate the agreed creative assets and campaign activity, keeping the author informed."],
  ["04", "The report", "We provide the agreed assets, links and delivery record, and identify any next steps without overstating results."],
];

function SuccessStories() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Campaign approach</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Good work deserves <span className="italic text-gold">clear reporting.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">We are preparing client case studies for publication only where the work, permissions and supporting evidence can be verified.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map(([n,title,description]) => <article key={n} className="border-t border-gold/50 pt-6"><span className="font-display text-2xl text-gold">{n}</span><h2 className="mt-4 text-2xl">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <div className="mt-20 border border-border p-10 text-center">
        <h2 className="text-3xl">Looking for <span className="italic text-gold">relevant experience?</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">Ask us about examples we are authorised to share for your genre or campaign type.</p>
        <Link to="/contact" className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Discuss a campaign</Link>
      </div>
    </section>
    <Footer />
  </div>;
}
