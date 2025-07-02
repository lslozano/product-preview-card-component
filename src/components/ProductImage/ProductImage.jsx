import React from "react";

import styles from "./ProductImage.module.css";

function ProductImage({ imgMobile, imgDesktop }) {
  return (
    <picture className={styles.productCardImg}>
      <source
        media="(max-width: 48em)"
        srcset={imgMobile}
      />
      <source
        media="(min-width: 49em)"
        srcset={imgDesktop}
      />
      <img
        src={imgMobile}
        alt="Image of a perfume"
      />
    </picture>
  );
}

export default ProductImage;
