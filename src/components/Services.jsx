import { Link } from "react-router-dom";

const services = [
  {
    icon: "bi-scissors",
    number: "01",
    title: "Cuts your way",
    text: "Tell us how you plan to cook. We can prepare cuts to suit curries, grills, roasts and everyday recipes."
  },
  {
    icon: "bi-basket2",
    number: "02",
    title: "Family bundles",
    text: "Build a convenient selection for busy weeks, family dinners or a weekend gathering."
  },
  {
    icon: "bi-truck",
    number: "03",
    title: "Local delivery",
    text: "Ask our team about local delivery options and available delivery windows for your area."
  },
  {
    icon: "bi-chat-heart",
    number: "04",
    title: "Friendly advice",
    text: "Not sure which cut to choose? We are happy to share simple preparation and cooking suggestions."
  },
  {
    icon: "bi-calendar2-check",
    number: "05",
    title: "Party orders",
    text: "Planning a celebration? Contact us in advance to discuss quantities and preparation preferences."
  },
  {
    icon: "bi-snow",
    number: "06",
    title: "Careful packing",
    text: "We pack orders thoughtfully so they are convenient to carry home and prepare."
  }
];

export default function Services() {
  return (
    <section className="inner-page section-pad">
      <div className="container">
        <div className="page-intro" data-aos="fade-down">
          <span className="eyebrow dark-eyebrow">MORE THAN A MEAT COUNTER</span>

          <h1>
            Good service is
            <br />
            <em>part of the craft.</em>
          </h1>

          <p>
            From choosing the right cut to planning a family feast, we're
            here to help.
          </p>
        </div>

        <div className="row g-4 services-grid">
          {services.map((service) => (
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              key={service.number}
            >
              <article className="service-card">
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="service-callout" data-aos="zoom-in">
          <div>
            <span className="eyebrow">NEED SOMETHING SPECIFIC?</span>

            <h2>Let's plan your order.</h2>

            <p>
              Tell us what you're cooking and we'll help you get started.
            </p>
          </div>

          <Link to="/contact" className="btn-light-custom">
            Talk to our team
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}