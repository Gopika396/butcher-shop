import { useEffect, useState } from "react";
import AOS from "aos";
import { meatProducts } from "./ProductData.jsx";
import ProductCard from "./ProductCard.jsx";

const categories = ["All", "Beef", "Chicken", "Lamb"];

export default function Products({ addToCart }) {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? meatProducts
      : meatProducts.filter((item) => item.category === category);

  // Make sure newly shown cards animate in after filtering
  useEffect(() => {
    const timer = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <section className="inner-page section-pad">
      <div className="container">
        <div className="page-intro" data-aos="fade-down">
          <span className="eyebrow dark-eyebrow">FRESH FROM OUR COUNTER</span>

          <h1>
            Find your <em>favourite cut.</em>
          </h1>

          <p>
            Everyday essentials and special-occasion favourites, prepared
            with care.
          </p>
        </div>

        <div className="filter-row">
          <span>{filtered.length} cuts to explore</span>

          <div className="filter-buttons">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "filter-active" : ""}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filtered.map((product) => (
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              key={product.id}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>

        <p className="price-note">
          <i className="bi bi-info-circle me-2"></i>
          Prices shown are sample project prices per listed pack size.
        </p>
      </div>
    </section>
  );
}