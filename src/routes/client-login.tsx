import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/client-login")({
  head: () => ({
    meta: [
      { title: "Client Login | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Fourth Group & Co client area: campaign reports, live placement links and film deliveries for authors currently working with the studio.",
      },
      { property: "og:title", content: "Client Login | Fourth Group & Co" },
      {
        property: "og:description",
        content: "Access your campaign reports and deliverables.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientLogin,
});

function ClientLogin() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Client area</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-cream sm:text-6xl">
              Your campaign, <span className="italic text-gold">in one place.</span>
            </h1>
            <div className="rule-gold mt-8 w-40" />
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream/70">
              Current clients use this area for live placement links, film deliveries, listing
              revisions and campaign reports. Access details are issued when a project starts.
            </p>
            <p className="mt-6 text-sm text-cream/55">
              Lost your access? Email{" "}
              <a href="mailto:info@fourthgroupco.com" className="text-gold hover:underline">
                info@fourthgroupco.com
              </a>{" "}
              — we reply in under an hour on business days.
            </p>
          </div>

          <form
            className="h-fit border border-gold/25 bg-navy/40 p-10"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "mailto:info@fourthgroupco.com?subject=Client%20area%20access";
            }}
          >
            <label className="block text-[0.64rem] uppercase tracking-[0.2em] text-cream/60">
              Email
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="mt-3 w-full border border-cream/20 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-cream outline-none placeholder:text-cream/35 focus:border-gold"
              />
            </label>
            <label className="mt-6 block text-[0.64rem] uppercase tracking-[0.2em] text-cream/60">
              Access code
              <input
                type="password"
                required
                placeholder="Issued at project start"
                className="mt-3 w-full border border-cream/20 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-cream outline-none placeholder:text-cream/35 focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy-deep transition-colors hover:bg-gold-soft"
            >
              Enter client area
            </button>
            <p className="mt-5 text-[0.64rem] leading-relaxed tracking-wide text-cream/45">
              Accounts are created manually by the studio. Requests are answered by email.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
