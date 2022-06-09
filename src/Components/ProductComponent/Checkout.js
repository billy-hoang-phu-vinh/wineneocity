import React, { useState } from "react";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
function Checkout(props) {
 
  const sample_product = {
    name: "Gaja Darmagi 750ml",
    description:"Darmagi has a precise personality due to the Barbaresco soil which emphasizes its early austerity, resulting in a refined and complex wine. It has a dark colour, with spicy aromas of paprika, liquorice, cassis fruit and flowers, especially violet. This wine has a remarkable structure, with refined tannins. Suitable for long ageing.",
    price:0,
    originalPrice:19,
    img: "https://cdn11.bigcommerce.com/s-oyi93ews/products/11878/images/7453/gaja-darmagi-449422__02818.1552094550.900.900.jpg?c=2",


  }

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
          <h2 className="justify-start text-align-left mx-1rem">
            Your cart
          </h2>
           <CheckoutItem
           name={sample_product.name}
           description={sample_product.description}
           price={sample_product.price}
           originalPrice={sample_product.originalPrice}
           img={sample_product.img}/>
           
           <CheckoutItem
           name={sample_product.name}
           description={sample_product.description}
           price={sample_product.price}
           originalPrice={sample_product.originalPrice}
           img={sample_product.img}/>
        </div>
        <div className="width-30">

          <Subtotal/>
        </div>
     </div>
    </div>
  );
}
export default Checkout;
