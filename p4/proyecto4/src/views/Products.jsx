import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" }
    ];

    return (
        <div>
            <h1>Productos Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <button>{product.name}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
