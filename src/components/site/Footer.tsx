import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="surface-navy border-t border-gold/20">
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
              An author marketing studio. We take a small number of books each quarter and give
              each one the attention a manuscript deserves.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Studio</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <Link to="/services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/find-your-book" className="hover:text-gold">
                  Find Your Book
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gold">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:text-gold">
                  Our Team
                </Link>
              </li>

              <li>
                <Link to="/success-stories" className="hover:text-gold">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gold">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  About
                </Link>
              </li>
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
              <li>Replies in under one hour</li>
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
          <p>© {new Date().getFullYear()} Fourth Group &amp; Co. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Manuscript to market</p>
        </div>
      </div>
    </footer>
  );
}
