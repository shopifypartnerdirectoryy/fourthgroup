import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/audiobook-production")({
  head: () => ({ meta: [
    { title: "Audiobook Production | Fourth Group & Co" },
    { name: "description", content: "Audiobook narration planning, recording coordination, editing, quality review and mastering for authors." },
    { property: "og:title", content: "Audiobook Production | Fourth Group & Co" },
    { property: "og:description", content: "A considered production pathway from manuscript to finished audiobook files." },
  ],
    links: [{ rel: "canonical", href: "https://fourthgroup.co/audiobook-production" }],
  }),
  component: AudiobookProduction,
});

const steps = [
  ["Narration planning", "Discuss the manuscript, intended audience, narration style, voice requirements and production schedule."],
  ["Recording", "Coordinate the recording approach and the agreed narration workflow, including author review points."],
  ["Editing & quality", "Edit and review the audio for consistency, clarity and the technical requirements agreed for delivery."],
  ["Mastering & handover", "Prepare final audio files and supporting details to the agreed delivery specification."],
];

function AudiobookProduction() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Audiobook production</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Let the story <span className="italic text-gold">be heard.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">We help authors plan and produce an audiobook, from narration direction through edited and mastered audio delivery. Each title is scoped individually.</p>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <p className="eyebrow">The production pathway</p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title,description],i) => <article key={title} className="border-t border-gold/50 pt-6"><span className="font-display text-2xl text-gold">0{i+1}</span><h2 className="mt-4 text-xl">{title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <p className="mt-16 max-w-3xl border-l-2 border-gold pl-6 text-sm leading-relaxed text-muted-foreground">Final retailer acceptance, distribution, listener numbers and sales are controlled by third-party platforms and market conditions; they are not guaranteed by production.</p>
      <Link to="/contact" className="mt-10 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Discuss an audiobook</Link>
    </section>
    <Footer />
  </div>;
}
