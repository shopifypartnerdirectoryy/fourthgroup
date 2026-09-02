import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, serviceDetails } from "@/components/site/data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service, detail: serviceDetails[params.slug]! };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.service.title} | Fourth Group & Co`
      : "Service | Fourth Group & Co";
    const description = loaderData?.service.blurb ?? "Author marketing services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, detail } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Service {service.n}</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            {service.title}
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70">{detail.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">What you get</p>
            <ul className="mt-8 space-y-5">
              {detail.deliverables.map((d) => (
                <li key={d} className="flex gap-4 border-b border-border pb-5 text-base">
                  <span className="mt-3 h-px w-6 shrink-0 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-border p-10">
            <p className="font-display text-3xl">{service.price}</p>
            <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
              {service.note}
            </p>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Timeline</dt>
                <dd className="mt-2 text-muted-foreground">{detail.timeline}</dd>
              </div>
              <div>
                <dt className="eyebrow">Best for</dt>
                <dd className="mt-2 text-muted-foreground">{detail.ideal}</dd>
              </div>
            </dl>
            <Link
              to="/contact"
              className="mt-10 block bg-navy px-8 py-4 text-center text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
            >
              Enquire about this
            </Link>
          </aside>
        </div>

        <div className="mt-24 border-t border-border pt-12">
          <p className="eyebrow">Other services</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="border border-border p-6 transition-colors hover:border-gold"
                >
                  <span className="font-display text-2xl text-gold/70">{s.n}</span>
                  <h3 className="mt-3 text-xl">{s.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
