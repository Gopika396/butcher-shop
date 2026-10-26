import { Link } from "react-router-dom";
import { meatProducts } from "./ProductData.jsx";
import ProductCard from "./ProductCard.jsx";
import craftImage from "../assets/images/craft.jpg";

export default function Home({ addToCart }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-copy" data-aos="fade-right">
            <span className="eyebrow">
              <span></span>
              YOUR NEIGHBOURHOOD BUTCHER
            </span>

            <h1>
              Good meat.
              <br />
              <em>Great meals.</em>
              <br />
              Every time.
            </h1>

            <p>
              Thoughtfully sourced cuts, prepared by skilled hands and
              brought fresh to your table.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn-primary-custom">
                Shop our cuts
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>

              <Link to="/services" className="btn-outline-custom">
                Discover our craft
              </Link>
            </div>

            <div className="hero-trust">
              <span>
                <i className="bi bi-check-circle-fill"></i>
                Quality checked daily
              </span>

              <span>
                <i className="bi bi-check-circle-fill"></i>
                Cut to your preference
              </span>
            </div>
          </div>

          <div className="hero-note" data-aos="fade-left">
            <span className="note-icon">
              <i className="bi bi-award"></i>
            </span>

            <div>
              <strong>Quality first</strong>
              <small>From source to your kitchen</small>
            </div>
          </div>
        </div>

        <div className="container hero-bottom-label">
          <span className="label-num">01</span>
          FRESHNESS IS OUR PROMISE
          <span className="label-line"></span>
        </div>
      </section>

      <section className="promise-strip">
        <div className="container promise-grid" data-aos="fade-up">
          <div>
            <i className="bi bi-stars"></i>
            <span>
              <strong>Carefully sourced</strong>
              <small>Quality you can trust</small>
            </span>
          </div>

          <div>
            <i className="bi bi-scissors"></i>
            <span>
              <strong>Expertly prepared</strong>
              <small>Cut just the way you like</small>
            </span>
          </div>

          <div>
            <i className="bi bi-snow"></i>
            <span>
              <strong>Handled with care</strong>
              <small>Freshness at every step</small>
            </span>
          </div>

          <div>
            <i className="bi bi-heart"></i>
            <span>
              <strong>Made for your table</strong>
              <small>From our shop to your home</small>
            </span>
          </div>
        </div>
      </section>

      <section className="section-pad featured-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <div>
              <span className="eyebrow dark-eyebrow">
                THE BUTCHER'S SELECTION
              </span>

              <h2>
                Good cuts, <em>great flavour.</em>
              </h2>
            </div>

            <Link to="/products" className="view-all">
              View all products
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>

          <div className="row g-4">
            {meatProducts.slice(0, 3).map((product) => (
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                key={product.id}
              >
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="craft-section">
        <div className="container craft-grid">
          <div className="craft-image" data-aos="zoom-in">
            <img
              src={craftImage}
              alt="Carefully prepared premium meat cuts"
              width="1500"
              height="1200"
              loading="lazy"
            />

            <div className="craft-stamp">
              <i className="bi bi-patch-check"></i>
              <span>
                THE REDWOOD
                <br />
                STANDARD
              </span>
            </div>
          </div>

          <div className="craft-copy" data-aos="fade-left">
            <span className="eyebrow dark-eyebrow">A LITTLE MORE CARE</span>

            <h2>
              We believe the
              <br />
              details <em>matter.</em>
            </h2>

            <p>
              Great meals begin long before the pan gets hot. We focus on
              dependable quality, careful preparation and helpful service,
              so choosing meat feels simple.
            </p>

            <ul>
              <li>
                <i className="bi bi-check2"></i>
                Thoughtful selection and handling
              </li>

              <li>
                <i className="bi bi-check2"></i>
                Cuts prepared for your recipe
              </li>

              <li>
                <i className="bi bi-check2"></i>
                Friendly advice from our team
              </li>
            </ul>

            <Link to="/services" className="btn-primary-custom">
              Meet our services
              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner" data-aos="fade-up">
          <div>
            <span className="eyebrow">LET'S MAKE DINNER BETTER</span>

            <h2>
              Your next great meal
              <br />
              <em>starts right here.</em>
            </h2>
          </div>

          <Link to="/products" className="btn-light-custom">
            Find your favourite cuts
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
}