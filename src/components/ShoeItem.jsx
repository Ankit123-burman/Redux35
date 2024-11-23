// src/components/ShoeItem.js
import React from "react";

function ShoeItem({ shoe, addToCart }) {
  return (
    <div className="shoe-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-3 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800">{shoe.name}</h3>
      <p className="text-gray-600">Price: ${shoe.price}</p>
      <button
        className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ShoeItem;
