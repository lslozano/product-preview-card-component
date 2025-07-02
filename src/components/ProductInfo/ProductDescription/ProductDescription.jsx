import React from "react";

import styles from "./ProductDescription.module.css";

function ProductDescription({ type, title, description }) {
  return (
    <div className={styles.productDescription}>
      <span>{type}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;
