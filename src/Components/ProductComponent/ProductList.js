import React, { useState } from "react";
import Product from "./Product";

function ProductList() {
  return (
    // assume quantity 
    <div className="productList d-flex flex-row">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  );
}
export default ProductList;
