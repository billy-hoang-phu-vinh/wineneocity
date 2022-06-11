import React, { useState} from "react";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
import { useStatevalue } from "../../StateProvider";
import {getAuth, onAuthStateChanged} from "firebase/auth";

function Checkout(props) {
  //load cart from state
  const [{ cart, user }, dispatch] = useStatevalue();
  const [userName, setUserName] = useState();

  const auth = getAuth();// ?
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUserName(user.email);
      console.log(`show username here: `,user.email);

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const checkoutItem = cart.map((element)=>
  <div>
  <CheckoutItem
  id={element.id}
  name={element.name}
  description={element.description}
  price={element.price}
  originalPrice={element.originalPrice}
  img={element.img}
  qty={element.qty}
  />
  </div>
  );

  

  

  return (
    <div className="checkout">
      <div className="d-flex container mx-auto flex-row">
        <a href="/">
          <img
            className="checkout_banner"
            src="https://i.imgur.com/pqaZbf0.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="d-flex container mx-auto flex-row">
        <div className="width-70">
        <h2 className="justify-start text-align-left mx-1rem">Hello, {userName?userName:"Guest"} </h2>       
          <h2 className="justify-start text-align-left mx-1rem">Your cart</h2>

          {checkoutItem}
        </div>
        <div className="width-30">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}
export default Checkout;
