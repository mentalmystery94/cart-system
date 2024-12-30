// Cart.js
import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h4>{item.title}</h4>
              <p>€{item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: €{totalPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
