import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="surface-navy border-t border-gold/20">
      <section className="border-b border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="eyebrow">Your next chapter</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-cream sm:text-4xl">Your story deserves <span className="italic text-gold">a wider audience.</span></h2>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center justify-center bg-gold px-8 py-4 text-[0.68rem] uppercase tracking-[0.18em] text-navy-deep hover:bg-gold-soft">Request a Campaign Proposal</Link>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Fourth Group &amp; Co"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 object-contain [filter:brightness(0)_invert(1)]"
              />
              <span className="font-display text-xl uppercase tracking-[0.18em]">
                Fourth Group <span className="text-gold">&amp; Co</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              A full-service book promotion, publicity and author marketing agency, bringing reader campaigns, creative production and author platforms together.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Studio</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/client-campaigns" className="hover:text-gold">Client Campaigns</Link></li>
              <li><Link to="/audiobook-production" className="hover:text-gold">Audiobook Production</Link></li>
              <li><Link to="/movie-adaptation" className="hover:text-gold">Publishing &amp; Screen</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
              <li><Link to="/success-stories" className="hover:text-gold">Campaign Approach</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/our-team" className="hover:text-gold">Our Team</Link></li>
              <li><Link to="/reviews" className="hover:text-gold">Author Reviews</Link></li>
              <li><Link to="/find-your-book" className="hover:text-gold">Find Your Book</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Enquiries</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href="mailto:info@fourthgroupco.com" className="hover:text-gold">
                  info@fourthgroupco.com
                </a>
              </li>

              <li>
                <Link to="/contact" className="hover:text-gold">
                  Submit your manuscript
                </Link>
              </li>
              <li>
                <Link to="/client-login" className="hover:text-gold">
                  Client login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs tracking-wider text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5"><Link to="/privacy" className="hover:text-gold">Privacy</Link><Link to="/terms" className="hover:text-gold">Terms</Link></div>
          <p>© {new Date().getFullYear()} Fourth Group &amp; Co. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Manuscript to market</p>
        </div>
      </div>
    </footer>
  );
}
