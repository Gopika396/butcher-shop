import { useEffect, useState } from "react";
import AOS from "aos";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";

const CART_KEY = "redwood-cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// Scrolls to the top and re-checks animations on every page change
function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => AOS.refreshHard(), 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out",
      mirror: false
    });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // storage unavailable - cart simply won't persist
    }
  }, [cart]);

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);

      if (found) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HashRouter>
      <RouteEffects />

      <div className="app-shell">
        <div className="top-strip">
          <div className="container top-strip-inner">
            <span>
              <i className="bi bi-patch-check me-2"></i>
              Carefully sourced. Expertly cut.
            </span>

            <span>
              <i className="bi bi-clock me-2"></i>
              Open daily · 9:00 AM – 8:00 PM
            </span>
          </div>
        </div>

        <Navbar cartCount={cartCount} />

        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  changeQuantity={changeQuantity}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}