// Start Node imports
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
// End Node imports

// Start State Providers & Services
import {useStateValue} from "../../../Services/StateProvider"
import {getCartTotal} from "../../../Services/Reducer";
import axios from "../../../Services/axios";
import { db } from "../../../Services/Firebase";
// End State Providers & Services

// Start Components
import CheckoutProduct from '../CheckoutProduct';
// End Components

// Start Pages
// End Pages

// Start Stlyesheets
import './CheckoutPayment.css';
// End Stlyesheets

function CheckoutPayment() {

    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSt, setClientSt] = useState(true);

    useEffect(() => {
        const getClientSt = async() => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSt(response.data.clientSt)
        }
        getClientSt();
    }, [cart]);

    const handlePaymentSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSt, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            })

            history.replace('/orders');
        })
    }

    const handlePaymentFormChange = e => {
        setDisabled(e.empty);
        setError(e.error?e.error.message: "");
    }

    return (
        <div className="page__checkoutpayment">
            <div className="payment__container">
                <h1>Checkout (<Link to='/checkout'>{cart?.length} items)</Link></h1>
                <div className="payment__section">
                    <div className="payment__title border-right">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>11, Eden Street, Nazareth,</p>
                        <p>Tuticorin, Tamil Nadu.</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title border-right">
                        <h3>Review items &amp; delivery</h3>
                    </div>
                    <div className="payment__items">
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
                <div className="payment__section">
                    <div className="payment__title border-right">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handlePaymentSubmit}>
                            <CardElement onChange={handlePaymentFormChange}/>
                            <div className="payment__price__tenter">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>
                                            Order Total: {value}
                                        </h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded} className="payment__pay__now__button">
                                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPayment
