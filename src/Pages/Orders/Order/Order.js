import React from 'react';
import moment from 'moment';
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from '../../Checkout/CheckoutProduct'

import "./Order.css"

function Order({order}) {
    return (
        <div className="order___individual">
            <h1>Order</h1>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            <p className="order___individual___id">
                <small>{order.id}</small>
            </p>
            {
                order.data.cart?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))
            }
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">
                        Order Total: <strong>{value}</strong>
                    </h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Order
