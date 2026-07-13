import Reveal from "./Reveal";
import "./Timeline.css";

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <div className="timeline__spine" />
      {items.map((item, i) => (
        <Reveal key={item.year} delay={i * 0.08} className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}>
          <div className="timeline__dot" />
          <div className="timeline__card">
            <span className="timeline__year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
