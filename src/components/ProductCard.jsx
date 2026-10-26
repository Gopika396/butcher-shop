export default function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          width="1200"
          height="900"
          loading="lazy"
        />

        {product.tag ? (
          <span className="product-tag">{product.tag}</span>
        ) : null}

        <button
          className="quick-add"
          type="button"
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="product-info">
        <div className="product-category">
          {product.category} · {product.unit}
        </div>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-card-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <button
            className="text-add"
            type="button"
            onClick={() => addToCart(product)}
          >
            Add to cart
            <i className="bi bi-arrow-up-right ms-1"></i>
          </button>
        </div>
      </div>
    </article>
  );
}