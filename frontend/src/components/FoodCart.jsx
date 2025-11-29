import React from "react";
import { FaStar } from "react-icons/fa";

function FoodCard({ data, onClick, onAdd }) {
  return (
    <div
      className="w-[180px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-3"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full h-[120px] overflow-hidden rounded-lg">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover hover:scale-105 transition-all"
        />
      </div>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800 truncate">
        {data.name}
      </h2>

      {/* Rating + Price */}
      <div className="flex items-center justify-between mt-2">
        <span className="flex items-center gap-1 text-sm text-green-600 font-semibold">
          <FaStar className="text-yellow-500" /> {data.rating || "4.2"}
        </span>

        <span className="text-gray-900 font-bold">₹{data.price}</span>
      </div>

      {/* Add button */}
      <button
        className="w-full mt-3 bg-[#ff4d2d] text-white py-1.5 rounded-lg hover:bg-[#e64528] transition-all"
        onClick={(e) => {
          e.stopPropagation(); // prevents card click
          if (onAdd) onAdd(data);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
