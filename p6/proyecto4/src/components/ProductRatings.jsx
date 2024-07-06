import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductRatings() {
  const { productId } = useParams();

  return (
    <>
      <div>
        <h1>Calificaciones del Producto con ID: {productId}</h1>
        <Link to={`/products`}>
          <button>Volver a Productos</button>
        </Link>
      </div>
    </>
  );
}

export default ProductRatings;
