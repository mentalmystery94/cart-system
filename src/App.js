// App.js
import { React, useState } from "react";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    title: 'Ralph Lauren Polo Shirt',
    description: 'Classic fit polo shirt',
    price: 29.99,
    image: './images/shirt1.jpg'
  },
  {
    id: 2,
    title: 'Ralph Lauren T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 49.99,
    image: './images/shirt2.jpg'
  },
  {
    id: 3,
    title: 'Ralph Lauren Jacket',
    description: 'Warm and stylish jacket',
    price: 109.99,
    image: './images/shirt3.jpg'
  },
  {
    id: 4,
    title: 'Ralph Lauren Jeans',
    description: 'Comfortable fit jeans',
    price: 89.99,
    image: './images/shirt4.jpg'
  },
  {
    id: 5,
    title: 'Ralph Lauren Dress',
    description: 'Elegant dress for special occasions',
    price: 59.99,
    image: './images/shirt5.jpg'
  },
  {
    id: 6,
    title: 'Ralph Lauren Sweater',
    description: 'Cozy and warm sweater',
    price: 99.99,
    image: './images/shirt6.jpg'
  },
  // Add more sample products as needed
];


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="app"> 
      <ProductList products={sampleProducts} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
