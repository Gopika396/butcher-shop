import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart({
  cart,
  changeQuantity,
  removeFromCart,
  clearCart
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder() {
    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <section className="inner-page section-pad">
        <div className="container empty-cart">
          <div className="empty-cart-icon">
            <i className="bi bi-check2-circle"></i>
          </div>

          <span className="eyebrow dark-eyebrow">DEMO CHECKOUT</span>

          <h1>
            Thanks for your <em>order!</em>
          </h1>

          <p>
            This is a demo project, so no real order or payment has been
            made.
          </p>

          <Link
            to="/products"
            className="btn-primary-custom"
            onClick={() => setOrderPlaced(false)}
          >
            Continue shopping
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="inner-page section-pad">
      <div className="container">
        <div className="page-intro cart-intro" data-aos="fade-down">
          <span className="eyebrow dark-eyebrow">YOUR SELECTION</span>

          <h1>
            Your shopping <em>bag.</em>
          </h1>

          <p>Review your cuts and adjust quantities before checkout.</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart" data-aos="zoom-in">
            <div className="empty-cart-icon">
              <i className="bi bi-basket3"></i>
            </div>

            <h2>Your bag is waiting.</h2>

            <p>Looks like you haven't added any cuts yet.</p>

            <Link to="/products" className="btn-primary-custom">
              Explore our products
              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    className="cart-thumb"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <span>
                      {item.category} · {item.unit}
                    </span>

                    <h3>{item.name}</h3>

                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                  </div>

                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <strong className="line-total">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </strong>

                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </article>
              ))}

              <Link to="/products" className="continue-shopping">
                <i className="bi bi-arrow-left me-2"></i>
                Continue shopping
              </Link>
            </div>

            <aside className="order-summary">
              <span className="eyebrow dark-eyebrow">ORDER SUMMARY</span>

              <h2>Your total</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Calculated later</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
              </div>

              <p className="summary-note">
                Delivery charges, if any, are not included in this demo.
              </p>

              <button
                type="button"
                className="btn-primary-custom checkout-btn"
                onClick={placeOrder}
              >
                Continue to checkout
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>

              <p className="secure-note">
                <i className="bi bi-shield-check me-2"></i>
                Demo checkout · No payment collected
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}