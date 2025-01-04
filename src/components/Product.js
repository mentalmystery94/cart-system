// Product.js
import React from 'react';
import './Product.css';


function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product__image" />
      <h3 className="product__title">{product.title}</h3>
      <p className="product__description">{product.description}</p>
      <p className="product__price">€{product.price}</p>
      <button className="product__button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;

