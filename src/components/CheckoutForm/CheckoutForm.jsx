import React, { useState } from "react";
import "./CheckoutForm.css";

const ITEM_PRICE = 99.99;
const TAX_RATE = 0.08;

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [cardType, setCardType] = useState("");

  const detectCardType = (number) => {
    // Remove all non-digit characters
    const cleaned = number.replace(/\D/g, "");

    // Card detection patterns
    const patterns = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };

    for (const [card, pattern] of Object.entries(patterns)) {
      if (pattern.test(cleaned)) {
        return card;
      }
    }
    return "";
  };

  const maskCardNumber = (number) => {
    const cleaned = number.replace(/\D/g, "");
    const last4 = cleaned.slice(-4);
    return cleaned.length > 4 ? `•••• •••• •••• ${last4}` : cleaned;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const cleaned = value.replace(/\D/g, "");
      const cardType = detectCardType(cleaned);
      setCardType(cardType);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    const tax = ITEM_PRICE * TAX_RATE;
    const total = ITEM_PRICE + tax;
    return { subtotal: ITEM_PRICE, tax, total };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Form submitted:", formData);
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="price-summary">
        <div className="price-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="price-row">
          <span>Tax (8%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="price-row total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Card Number{" "}
            {cardType && <span className="card-type">({cardType})</span>}
          </label>
          <input
            type="text"
            name="cardNumber"
            value={maskCardNumber(formData.cardNumber)}
            onChange={handleInputChange}
            maxLength="19"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              maxLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength="4"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
