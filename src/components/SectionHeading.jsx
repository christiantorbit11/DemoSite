import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </Reveal>
  );
}
