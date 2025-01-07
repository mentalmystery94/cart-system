import React, { useEffect } from "react";
import './ConfirmationPage.css';

const ConfirmationPage = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/"; // Redirect to the homepage
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="confirmation-page">
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase! Your order has been placed successfully.</p>
      <p>We appreciate your business and hope you enjoy your items.</p>
    </div>
  );
};

export default ConfirmationPage;
