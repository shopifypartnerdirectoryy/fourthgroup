import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, process, faqs } from "@/components/site/data";
import { launchPackages } from "@/components/site/showcase";
import heroAsset from "@/assets/hero-library.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fourth Group & Co | Book Promotion, Publicity & Author Marketing" },
      { name: "description", content: "A full-service book promotion, publicity and author marketing agency offering reader campaigns, social promotion, trailers, audiobook production and author platforms." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Fourth Group & Co | Book Promotion & Author Marketing" },
      { property: "og:description", content: "Thoughtful promotion, publicity and creative production for authors and their books." },
      { property: "og:type", content: "website" },
    ],
      links: [{ rel: "canonical", href: "https://fourthgroup.co/" }],
  }),
  component: Home,
});

const pillars = [
  { title: "Book Growth & Visibility", text: "Reader outreach, Goodreads discovery, social features and retail listing optimisation designed around the book and its readership.", href: "/services" },
  { title: "Audiobook Production", text: "Narration planning, recording coordination, editing, quality review and mastered audio delivery.", href: "/audiobook-production" },
  { title: "Publishing & Screen Opportunities", text: "Author platform support and an initial editorial conversation about publishing pathways and screen adaptation potential.", href: "/movie-adaptation" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative flex min-h-[92svh] items-center overflow-hidden">
        <img src={heroAsset.url} alt="A quiet, lamplit library and open book" width={1920} height={1280} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-navy-deep/65" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <p className="eyebrow">Book Promotion · Publicity · Author Marketing</p>
          <h1 className="mt-7 max-w-4xl text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            Your Story Deserves <span className="italic text-gold">a Wider Audience.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/75">
            Strategic book campaigns designed to connect titles with readers, strengthen author visibility and prepare for appropriate publishing or screen-industry conversations. Fourth Group &amp; Co brings publicity, creative production and reader-focused marketing together around each title.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep transition-colors hover:bg-gold-soft">Request a Campaign Proposal <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link to="/services" className="inline-flex items-center border border-cream/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">One agency. <span className="italic text-gold">Three connected disciplines.</span></h2>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {pillars.map((p, i) => <article key={p.title} className="bg-background p-9">
            <span className="font-display text-3xl text-gold/70">0{i + 1}</span>
            <h3 className="mt-6 text-2xl">{p.title}</h3>
            <p className="mt-4 min-h-20 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            <Link to={p.href} className="mt-8 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-navy hover:text-gold">Discover more <ArrowRight className="h-3.5 w-3.5" /></Link>
          </article>)}
        </div>
      </section>

      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="eyebrow">Our services</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-cream sm:text-5xl">The right work for <span className="italic text-gold">the right readers.</span></h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/65">Commission one service or build a coordinated programme. Every scope is discussed and confirmed before work begins.</p>
          <div className="mt-14 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => <article key={s.slug} className="bg-navy-deep p-8">
              <span className="font-display text-2xl text-gold/70">{s.n}</span>
              <h3 className="mt-4 text-xl text-cream">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/60">{s.blurb}</p>
              <Link to="/services/$slug" params={{slug:s.slug}} className="mt-7 inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.18em] text-gold">Explore service <ArrowRight className="h-3.5 w-3.5" /></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">Signature launch packages</p>
        <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">A clear starting point for <span className="italic text-gold">your campaign.</span></h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {launchPackages.map(p => <article key={p.name} className="flex flex-col border border-border p-8">
            <h3 className="text-2xl">{p.name}</h3><p className="mt-5 font-display text-4xl text-gold">{p.price}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <Link to="/pricing" className="mt-7 text-[0.66rem] uppercase tracking-[0.18em] text-navy hover:text-gold">View package details →</Link>
          </article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">A considered process, <span className="italic text-gold">from brief to delivery.</span></h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(p => <article key={p.step} className="border-t border-gold/50 pt-6">
            <span className="font-display text-2xl text-gold">{p.step}</span>
            <h3 className="mt-4 text-xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </article>)}
        </div>
      </section>

      <section className="surface-navy">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <p className="eyebrow">Questions authors ask</p>
          <h2 className="mt-5 text-4xl text-cream sm:text-5xl">Clear answers, <span className="italic text-gold">before you begin.</span></h2>
          <dl className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
            {faqs.map(f => <div key={f.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10"><dt className="text-lg text-cream">{f.q}</dt><dd className="text-sm leading-relaxed text-cream/65">{f.a}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="eyebrow">Start a conversation</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">Tell us about <span className="italic text-gold">your book.</span></h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">Share your title, genre, publishing stage and what you hope to achieve. We will help identify a suitable next step.</p>
        <Link to="/contact" className="mt-9 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Make an enquiry</Link>
      </section>
      <Footer />
    </div>
  );
}
