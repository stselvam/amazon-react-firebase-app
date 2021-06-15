// Start Node imports
import React from 'react';
// End Node imports

// Start State Providers
import { useStateValue } from '../../Services/StateProvider';
// End State Providers

// Start Components
// End Components

// Start Pages
// End Pages

// Start Stlyesheets
import './CheckoutProduct.css';
// End Stlyesheets

function CheckoutProduct({keyIndex, id, title, image, price, rating, hideButton}) {

    const [{cart}, dispath] = useStateValue();

    const removeFromCart = (key) => {
        if(document.getElementById("checkoutProduct"+key)) {
            document.querySelector("#checkoutProduct"+key).style.transform = "translateX(90deg)";
            document.querySelector("#checkoutProduct"+key).style.height = "0px";
            document.querySelector("#checkoutProduct"+key).style.opacity = "0";
        }
        setTimeout(() => {
            dispath({
                type: "REMOVE_FROM_CART",
                id: id,
            });
        }, 400);
    }

    return (
        <div className="checkoutProduct" id={"checkoutProduct"+keyIndex}>
            <img className="checkoutProduct__image" src={image} alt={title} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (<p key={i}>&#x2B50;</p>))
                    }
                </div>
                {!hideButton && (
                    <button onClick={() => removeFromCart(keyIndex)}>Remove from cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
