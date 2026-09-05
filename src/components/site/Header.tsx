import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/find-your-book", label: "Find Your Book" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/our-team", label: "Our Team" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-sm border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Fourth Group &amp; Co"
            width={44}
            height={44}
            className="h-11 w-11 object-contain [filter:brightness(0)_invert(1)]"
          />
          <span className="font-display text-lg tracking-[0.18em] text-cream uppercase">
            Fourth Group <span className="text-gold">&amp; Co</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.66rem] uppercase tracking-[0.18em] text-cream/75 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/client-login"
            className="text-[0.66rem] uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            Client Login
          </Link>
          <Link
            to="/contact"
            className="border border-gold/60 px-4 py-2.5 text-[0.66rem] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-navy-deep"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-navy-deep px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-cream/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/client-login"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.22em] text-cream/50"
            >
              Client Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
