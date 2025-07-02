import React from "react";

import ProductCard from "./components/ProductCard";
import "./App.css";

import product from "./data";

function App() {
  return (
    <main>
      <ProductCard product={product} />
    </main>
  );
}

export default App;
