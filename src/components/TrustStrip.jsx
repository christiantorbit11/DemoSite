import Reveal from "./Reveal";
import "./TrustStrip.css";

const badges = [
  { label: "Licensed & Insured", sub: "MD HVAC License" },
  { label: "Family Owned", sub: "4th Generation" },
  { label: "24/7 Emergency", sub: "Always On Call" },
  { label: "77 Years Strong", sub: "Since 1948" },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__grid">
        {badges.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.08} className="trust-strip__item">
            <span className="trust-strip__seal" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="9" r="6.2" />
                <path d="M8.5 14.5L6 21l6-3 6 3-2.5-6.5" />
              </svg>
            </span>
            <span className="trust-strip__text">
              <strong>{b.label}</strong>
              <em>{b.sub}</em>
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
