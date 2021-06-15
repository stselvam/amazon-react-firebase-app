// Start Node imports
import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
// End Node imports

// Start Services
import { getCartTotal } from '../../Services/Reducer';
// End Services

// Start Pages
// End Pages

// Start Stlyesheets
import './Subtotal.css';
// End Stlyesheets

function Subtotal({cart}) {
    const history = useHistory();
    return (
        <div className="subtotal___segment">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={(e) => history.push("/checkout/payment")}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal