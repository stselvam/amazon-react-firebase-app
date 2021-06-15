// Start Node imports
import React from 'react'
// End Node imports

// Start State Providers
import {useStateValue} from "../../Services/StateProvider"
// End State Providers

// Start Components
// End Components

// Start Stylesheet
import "./Product.css"
// End Stylesheet

function Product({id, title, image, price, rating}) {
    const [{cart}, dispath] = useStateValue();
    const addToCart = () => {
        dispath({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    };

    return (
        <div className="amzn__product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p key={i}>&#x2B50;</p>
                    ))}
                </div>
            </div>
            <img
                src={image}
                alt={title}
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
