import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import "./ServiceCard.css";

const icons = {
  heating: (
    <path d="M12 2c-2.5 3-4 5.5-4 8a4 4 0 108 0c0-2.5-1.5-5-4-8z" />
  ),
  cooling: (
    <>
      <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
    </>
  ),
  ductwork: <rect x="3" y="8" width="18" height="8" rx="1" />,
  "air-quality": <circle cx="12" cy="12" r="8" />,
  maintenance: <path d="M12 2l2.6 6.2L21 9l-5 4.4L17.4 20 12 16.6 6.6 20 8 13.4 3 9l6.4-.8L12 2z" />,
  commercial: <path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6" />,
};

export default function ServiceCard({ service, index = 0, compact = false }) {
  return (
    <Reveal delay={index * 0.08} className="service-card-wrap">
      <article className={`service-card ${compact ? "service-card--compact" : ""}`}>
        <div className="service-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            {icons[service.id] || <circle cx="12" cy="12" r="8" />}
          </svg>
        </div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        {!compact && (
          <Link to="/services" className="service-card__link">
            Learn More <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </article>
    </Reveal>
  );
}
