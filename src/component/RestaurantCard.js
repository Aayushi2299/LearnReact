import React from "react";

// Swiggy image base URL
const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla }) => {
  return (
    <div className="w-64 m-4 p-4 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform duration-200">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="font-bold text-lg mt-2">{name}</h3>
      <p className="text-gray-500 text-sm truncate">{cuisines?.join(", ")}</p>
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
          ⭐ {avgRating}
        </span>
        <span>{costForTwo}</span>
        <span>{sla?.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
