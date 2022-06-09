import React, { useState } from "react";
import tag from "../../img/icons/tag.png";
import { useStatevalue } from "../../StateProvider";
function Product(props) {
  const [{ cart }, dispatch] = useStatevalue();
  console.log(`this is  >> cart`, cart);
  console.log(`this is  >> id`, props.id);
  const addtoCart = () => {
    //send item to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        img: props.img,
        description: props.description,
        price: props.price,
        originalPrice: props.originalPrice,
      },
    });
    return;
  };
  return (
    <div className="product bg-white">
      <a href="./page/sample">
        <div className="product__card">
          <img className="product__image" src={props.img} alt="" />
          <div className="height-1r"></div>
          <div className="product__info">
            <span className="product__name padding-top-bottom-4px">
              {props.name}
            </span>
            <p className="product__description padding-top-bottom-4px">
              {props.description}
            </p>
            <p className="product__price d-flex justify-center text-center padding-top-bottom-4px">
              <div className="current__price">
                <small>$</small>
                <strong>{props.price}</strong>
              </div>
              <div className="promo__price">
                <small>$</small>
                <strong>{props.originalPrice}</strong>
              </div>
            </p>
          </div>
        </div>
      </a>
      <div className="product__promo position-relative">
        <div className="position-absolute position-ab-l-b">
          <div className="product__promotag">
            <img className="product__promotag_img" src={tag} alt="" />
          </div>
        </div>
      </div>
      <div className="promo__price">
        <button className="btn_submit_gr btn_submit" onClick={addtoCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
export default Product;
