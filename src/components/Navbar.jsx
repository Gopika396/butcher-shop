import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="main-navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">
            <i className="bi bi-fire"></i>
          </span>

          <span>
            REDWOOD
            <small> BUTCHERY &amp; CO.</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="site-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <div
          id="site-links"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/cart" className="cart-nav" onClick={closeMenu}>
            <i className="bi bi-bag me-2"></i>
            Cart
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}