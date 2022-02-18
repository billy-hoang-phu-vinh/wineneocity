import React, { useState } from "react";

function Product() {
  return (
    <div className="product bg-white">
      <a href="./page/sample">
        <div className="product__card">
          <img
            className="product__image"
            src={require("../../sample/wine3.png")}
            alt=""
          />
          <div className="height-1r"></div>
          <div className="product__info">
            <span className="product__name padding-top-bottom-4px">
              GIFT Box
            </span>
            <p className="product__description padding-top-bottom-4px">
              Gift box preorder for valentine Gift box preorder for valentine
              Gift box preorder for valentine{" "}
            </p>
            <p className="product__price d-flex justify-center text-center padding-top-bottom-4px">
              <div className="current__price">
                <small>$</small>
                <strong>19.99</strong>
              </div>
              <div className="promo__price">
                <small>$</small>
                <strong>39.99</strong>
              </div>
              
            </p>
          </div>
        </div>
      </a>
      <div className="product__promo position-relative">
        <div className="position-absolute position-ab-l-b">
          <div className="product__promotag">
            <img
              className="product__promotag_img"
              src={require("../../img/icons/tag.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
