import { useState } from "react";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { company, serviceArea } from "../data/content";
import { images } from "../data/images";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Heating & Furnace", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        image={images.acInstall}
        eyebrow="Get In Touch"
        title="Let's Get Your Home Comfortable"
        subtitle="Reach out for a free estimate, a service appointment, or a Heritage Club membership — a real person answers, every time."
        height="short"
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <span className="eyebrow">Send a Message</span>
            <h2>Request Service</h2>

            {submitted ? (
              <div className="contact-success">
                <p>Thank you, {form.name.split(" ")[0] || "friend"} — your request has been received.</p>
                <p>A member of our team will call you back within one business day. For an emergency, please call us directly at {company.phone}.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label>
                    Full Name
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="(410) 555-0100" />
                  </label>
                </div>
                <label>
                  Email Address
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" />
                </label>
                <label>
                  Service Needed
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option>Heating & Furnace</option>
                    <option>Air Conditioning</option>
                    <option>Ductwork & Ventilation</option>
                    <option>Indoor Air Quality</option>
                    <option>Heritage Club Membership</option>
                    <option>Commercial HVAC</option>
                    <option>Emergency Service</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us a bit about what's going on..." />
                </label>
                <button type="submit" className="btn btn-gold">Submit Request</button>
                <p className="contact-form__note">This is a demo site — no messages are actually sent.</p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="contact-info">
            <div className="contact-info__block">
              <h3>Call or Email</h3>
              <a href={company.phoneHref} className="contact-info__phone">{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <p className="contact-info__emergency">{company.emergencyNote}</p>
            </div>

            <div className="contact-info__block">
              <h3>Visit Us</h3>
              <p>{company.address}</p>
              <p className="contact-info__license">{company.license}</p>
            </div>

            <div className="contact-info__block">
              <h3>Hours</h3>
              <ul className="contact-info__hours">
                {company.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Service Map" title="Where To Find Us" />
          <div className="service-map">
            <div className="service-map__pin service-map__pin--hq">
              <span className="service-map__dot" />
              <span className="service-map__label">Headquarters — Fleet Street</span>
            </div>
            <div className="service-map__towns">
              {serviceArea.map((town, i) => (
                <span key={town} className="service-map__town" style={{ animationDelay: `${i * 0.15}s` }}>
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
