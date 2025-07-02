import React from "react";

import ProductImage from "../ProductImage";
import ProductInfo from "../ProductInfo";

import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { imgMobile, imgDesktop, information } = product;

  return (
    <article className={styles.productCardContainer}>
      <ProductImage
        imgMobile={imgMobile}
        imgDesktop={imgDesktop}
      />
      <ProductInfo information={information} />
    </article>
  );
}

export default ProductCard;
