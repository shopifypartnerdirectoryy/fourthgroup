import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";
import { launchPackages } from "@/components/site/showcase";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Request a Campaign Proposal | Fourth Group & Co" },
    { name: "description", content: "Tell Fourth Group & Co about your book, launch goals and marketing needs. Request a tailored campaign proposal." },
    { property: "og:title", content: "Request a Campaign Proposal | Fourth Group & Co" },
    { property: "og:description", content: "Start a conversation about book promotion, publicity and author marketing." },
  ],
    links: [{ rel: "canonical", href: "https://fourthgroup.co/contact" }],
  }),
  component: Contact,
});

const initial = { name: "", email: "", bookTitle: "", genre: "", stage: "", launchDate: "", packageChoice: "", website: "", selectedServices: [] as string[],
      links: [{ rel: "canonical", href: "https://fourthgroup.co/contact" }], goals: "" };

function Contact() {
  const [form, setForm] = useState(initial);
  const toggleService = (title: string) => setForm(current => ({ ...current, selectedServices: current.selectedServices.includes(title) ? current.selectedServices.filter(s => s !== title) : [...current.selectedServices, title] }));
  const body = [
    "Name: " + form.name,
    "Email: " + form.email,
    "Book title: " + form.bookTitle,
    "Genre: " + form.genre,
    "Publishing stage: " + form.stage,
    "Target launch date: " + form.launchDate,
    "Package of interest: " + form.packageChoice,
    "Website / book link: " + form.website,
    "Services of interest: " + (form.selectedServices.join(", ") || "Not sure yet"),
    "",
    "Campaign goals and book details:",
    form.goals,
  ].join("\n");
  const mailto = "mailto:info@fourthgroupco.com?subject=" + encodeURIComponent("Campaign proposal request — " + (form.bookTitle || "new book")) + "&body=" + encodeURIComponent(body);
  const field = "mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-gold";
  const label = "block text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground";

  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Campaign assessment</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">Your story deserves <span className="italic text-gold">a wider audience.</span></h1>
        <div className="rule-gold mt-8 w-40" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">Tell us about your book and what you want to achieve. The more context you share, the easier it is to discuss a relevant campaign scope.</p>
        <a href="mailto:info@fourthgroupco.com" className="mt-7 inline-block font-display text-xl text-gold hover:text-gold-soft">info@fourthgroupco.com</a>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.35fr_0.65fr] lg:px-10">
      <form className="space-y-8" onSubmit={e => { e.preventDefault(); window.location.href = mailto; }}>
        <div>
          <p className="eyebrow">01 · Your details</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className={label}>Your name<input required autoComplete="name" className={field} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
            <label className={label}>Email address<input required type="email" autoComplete="email" className={field} value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></label>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="eyebrow">02 · The book</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className={label}>Book title<input required className={field} value={form.bookTitle} onChange={e=>setForm({...form,bookTitle:e.target.value})} /></label>
            <label className={label}>Genre<input required placeholder="e.g. Thriller, memoir, romance" className={field} value={form.genre} onChange={e=>setForm({...form,genre:e.target.value})} /></label>
            <label className={label}>Publishing stage<select required className={field} value={form.stage} onChange={e=>setForm({...form,stage:e.target.value})}><option value="">Choose one</option><option>Preparing for publication</option><option>Recently published</option><option>Already published</option><option>Backlist / relaunch</option><option>Not sure yet</option></select></label>
            <label className={label}>Target launch date<input type="date" className={field} value={form.launchDate} onChange={e=>setForm({...form,launchDate:e.target.value})} /></label>
            <label className={label + " sm:col-span-2"}>Website, retailer or book link<input type="url" placeholder="https://" className={field} value={form.website} onChange={e=>setForm({...form,website:e.target.value})} /></label>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="eyebrow">03 · Campaign requirements</p>
          <label className={label + " mt-6"}>Launch package<select className={field} value={form.packageChoice} onChange={e=>setForm({...form,packageChoice:e.target.value})}><option value="">Not sure / individual services</option>{launchPackages.map(p=><option key={p.name}>{p.name} · {p.price}</option>)}</select></label>
          <p className="mt-7 text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">Services you are interested in</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map(s=><label key={s.slug} className="flex items-start gap-3 border border-border p-4 text-sm"><input type="checkbox" checked={form.selectedServices.includes(s.title)} onChange={()=>toggleService(s.title)} className="mt-1 accent-[#b99a62]" /><span>{s.title}</span></label>)}
          </div>
          <label className={label + " mt-7"}>Your goals and a little about the book<textarea required rows={7} placeholder="What is the story about? Who are your ideal readers? What would a successful campaign look like?" className={field} value={form.goals} onChange={e=>setForm({...form,goals:e.target.value})} /></label>
        </div>
        <div className="border-t border-border pt-8">
          <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"><input required type="checkbox" className="mt-0.5 accent-[#b99a62]" /><span>I understand this form prepares an email in my email application. My enquiry is not submitted until I choose to send that email.</span></label>
          <button type="submit" className="mt-7 bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-navy-deep">Prepare campaign proposal request</button>
          <p className="mt-4 text-xs text-muted-foreground">Your email application will open with these details. This website currently has no connected form-processing or CRM endpoint.</p>
        </div>
      </form>

      <aside className="h-fit space-y-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <div><h2 className="eyebrow">What happens next</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">We review the information you provide, clarify the campaign objectives and confirm a written scope, deliverables, timeline and price before work begins.</p></div>
        <div><h2 className="eyebrow">Launch packages</h2><div className="mt-4 space-y-4">{launchPackages.map(p=><div key={p.name} className="border-b border-border pb-4"><p className="text-lg">{p.name}</p><p className="mt-1 font-display text-2xl text-gold">{p.price}</p></div>)}</div></div>
        <div><h2 className="eyebrow">Direct enquiries</h2><a href="mailto:info@fourthgroupco.com" className="mt-3 block text-lg text-navy hover:text-gold">info@fourthgroupco.com</a></div>
      </aside>
    </section>
    <Footer />
  </div>;
}
