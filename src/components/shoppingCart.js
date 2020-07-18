import React from "react";
import Product from "./product";

let ShoppingCart = ({products, handleClick}) => {
    return (
        <section>
            <h2>Your Cart</h2>
            <section>
                {products.map(product => (
                    <Product
                        key={product.id}
                        {...product}
                        handleClick={handleClick}
                    />
                ))}
            </section>
        </section>
    );
}

export default ShoppingCart;