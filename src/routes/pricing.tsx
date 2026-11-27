import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { launchPackages, pricingTiers, pricingComparison } from "@/components/site/showcase";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Launch Packages & Pricing | Fourth Group & Co" },
    { name: "description", content: "Explore the Debut Visibility Suite, Bestseller Momentum Campaign and Complete Author Brand & Launch, alongside individual service prices." },
    { property: "og:title", content: "Launch Packages & Pricing | Fourth Group & Co" },
    { property: "og:description", content: "Three coordinated launch packages and transparent à la carte service pricing." },
    { property: "og:type", content: "website" },
  ] }),
  component: Pricing,
});

function Pricing() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Launch packages &amp; investment</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">A bigger stage for <span className="italic text-gold">your story.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">Choose a coordinated launch package or commission services individually. Each package lists its deliverables clearly; platform performance, sales, rankings and audience responses are not guaranteed.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <p className="eyebrow">Three launch packages</p>
      <h2 className="mt-5 text-4xl sm:text-5xl">Choose your <span className="italic text-gold">campaign scale.</span></h2>
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {launchPackages.map((p) => <article key={p.name} className={`flex flex-col border p-9 ${p.featured ? "border-gold bg-secondary/40" : "border-border"}`}>
          <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">{p.featured ? "Most comprehensive mid-tier" : "Author launch package"}</p>
          <h3 className="mt-4 text-2xl leading-snug">{p.name}</h3>
          <p className="mt-6 font-display text-5xl">{p.price}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
          <ul className="mt-8 flex-1 space-y-4">{p.features.map(f => <li key={f} className="flex gap-3 text-sm"><span className="mt-2 h-px w-4 shrink-0 bg-gold" />{f}</li>)}</ul>
          <Link to="/contact" className={`mt-10 block px-6 py-4 text-center text-[0.68rem] uppercase tracking-[0.18em] ${p.featured ? "bg-gold text-navy-deep" : "bg-navy text-cream"}`}>Request this package</Link>
        </article>)}
      </div>
    </section>

    <section className="surface-navy">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Individual Goodreads packages</p>
        <h2 className="mt-5 text-4xl text-cream sm:text-5xl">Listopia <span className="italic text-gold">placement options.</span></h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/65">These existing placement tiers remain available separately from the three new launch packages.</p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map(t => <article key={t.name} className="flex flex-col border border-cream/15 p-9">
            <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold">{t.tag}</p>
            <h3 className="mt-4 text-2xl text-cream">{t.name}</h3>
            <p className="mt-6 font-display text-5xl text-cream">{t.price}</p>
            <p className="mt-4 text-sm text-cream/60">{t.summary}</p>
            <ul className="mt-8 flex-1 space-y-3">{t.features.map(f => <li key={f} className="flex gap-3 text-sm text-cream/75"><span className="mt-2 h-px w-4 shrink-0 bg-gold" />{f}</li>)}</ul>
            <Link to="/contact" className="mt-8 block bg-gold px-6 py-4 text-center text-[0.68rem] uppercase tracking-[0.18em] text-navy-deep">Enquire about placement</Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <p className="eyebrow">À la carte services</p>
      <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">Commission the work <span className="italic text-gold">you need.</span></h2>
      <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => <article key={s.slug} className="bg-background p-8">
          <p className="text-[0.62rem] uppercase tracking-[0.16em] text-gold">{s.pillar}</p>
          <h3 className="mt-3 text-xl">{s.title}</h3>
          <p className="mt-4 text-sm text-muted-foreground">{s.price}</p>
          <Link to="/services/$slug" params={{slug:s.slug}} className="mt-6 inline-block text-[0.66rem] uppercase tracking-[0.18em] text-navy hover:text-gold">Service details →</Link>
        </article>)}
      </div>
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground">Individual service pricing is shown as published in the campaign brief. Custom audiobook quotes are based on page count and agreed production requirements. Confirm availability and the final written scope before payment.</p>
    </section>
    <Footer />
  </div>;
}
