import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { company, services } from "../data/content";
import { images } from "../data/images";
import "./Services.css";

const steps = [
  { n: "01", title: "Call or Request Online", text: "Reach a real person, day or night — we schedule most visits within 24 hours." },
  { n: "02", title: "Diagnosis on Arrival", text: "A licensed technician inspects your system and gives you honest, upfront pricing." },
  { n: "03", title: "Craftsmanship, Not Shortcuts", text: "We repair or install with the same care whether your system is brand new or built before the war." },
  { n: "04", title: "Stand Behind the Work", text: "Every job is backed by our workmanship guarantee — because our name is on the invoice." },
];

export default function Services() {
  return (
    <>
      <Hero
        image={images.brassMacro}
        eyebrow="Our Services"
        title="Heating &amp; Cooling, Done Right"
        subtitle="Full-service residential and commercial HVAC — repair, replacement, installation, and maintenance — delivered with old-world craftsmanship."
        height="short"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Every System, Every Era"
            description="Whether it's a cast-iron radiator from 1948 or a smart heat pump installed last year, our technicians know how to keep it running."
            align="left"
          />

          <div className="services-list">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05} className="service-row">
                <div className="service-row__index">{String(i + 1).padStart(2, "0")}</div>
                <div className="service-row__body">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <ul>
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark process-section">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="The Farnen &amp; Dermer Way"
            description="A process refined over 77 years — simple, honest, and unhurried."
          />
          <div className="process-grid">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1} className="process-step">
                <span className="process-step__n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <span className="eyebrow">Schedule a Visit</span>
            <h2>Let's Get Your System Sorted.</h2>
            <p>Same-week appointments, honest pricing, and technicians who treat your home like their own.</p>
          </div>
          <a href={company.phoneHref} className="btn btn-gold cta-band__btn">
            Call {company.phone}
          </a>
        </div>
      </section>
    </>
  );
}
