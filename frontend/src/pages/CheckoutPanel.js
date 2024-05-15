import React, { useState } from 'react';
import './chekoutpenel.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function CheckoutPanel() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [verification, setVerification] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'cardholder':
        setCardholder(value);
        break;
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'expiryDate':
        setExpiryDate(value);
        break;
      case 'verification':
        setVerification(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission/validation logic here
  };

  return (
    <div className="checkout-panel">
      <div className="panel-body">
        <h2 className="title">Checkout</h2>
        {/* Progress bar */}
        <div className="progress-bar">
          {/* Steps */}
        </div>
        {/* Payment methods */}
        <div className="payment-method">
          {/* Radio buttons for payment methods */}
        </div>
        {/* Input fields */}
        <form onSubmit={handleSubmit} className="input-fields">
          {/* Cardholder's Name */}
          <div className="column-1">
            <label htmlFor="cardholder">Cardholder's Name</label>
            <input
              type="text"
              id="cardholder"
              name="cardholder"
              value={cardholder}
              onChange={handleInputChange}
            />
            {/* Expiry Date & Verification */}
            <div className="small-inputs">
              {/* Expiry Date */}
              <div>
                <label htmlFor="expiryDate">Valid thru</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              {/* Verification */}
              <div>
                <label htmlFor="verification">CVV / CVC *</label>
                <input
                  type="password"
                  id="verification"
                  name="verification"
                  value={verification}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* Card Number */}
          <div className="column-2">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="password"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleInputChange}
            />
            {/* Info */}
            <span className="info">
              * CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.
            </span>
          </div>
        </form>
      </div>
      {/* Panel Footer */}
      <div className="panel-footer">
        <button className="btn back-btn">Back <Link to="/Conform">Back</Link></button>
        <button type="submit" form="checkoutForm" className="btn next-btn">Next Step</button>
      </div>
    </div>
  );
}

export default CheckoutPanel;
