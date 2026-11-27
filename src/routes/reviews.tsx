import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [
    { title: "Author Reviews | Fourth Group & Co" },
    { name: "description", content: "Author feedback for Fourth Group & Co, published only after project verification and author approval." },
    { property: "og:title", content: "Author Reviews | Fourth Group & Co" },
    { property: "og:description", content: "Verified author feedback, shared with permission." },
  ],
    links: [{ rel: "canonical", href: "https://fourthgroup.co/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Author feedback</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Honest words, <span className="italic text-gold">shared with permission.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">We publish written and filmed reviews only after confirming the project and receiving the author's approval. No illustrative or unverified testimonials are presented as genuine client feedback.</p>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
      <div className="border border-border p-10 lg:p-14">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-5 text-3xl sm:text-4xl">Verified feedback is <span className="italic text-gold">being prepared.</span></h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">There are no public reviews available in this section at present. If you have completed a project with Fourth Group &amp; Co, you can send feedback for review. Publication is never automatic and requires your approval.</p>
      </div>
      <WriteReview />
      <div className="mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl">Ready to begin <span className="italic text-gold">a project?</span></h2>
        <Link to="/contact" className="mt-8 inline-block bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Start your project</Link>
      </div>
    </section>
    <Footer />
  </div>;
}

function WriteReview() {
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = ["Name: " + name, "Book: " + book, "Service: " + service, "", feedback].join("\n");
    window.location.href = "mailto:info@fourthgroupco.com?subject=" + encodeURIComponent("Author feedback submission") + "&body=" + encodeURIComponent(body);
  };
  const field = "mt-3 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold";
  return <div id="write-a-review" className="mt-16 border border-border p-10 lg:p-14">
    <p className="eyebrow">Share your experience</p>
    <h2 className="mt-5 text-3xl">Worked with us?</h2>
    <form onSubmit={submit} className="mt-8 grid gap-6 md:grid-cols-2">
      <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">Your name<input required value={name} onChange={e=>setName(e.target.value)} className={field} /></label>
      <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground">Book title<input required value={book} onChange={e=>setBook(e.target.value)} className={field} /></label>
      <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">Service<input required value={service} onChange={e=>setService(e.target.value)} className={field} /></label>
      <label className="text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">Your feedback<textarea required rows={6} value={feedback} onChange={e=>setFeedback(e.target.value)} className={field} /></label>
      <button type="submit" className="justify-self-start bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream hover:bg-navy-deep">Prepare email</button>
      <p className="text-xs text-muted-foreground md:col-span-2">This prepares an email in your device's email application. It does not publish a review or send information automatically.</p>
    </form>
  </div>;
}
