import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
      <div>
        <h2>Detalles del producto con ID = {productId}</h2>
      </div>
      <div>
        <Link to={`/products/${productId}/comments`}>
          <button>Comentarios</button>
        </Link>
        <Link to={`/products/${productId}/ratings`}>
          <button>Ratings</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default ProductDetails;
