import React from "react";

const Checkout = ({ cartItems, handleCheckout }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>€{item.price}</p>
            </div>
          ))}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
