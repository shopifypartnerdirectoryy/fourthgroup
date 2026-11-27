import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, servicePillars } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Book Marketing Services | Fourth Group & Co" },
    { name: "description", content: "Reader outreach, social growth, creative production, audiobook services and author digital presence from Fourth Group & Co." },
    { property: "og:title", content: "Book Marketing Services | Fourth Group & Co" },
    { property: "og:description", content: "Explore the four service pillars and eleven core author marketing services." },
  ],
    links: [{ rel: "canonical", href: "https://fourthgroup.co/services" }],
  }),
  component: Services,
});

function Services() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Marketing services</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Everything your book needs <span className="italic text-gold">to reach readers.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">Explore our four service pillars. Choose a single service or combine selected work into a coordinated campaign.</p>
      </div>
    </section>
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      {servicePillars.map((pillar,index) => <section key={pillar.title} className="border-b border-border py-14">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="font-display text-3xl text-gold/70">0{index+1}</p><h2 className="mt-4 text-3xl">{pillar.title}</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{pillar.description}</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {pillar.slugs.map(slug => { const s=services.find(item=>item.slug===slug); return s ? <article key={s.slug} className="bg-background p-7">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <p className="mt-5 text-sm font-medium">{s.price}</p>
              <Link to="/services/$slug" params={{slug:s.slug}} className="mt-5 inline-block text-[0.66rem] uppercase tracking-[0.18em] text-navy hover:text-gold">View service details →</Link>
            </article> : null; })}
          </div>
        </div>
      </section>)}
    </div>
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="text-3xl sm:text-4xl">Need a joined-up <span className="italic text-gold">campaign?</span></h2>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Tell us about your book, the audience you want to reach and the services you have in mind.</p>
      <Link to="/contact" className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Request a campaign proposal</Link>
    </section>
    <Footer />
  </div>;
}
