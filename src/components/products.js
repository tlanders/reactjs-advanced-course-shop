import React from "react";
import Product from "./product";

let Products = ({products, handleClick}) => {
    console.log(`products: ${products}`);
    return (
        <section>
            <h2>Our Products</h2>
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

export default Products;