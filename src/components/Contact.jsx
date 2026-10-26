import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="inner-page section-pad">
      <div className="container">
        <div className="page-intro" data-aos="fade-down">
          <span className="eyebrow dark-eyebrow">WE'D LOVE TO HEAR FROM YOU</span>

          <h1>
            Come say <em>hello.</em>
          </h1>

          <p>
            Questions about a cut, a special order or a visit? Send us a
            message.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-details" data-aos="fade-right">
            <div className="contact-detail">
              <span className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </span>

              <div>
                <h3>Find our shop</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">
                <i className="bi bi-telephone"></i>
              </span>

              <div>
                <h3>Give us a call</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">
                <i className="bi bi-envelope"></i>
              </span>

              <div>
                <h3>Send an email</h3>
                <p>hello@redwoodbutchery.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">
                <i className="bi bi-clock"></i>
              </span>

              <div>
                <h3>Opening hours</h3>
                <p>Daily · 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="contact-note">
              <i className="bi bi-info-circle me-2"></i>
              Demo contact details for your project. Replace them with your
              actual shop details.
            </div>
          </div>

          <form
            className="contact-form"
            data-aos="fade-left"
            onSubmit={handleSubmit}
          >
            <h2>Send us a message</h2>

            <p>Fill in the details and we'll be in touch.</p>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="topic">What can we help with?</label>
            <select id="topic" name="topic" defaultValue="" required>
              <option value="" disabled>
                Select a topic
              </option>
              <option>Product enquiry</option>
              <option>Custom cuts</option>
              <option>Delivery question</option>
              <option>Other</option>
            </select>

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us a little more..."
              required
            ></textarea>

            <button className="btn-primary-custom" type="submit">
              Send message
              <i className="bi bi-arrow-up-right ms-2"></i>
            </button>

            {submitted && (
              <div className="success-message" role="status">
                <i className="bi bi-check-circle-fill me-2"></i>
                Thanks! Your demo message has been submitted.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}