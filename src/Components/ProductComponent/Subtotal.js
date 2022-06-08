import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';

function Subtotal(){
    return <div className="subtotal mt-8px ">
        <CurrencyFormat 
        value={2456981} displayType={'text'} 
        thousandSeparator={true} prefix={'$'} 
        renderText={value => 
        <div>
            <p>
                Subtotal (0 items): <strong>0</strong>
            </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> 
                    This order contains a gift
                </small>
            
        </div>} 
        />
        <div>
        <button className="btn_submit mt-8px">Proceed to Checkout</button>
        </div>

    </div>;
}    
export default Subtotal;