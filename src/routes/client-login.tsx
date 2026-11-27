import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/client-login")({
  head: () => ({ meta: [
    { title: "Client Support | Fourth Group & Co" },
    { name: "description", content: "Contact Fourth Group & Co for access to current campaign reports and project deliverables." },
  ] }),
  component: ClientLogin,
});

function ClientLogin() {
  const [email,setEmail] = useState("");
  const [project,setProject] = useState("");
  const [message,setMessage] = useState("");
  const mailto = "mailto:info@fourthgroupco.com?subject=" + encodeURIComponent("Client access request") + "&body=" + encodeURIComponent("Client email: "+email+"\nProject or book: "+project+"\n\n"+message);
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="eyebrow">Client support</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-cream sm:text-6xl">Your campaign, <span className="italic text-gold">in one place.</span></h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/70">For access to campaign reports, live placement links, creative files or project updates, contact the studio using the request form. This page does not currently provide an authenticated client portal.</p>
          <p className="mt-6 text-sm text-cream/55">Email <a href="mailto:info@fourthgroupco.com" className="text-gold hover:underline">info@fourthgroupco.com</a> if you prefer to write directly.</p>
        </div>
        <form className="h-fit space-y-6 border border-gold/25 bg-navy/40 p-10" onSubmit={e=>{e.preventDefault();window.location.href=mailto;}}>
          <label className="block text-[0.64rem] uppercase tracking-[0.2em] text-cream/60">Client email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-3 w-full border border-cream/20 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-cream outline-none focus:border-gold" /></label>
          <label className="block text-[0.64rem] uppercase tracking-[0.2em] text-cream/60">Project or book title<input required value={project} onChange={e=>setProject(e.target.value)} className="mt-3 w-full border border-cream/20 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-cream outline-none focus:border-gold" /></label>
          <label className="block text-[0.64rem] uppercase tracking-[0.2em] text-cream/60">How can we help?<textarea rows={4} value={message} onChange={e=>setMessage(e.target.value)} className="mt-3 w-full border border-cream/20 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-cream outline-none focus:border-gold" /></label>
          <button type="submit" className="w-full bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep hover:bg-gold-soft">Prepare support request</button>
          <p className="text-[0.64rem] leading-relaxed tracking-wide text-cream/45">Your email application will open with the request details. No password is collected on this page.</p>
        </form>
      </div>
    </section>
    <Footer />
  </div>;
}
