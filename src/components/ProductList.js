// ProductList.js
import React from 'react';
import Product from './Product';
import './ProductList.css';

function ProductList({ products, addToCart }) {
  return (
    <div className="productList">
      {products.map(product => (
        <Product 
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
