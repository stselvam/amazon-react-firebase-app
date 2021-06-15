// Start Node imports
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// End Node imports

// Start State Providers
import {useStateValue} from "../../Services/StateProvider"
// End State Providers

// Start Components
import CheckoutProduct from './CheckoutProduct';
import Subtotal from '../../Components/Subtotal/Subtotal';
// End Components

// Start Pages
// End Pages

// Start Stlyesheets
import './Checkout.css';
// End Stlyesheets

function Checkout() {
    const [{cart, user}, dispath] = useStateValue();
    return (
        <div className="page__checkout">
            <div className="checkout__left">
                <img className="checkout__ad__banner" src="/images/checkout/___banner.jpg" alt="Checkout page" />
                <div className="animatedContainer">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {cart.map(item => 
                        <CheckoutProduct
                            key={uuidv4()}
                            keyIndex={uuidv4()}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating} />
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal cart={cart}/>
            </div>
        </div>
    )
}

export default Checkout