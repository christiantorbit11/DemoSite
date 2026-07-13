import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import Reveal from "../components/Reveal";
import { company, timeline } from "../data/content";
import { images } from "../data/images";
import "./About.css";

const values = [
  { title: "Honesty First", text: "Upfront pricing, no invented repairs, no commission-driven upsells — a promise since 1948." },
  { title: "Old-World Craft", text: "We treat every furnace and every rowhouse the way our founders did: with patience and pride." },
  { title: "Neighborly Service", text: "We live in the neighborhoods we serve. Chances are, we've worked on your street before." },
];

const team = [
  { name: "Thomas Dermer", role: "Master Technician & Co-Owner", image: images.techMale },
  { name: "Eleanor Farnen-Ruiz", role: "Lead Service Technician", image: images.techFemale },
];

export default function About() {
  return (
    <>
      <Hero
        image={images.historyWorkshop}
        eyebrow="Our History"
        title="Seventy-Seven Years on the Same Street"
        subtitle="Farnen & Dermer Inc. has kept Baltimore warm in winter and cool in summer since 1948 — through four generations of the same two families."
        height="short"
      />

      <section className="section">
        <div className="container about-intro">
          <Reveal className="about-intro__text">
            <span className="eyebrow">Est. 1948</span>
            <h2>Built on a Handshake, Not a Franchise</h2>
            <p>
              In the winter of 1948, Walter Farnen and Henry Dermer — two coal-furnace fitters
              from Fells Point — pooled their savings to open a small storefront on Fleet Street.
              Their promise was simple: treat every furnace, boiler, and radiator as if it were
              in their own home.
            </p>
            <p>
              Nearly eight decades later, that same storefront still stands, and the same two
              families still run the company. We've traded coal for high-efficiency heat pumps,
              but the handshake hasn't changed.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="ornate-frame about-intro__badge">
            <img src={images.badgeSeal} alt="Farnen & Dermer licensed and insured seal, since 1948" />
          </Reveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Our Timeline" title="Four Generations, One Address" />
          <Timeline items={timeline} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What We Believe" title="Our Values" align="left" />
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="value-card">
                <span className="value-card__mark" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark team-section">
        <div className="container">
          <SectionHeading eyebrow="Meet the Family" title="The Hands Behind the Craft" />
          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.12} className="team-card">
                <div className="ornate-frame team-card__frame">
                  <span className="corner corner-tl" />
                  <span className="corner corner-tr" />
                  <span className="corner corner-bl" />
                  <span className="corner corner-br" />
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <span className="eyebrow">Join the Family of Customers</span>
            <h2>Experience the Difference Craftsmanship Makes.</h2>
            <p>Let us show you why generations of Baltimoreans have trusted the same name.</p>
          </div>
          <a href={company.phoneHref} className="btn btn-gold cta-band__btn">
            Call {company.phone}
          </a>
        </div>
      </section>
    </>
  );
}
