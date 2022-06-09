import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import React from "react";
import { useStatevalue } from "../../StateProvider";
import { Link } from "react-router-dom";

function Subtotal(){
    const [{ cart }] = useStatevalue();

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
   


// pass value to use this setting: currency & decimal scale
    return <div className="subtotal mt-8px ">
        <CurrencyFormat 
        value={subtotal_temp} displayType={'text'} 
        thousandSeparator={true} prefix={'$'} 
        decimalScale ={2}
        renderText={value => 
        <div>
            <p>
                Subtotal ({totalItems_temp} items): <strong>{value}</strong>
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