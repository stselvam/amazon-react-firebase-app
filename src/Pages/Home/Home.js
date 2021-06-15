// Start Node imports
import React from 'react'
// End Node imports

// Start Components
import Product from '../../Components/Product/Product'
// End Components

// Start Stylesheet
import "./Home.css"
// End Stylesheet

function Home() {
    return (
        <div className="page__home">
            <div className="home__container">
                <img className="home__slider__image" src="/images/home-slider/shipping-feature.jpg" alt="45 Million Products around the world in Amazon" />
                <div className="home__row">
                    <Product id="00001" title="The Nuclear Effect: The 6 Pillars of Building a 7+ Figure Online Business" image="/images/products/nuclear-effect.jpg" rating={4} price={1138.13}/>
                    <Product id="00002" title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" image="/images/products/m12.jpg" rating={4} price={9999.0}/>
                </div>
                <div className="home__row">
                    <Product id="00003" title="MAGGI NUTRI-LICIOUS Masala Veg Atta Noodles – (Pack of 4) 290g Pouch" image="/images/products/nutrilicious.jpg" rating={4} price={86.00}/>
                    <Product id="00004" title="Maggi 2-Minute Special Masala Instant Noodles, 70g (Pack of 12)" image="/images/products/special-masala.jpg" rating={4} price={162.00}/>
                    <Product id="00005" title="Samsung Galaxy M11 (Metallic Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers" image="/images/products/m11.jpg" rating={4} price={8999.00}/>
                </div>
                <div className="home__row">
                    <Product id="00006" title="Samsung Galaxy M02s (Blue,4GB RAM, 64GB Storage) | 5000 mAh | Triple Camera" image="/images/products/m02s.jpg" rating={4} price={9999.00}/>
                </div>
            </div>
        </div>
    )
}

export default Home