import React, { useState } from "react";
import "./Components/Product/Product.css";

function Product() {
  return (
    <div className="product">
      <a href="./page/sample">
        <div className="product__card">
          <div className="product__status">NEW</div>
          <img className="product__image" src="./img" alt="" />

          <div className="product__info">
            <span className="product__category">GIFT Box</span>
            <p className="product__title">Gift box preorder for valentine</p>
            <p className="product__price">
              <small>$</small>
              <strong>19.99</strong>
            </p>
          </div>
          <div className="product__promo">promotag absolute</div>
        </div>
      </a>
    </div>
  );
}
export default Product;
