import { Link } from "react-router-dom";
import { company, serviceArea } from "../data/content";
import { images } from "../data/images";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={images.logo} alt={`${company.name} crest`} className="site-footer__crest" />
          <p className="site-footer__name">Farnen &amp; Dermer Inc.</p>
          <p className="site-footer__tag">Baltimore's Heating &amp; Cooling Craftsmen, Since {company.founded}</p>
          <p className="site-footer__license">{company.license}</p>
        </div>

        <div className="site-footer__col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">Our History</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>{company.address}</p>
        </div>

        <div className="site-footer__col site-footer__area">
          <h4>Proudly Serving</h4>
          <p className="site-footer__area-list">{serviceArea.join(" · ")}</p>
        </div>
      </div>

      <div className="ornate-divider container"><span className="glyph" /></div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Farnen &amp; Dermer Inc. All rights reserved.</p>
        <p className="site-footer__demo">Demo website · content for illustrative purposes only</p>
      </div>
    </footer>
  );
}
