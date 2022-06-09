import React, { useState } from "react";
import Product from "./Product";
import { useStatevalue } from "../../StateProvider";

function ProductList(props) {

  //props is a List of item
  const sample_product = {
    id:"1",
    name: "Gaja Darmagi 750ml",
    description:"Darmagi has a precise personality due to the Barbaresco soil which emphasizes its early austerity, resulting in a refined and complex wine. It has a dark colour, with spicy aromas of paprika, liquorice, cassis fruit and flowers, especially violet. This wine has a remarkable structure, with refined tannins. Suitable for long ageing.",
    price:0,
    originalPrice:19,
    img: "https://cdn11.bigcommerce.com/s-oyi93ews/products/11878/images/7453/gaja-darmagi-449422__02818.1552094550.900.900.jpg?c=2",

  }
  const list = [];
  list.push(sample_product)
  const [{ promo }, dispatch] = useStatevalue();

      //recaculate the current price
  list.forEach(element => {
    element.price = (1-promo)*element.originalPrice
  });
  const listItems = list.map((element)=>
  <div>
  <Product
  id={element.id}
  name={element.name}
  description={element.description}
  price={element.price}
  originalPrice={element.originalPrice}
  img={element.img}
  />
  </div>
  );
  return (
    // assume quantity
    <div className="productList d-flex flex-row">
      {listItems}
      
    </div>
  );
}
export default ProductList;
