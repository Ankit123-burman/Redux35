// src/components/Cart.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateItemQuantity } from "../Features/CartSlice";

function Cart({ goToPaymentPage }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const incrementQuantity = (id, quantity) => {
    if (quantity < 10) {
      dispatch(updateItemQuantity({ id, quantity: quantity + 1 }));
    }
  };

  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="cart p-6 bg-white shadow-md rounded-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">The cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4 space-y-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <div className="flex flex-col text-gray-700">
                  <span>{item.name} - ${item.price}</span>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="text-gray-600 bg-gray-200 px-2 rounded hover:bg-gray-300"
                      onClick={() => decrementQuantity(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      className="text-gray-600 bg-gray-200 px-2 rounded hover:bg-gray-300"
                      onClick={() => incrementQuantity(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Total: ${calculateTotal()}
          </h3>
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
            onClick={goToPaymentPage}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
