import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Notice | Fourth Group & Co" },
    { name: "description", content: "How to contact Fourth Group & Co about information shared in an enquiry." },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <div className="min-h-screen bg-background">
    <Header />
    <section className="surface-navy pt-40 pb-20"><div className="mx-auto max-w-4xl px-6 lg:px-10"><p className="eyebrow">Legal</p><h1 className="mt-5 text-5xl text-cream">Privacy <span className="italic text-gold">notice.</span></h1><div className="rule-gold mt-8 w-40" /></div></section>
    <main className="mx-auto max-w-4xl space-y-10 px-6 py-20 text-sm leading-relaxed text-muted-foreground lg:px-10">
      <section><h2 className="text-2xl text-foreground">Information you choose to send</h2><p className="mt-4">If you contact Fourth Group &amp; Co by email, the information in your message and any attachments will be received and handled as correspondence so that we can respond to your enquiry and discuss potential services.</p></section>
      <section><h2 className="text-2xl text-foreground">Website enquiry forms</h2><p className="mt-4">The current enquiry and review forms prepare a message in your device's email application. They do not submit information to a website form-processing server. Your email application and email provider handle the message when you choose to send it.</p></section>
      <section><h2 className="text-2xl text-foreground">Sensitive material</h2><p className="mt-4">Please do not send confidential, unpublished manuscripts or personal information about other people unless it is necessary for your enquiry and you have the right to share it. Agree a suitable transfer method with us before sending sensitive files.</p></section>
      <section><h2 className="text-2xl text-foreground">Your questions and requests</h2><p className="mt-4">For questions about information you have sent to us, or to request access, correction or deletion where applicable, contact <a className="text-navy underline" href="mailto:info@fourthgroupco.com">info@fourthgroupco.com</a>.</p></section>
      <p className="border-t border-border pt-6">This notice describes the website's current enquiry workflow. It should be reviewed and completed with the agency's actual data-retention, analytics, hosting and legal-entity details before being treated as a comprehensive statutory privacy policy.</p>
    </main>
    <Footer />
  </div>;
}
