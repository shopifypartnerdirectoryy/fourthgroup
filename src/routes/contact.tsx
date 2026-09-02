import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Fourth Group & Co" },
      {
        name: "description",
        content:
          "Tell Fourth Group & Co about your book. Email info@fourthgroupco.com for Listopia campaigns, trailers, author websites and Amazon SEO.",
      },
      { property: "og:title", content: "Contact | Fourth Group & Co" },
      {
        property: "og:description",
        content: "Start a project with Fourth Group & Co — info@fourthgroupco.com.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", title: "", service: "", message: "" });

  const mailto = `mailto:info@fourthgroupco.com?subject=${encodeURIComponent(
    `Project enquiry — ${form.title || "new book"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nBook title: ${form.title}\nService: ${form.service}\n\n${form.message}`,
  )}`;

  const field =
    "mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-gold";
  const label = "text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="surface-navy pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl">
            Tell us about <span className="italic text-gold">your book.</span>
          </h1>
          <div className="rule-gold mt-8 w-40" />
          <a
            href="mailto:info@fourthgroupco.com"
            className="mt-8 inline-block font-display text-2xl text-gold hover:text-gold-soft"
          >
            info@fourthgroupco.com
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className={label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="title">
              Book title
            </label>
            <input
              id="title"
              className={field}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div>
            <label className={label} htmlFor="service">
              What are you interested in?
            </label>
            <select
              id="service"
              className={field}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="">Not sure yet</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={label} htmlFor="message">
              About the book
            </label>
            <textarea
              id="message"
              rows={6}
              className={field}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-navy-deep"
          >
            Send enquiry
          </button>
          <p className="text-xs text-muted-foreground">
            This opens your email client with the details filled in.
          </p>
        </form>

        <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <div>
            <h2 className="eyebrow">Enquiries</h2>
            <a
              href="mailto:info@fourthgroupco.com"
              className="mt-3 block text-lg text-navy hover:text-gold"
            >
              info@fourthgroupco.com
            </a>
          </div>
          <div>
            <h2 className="eyebrow">Response time</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We reply within one business day. If your launch date is close, say so in the first
              line and we will move you up.
            </p>
          </div>
          <div>
            <h2 className="eyebrow">Availability</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We take a limited number of books each quarter so every campaign stays with the people
              who scoped it.
            </p>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}
