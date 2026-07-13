import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../data/content";
import { images } from "../data/images";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Our History" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__bar container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={images.logo} alt={`${company.name} crest`} className="brand__crest" />
          <span className="brand__text">
            <span className="brand__name">Farnen &amp; Dermer</span>
            <span className="brand__since">Est. 1948 · Baltimore, MD</span>
          </span>
        </NavLink>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => `site-nav__link ${isActive ? "is-active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={company.phoneHref} className="site-header__phone">
            <span className="site-header__phone-label">Call Now</span>
            <span className="site-header__phone-number">{company.phone}</span>
          </a>
          <a href={company.phoneHref} className="btn btn-gold site-header__cta">Request Service</a>
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="mobile-nav__inner container">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === "/"} className="mobile-nav__link" onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              ))}
              <a href={company.phoneHref} className="btn btn-gold mobile-nav__cta">Call {company.phone}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
