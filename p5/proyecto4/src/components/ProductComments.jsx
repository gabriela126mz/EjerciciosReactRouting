import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductComments() {
  const { productId } = useParams();
  return (
    <>
      <div>
        <h1>Comentarios del Producto con ID: {productId}</h1>
        <Link to={`/products`}>
          <button>Volver a Productos</button>
        </Link>
      </div>
    </>
  );
}

export default ProductComments;
