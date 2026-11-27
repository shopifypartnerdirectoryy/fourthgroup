import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Use | Fourth Group & Co" },
    { name: "description", content: "General terms for using the Fourth Group & Co website and enquiring about services." },
  ] }),
  component: Terms,
});

function Terms() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-20"><div className="mx-auto max-w-4xl px-6 lg:px-10"><p className="eyebrow">Legal</p><h1 className="mt-5 text-5xl text-cream">Terms of <span className="italic text-gold">use.</span></h1><div className="rule-gold mt-8 w-40" /></div></section>
    <main className="mx-auto max-w-4xl space-y-10 px-6 py-20 text-sm leading-relaxed text-muted-foreground lg:px-10">
      <section><h2 className="text-2xl text-foreground">Website information</h2><p className="mt-4">The website provides general information about Fourth Group &amp; Co and the services that may be available. Descriptions are indicative and do not constitute an offer to provide a particular service until a written scope is agreed.</p></section>
      <section><h2 className="text-2xl text-foreground">Project agreements</h2><p className="mt-4">Before work begins, the parties should agree in writing on the deliverables, schedule, fees, payment arrangements, approvals, revisions, rights and any third-party costs relevant to the project. The written project agreement will govern the commissioned work.</p></section>
      <section><h2 className="text-2xl text-foreground">No guaranteed outcomes</h2><p className="mt-4">Book sales, rankings, reviews, reader engagement, platform placement, distribution, publishing decisions and screen adaptations depend on third parties and market conditions. Unless expressly agreed in writing and legally permissible, no such outcome is guaranteed.</p></section>
      <section><h2 className="text-2xl text-foreground">Intellectual property</h2><p className="mt-4">Authors and rights-holders remain responsible for ensuring they have permission to provide manuscripts, cover artwork, photographs, music and other materials for a project. Ownership and usage licences for commissioned work should be set out in the applicable written agreement.</p></section>
      <section><h2 className="text-2xl text-foreground">Contact</h2><p className="mt-4">Questions about these website terms can be sent to <a className="text-navy underline" href="mailto:info@fourthgroupco.com">info@fourthgroupco.com</a>.</p></section>
      <p className="border-t border-border pt-6">These are general website terms, not a substitute for a complete contract or jurisdiction-specific legal review. Add the agency's legal entity, governing law and any required consumer disclosures before relying on them as formal terms of business.</p>
    </main>
    <Footer />
  </div>;
}
