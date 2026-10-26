import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <i className="bi bi-fire"></i> REDWOOD
          </div>

          <p>
            Honest cuts, exceptional quality.
            <br />
            Good food starts with good ingredients.
          </p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Visit Our Shop</h3>

          <p>
            <i className="bi bi-geo-alt me-2"></i>
            Bengaluru, Karnataka, India
          </p>

          <p>
            <i className="bi bi-telephone me-2"></i>
            +91 11111 00000
          </p>

          <p>
            <i className="bi bi-envelope me-2"></i>
            hello@redwoodbutchery.com
          </p>

          <p>
            <i className="bi bi-clock me-2"></i>
            Every day, 9 AM – 8 PM
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Redwood Butchery &amp; Co. All
            rights reserved.
          </p>

          <p>Freshness you can trust. Quality you can taste.</p>
        </div>
      </div>
    </footer>
  );
}