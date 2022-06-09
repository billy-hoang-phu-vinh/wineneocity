import React from "react";

function CheckoutItem(props) {
  return (
    <div className="checkout bg-white">
      <div className="checkout__card d-flex">
        <img className="checkout__image mx-1rem" src={props.img} alt="" />
        <div className="height-1r"></div>
        <div className="checkout__info">
          <span className="checkout__name padding-top-bottom-4px">
            {props.name}
          </span>
          <p className="checkout__price d-flex padding-top-bottom-4px">
            <div className="current__price">
              <small>$</small>
              <strong>{props.price}</strong>
            </div>
          </p>
          <p className="quantity">
            <span>Qty: </span>
            <select>
              <option value="default">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="0">0</option>
            </select>
          </p>
          <p className="checkout__description padding-top-bottom-4px">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CheckoutItem;
