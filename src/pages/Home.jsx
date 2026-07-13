import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ReviewsMarquee from "../components/ReviewsMarquee";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/Reveal";
import { company, services, reviews, stats, serviceArea } from "../data/content";
import { images } from "../data/images";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero
        image={images.heroStreet}
        eyebrow="Baltimore, Maryland · Est. 1948"
        title="Heating &amp; Cooling, Crafted With Old-World Care"
        subtitle="Four generations of the Farnen and Dermer families have kept Baltimore comfortable — one rowhouse, one radiator, one relationship at a time."
      >
        <div className="hero__actions">
          <a href={company.phoneHref} className="btn btn-gold">Request Service</a>
          <Link to="/services" className="btn btn-outline">Explore Services</Link>
        </div>
      </Hero>

      <TrustStrip />

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Comfort, Restored &amp; Maintained"
            description="From century-old boilers to the newest high-efficiency heat pumps, our craftsmen service every system Baltimore has ever put in a home."
          />
          <div className="grid-services">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <Reveal className="text-center" delay={0.2}>
            <Link to="/services" className="btn btn-outline-dark" style={{ marginTop: 48 }}>
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark stats-section">
        <div className="container stats-grid">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="section about-teaser">
        <div className="container about-teaser__grid">
          <Reveal className="ornate-frame about-teaser__image">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            <img src={images.historyWorkshop} alt="Farnen & Dermer founders in their original workshop, circa 1950s" />
          </Reveal>
          <Reveal delay={0.15} className="about-teaser__copy">
            <span className="eyebrow">Our Story</span>
            <h2>A Family Trade, Passed Down Since 1948</h2>
            <p>
              What began as a handshake between Walter Farnen and Henry Dermer on Fleet Street
              has grown into Baltimore's most trusted name in heating and cooling — without ever
              losing the craftsmanship that started it all.
            </p>
            <p>
              Today, the fourth generation of both families still walks the same rowhouse
              streets, servicing the same kind of century-old systems their great-grandfathers
              once repaired by lamplight.
            </p>
            <Link to="/about" className="btn btn-outline-dark">Read Our History</Link>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section-dark reviews-section">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted Around Baltimore"
            title="What Our Neighbors Say"
            description="Nearly 40,000 homes serviced, and counting — here's what a few of them have to say."
          />
        </div>
        <ReviewsMarquee reviews={reviews} />
      </section>

      {/* Service area */}
      <section className="section service-area">
        <div className="container service-area__grid">
          <Reveal>
            <span className="eyebrow">Where We Work</span>
            <h2>Proudly Serving Baltimore &amp; Beyond</h2>
            <p className="service-area__desc">
              From the rowhomes of Fells Point to the estates of Roland Park, our trucks are on
              the road across the greater Baltimore area, six days a week.
            </p>
            <ul className="service-area__list">
              {serviceArea.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="ornate-frame service-area__image">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            <img src={images.acInstall} alt="Technician servicing an air conditioning unit beside a Baltimore rowhouse" />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <span className="eyebrow">Ready When You Are</span>
            <h2>No Heat, No Air, No Problem.</h2>
            <p>Our technicians answer around the clock — call now and talk to a real Baltimorean.</p>
          </div>
          <a href={company.phoneHref} className="btn btn-gold cta-band__btn">
            Call {company.phone}
          </a>
        </div>
      </section>
    </>
  );
}
