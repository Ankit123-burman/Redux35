// src/components/ShoeList.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Features/CartSlice";
import shoes from "../data/shoes";
import ShoeItem from "./ShoeItem";

function ShoeList() {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {shoes.map((shoe) => (
      <div
        key={shoe.id}
        className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
      >
        <img src={shoe.image} alt={shoe.name} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{shoe.name}</h2>
          <p className="text-gray-700">Price: ${shoe.price}</p>
          <button
            onClick={() => dispatch(addItemToCart(shoe))}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
);
}

export default ShoeList;
