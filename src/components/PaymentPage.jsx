// src/components/PaymentPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Features/CartSlice";

function PaymentPage({ returnToShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const dispatch = useDispatch();

  const handlePayment = () => {
    alert("Payment Successful!");
    dispatch(clearCart());
    returnToShopping();
  };

  return (
    <div className="payment-page p-6 bg-white shadow-md rounded-lg w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Payment Page</h2>
      <button
        className="mb-4 text-blue-500 hover:text-blue-700 font-semibold underline"
        onClick={returnToShopping}
      >
        Return to Shopping
      </button>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Order Summary</h3>
      <ul className="mb-4 space-y-2">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm"
          >
            <span className="text-gray-700">
              {item.name} - ${item.price} x {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Total Amount: ${totalAmount}
      </h3>
      <div className="space-y-3 mb-6">
        <h4 className="text-md font-semibold text-gray-700">Enter Credit Card Details</h4>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Expiry Date"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}

export default PaymentPage;
