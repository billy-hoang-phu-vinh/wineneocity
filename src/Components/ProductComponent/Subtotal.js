import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import React, { useState } from "react";
import { useStatevalue } from "../../StateProvider";
import { Link } from "react-router-dom";

function Subtotal(){
    // const [subtotal,setSubtotal] = useState(0);
    // const [totalItems,settotalItems] = useState(0);
    const [{ cart, promo }, dispatch] = useStatevalue();

    let test = cart;
    let subtotal_temp = 0;
    let totalItems_temp = 0;
    //update value
    if(test.length > 0){
        test.forEach(element => {
            subtotal_temp += element.price;
            totalItems_temp +=1;
          });
    }
   
//   setSubtotal(subtotal_temp);
//   settotalItems(totalItems_temp);

    return <div className="subtotal mt-8px ">
        <CurrencyFormat 
        value={0} displayType={'text'} 
        thousandSeparator={true} prefix={'$'} 
        decimalScale ={2}
        renderText={value => 
        <div>
            <p>
                Subtotal ({totalItems_temp} items): <strong>{subtotal_temp}</strong>
            </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> 
                    This order contains a gift
                </small>
            
        </div>} 
        />
        <Link to="/">
        <button className="btn_submit mt-8px">Proceed to Checkout</button>
        </Link>

    </div>;
}    
export default Subtotal;