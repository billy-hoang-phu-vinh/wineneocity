import React from "react";
import { useStatevalue } from "../../StateProvider";

function CheckoutItem(props) {
  const [{ cart }, dispatch] = useStatevalue();

  const removeItem = () => {
    console.log(`props id: `, props.id);

    console.log(
      `object index da chon: `,
      cart.findIndex((obj) => obj.id === props.id)
    );

    const objIndex = cart.findIndex((obj) => obj.id === props.id);

    //expect not -1
    objIndex !== -1 ? deleteitem_toReducer(objIndex) : console.log(`err`);
  };
  const deleteitem_toReducer = (index) => {
    console.log(`index: `, index);
    //clone cart
    console.log(`cart in checkoutComponent: `, cart);
    let tempcart = cart;
    tempcart.splice(index, 1);
    console.log(`new clone cart: `, tempcart);
    dispatch({
      type: "DELETE_ITEM",
      newCart: tempcart,
    });
    //delete item
  };
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
              <option value="default">{props.qty}</option>
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
          <button className="btn_remove" onClick={removeItem}>
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckoutItem;
