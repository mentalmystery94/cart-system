import React, { useState } from "react";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import ConfirmationPage from "./components/ConfirmationPage";
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

  // Add more sample products as needed
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState('home'); // State to handle page navigation

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  const handleCheckout = () => {
    console.log('Checking out with items:', cartItems);
    setCartItems([]);
    setPage('confirmation'); // Navigate to confirmation page
  };

  const handleNavigation = (targetPage) => {
    setPage(targetPage); // Navigate to the target page
  };

  return (
    <div className="app">
      {page === 'home' && <ProductList products={sampleProducts} addToCart={addToCart} />}
      {page === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      {page === 'checkout' && <Checkout cartItems={cartItems} handleCheckout={handleCheckout} />}
      {page === 'confirmation' && <ConfirmationPage />}
      <nav>
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('cart')}>Cart</button>
        <button onClick={() => handleNavigation('checkout')}>Checkout</button>
      </nav>
    </div>
  );
}

export default App;
