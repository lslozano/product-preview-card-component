import React from "react";

import iconCart from "../../../assets/icon-cart.svg";

import styles from "./ProductCta.module.css";

import { formatPrice } from "../../../utils";

const priceStyles = {
  regular: {
    fontSize: "2rem",
    textDecoration: "none",
  },
  onSale: {
    fontSize: "0.9rem",
    textDecoration: "line-through",
  },
};

function ProductCta({ price, salePrice }) {
  const variant = salePrice > 0 ? "onSale" : "regular";

  return (
    <div className={styles.productCta}>
      <div className={styles.productPrice}>
        {salePrice > 0 && <strong>{formatPrice(salePrice)}</strong>}
        <span style={priceStyles[variant]}>{formatPrice(price)}</span>
      </div>
      <button>
        <img
          src={iconCart}
          alt="Cart icon"
        />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCta;
