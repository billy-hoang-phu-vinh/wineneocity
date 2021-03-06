import React from "react";

function CheckoutItem(props) {
 
  return (
    <div className="product bg-white">
      <a href="./page/sample">
        <div className="product__card d-flex">
          <img
            className="product__image"
            src={props.img}
            alt=""
          />
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
      
    </div>
  );
}
export default CheckoutItem;
