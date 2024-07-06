import React, { useState, useEffect } from 'react';
import { Link,useSearchParams } from 'react-router-dom';

const productData = {
  images: {
    Rojo: 'url_alguno',
    Azul: 'url_otro',
    Verde: 'url_otro_más'
  },
  colors: ['Rojo', 'Azul', 'Verde','Amarillo'],
  sizes: ['XS','S', 'M', 'L','XL','XXL']
};


const Camiseta = () => {
    const [searchParams, setSearchParams] = useSearchParams(); 
    let selectedColor = searchParams.get("color");
    let selectedSize = searchParams.get("size");

    const currentParams = Object.fromEntries([...searchParams]);

    useEffect(() => {
        if (!selectedColor || !selectedSize) { 
            selectedColor = productData.colors[0]; 
            selectedSize = productData.sizes [0];
        }
        setSearchParams({ color: selectedColor, size: selectedSize });
    }, [searchParams, setSearchParams]);
    
  return (
    <div>
      <h1>Camiseta</h1>
      <div className="product-detail-container">
        <div className="product-image">
          <img
            src={productData.images[selectedColor]}
            alt="Product"
          />
        </div>
        <div className="product-details">
          <div>
            <h2>Camiseta</h2>
          </div>
          <div>
            <h3>Colores disponibles:</h3>
            <div className="color-options">
              {productData.colors.map((color, index) => (
                <Link
                  key={index}
                  to={`?color=${color}&size=${selectedSize}`}
                  className={`color-option ${
                    searchParams.get("color") === color ? "selected" : ""}`}
                  onClick={() => handleColorChange(color)}
                >
                  {color}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3>Tallas disponibles:</h3>
            <div className="size-options">
              {productData.sizes.map((size, index) => (
                <Link
                  key={index}
                  to={`?color=${selectedColor}&size=${size}`}
                  className={`size-option ${
                    searchParams.get("size") === size ? "selected" : ""}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camiseta;
