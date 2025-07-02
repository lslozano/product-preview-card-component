import React from "react";

import styles from "./ProductInfo.module.css";

import ProductDescription from "./ProductDescription";
import ProductCta from "./ProductCta";

function ProductInfo({ information }) {
  const { type, title, description, price, salePrice } = information;

  return (
    <section className={styles.productCardInfo}>
      <ProductDescription
        type={type}
        title={title}
        description={description}
      />
      <ProductCta
        price={price}
        salePrice={salePrice}
      />
    </section>
  );
}

export default ProductInfo;
