import { useState,useEffect } from "react";
const RestaurantCard = (props) => {
  const {name,
    cloudinaryImageId,
    locality,
    areaName,
    cuisines,
    avgRating,
    costForTwo,}=props.resData.info;
  return (
    <div className="card-container">
        <div className="card">
          <img alt="food-image" ></img>
          <p>{name}</p>
          <p>{cuisines}</p>
          <p>{avgRating}</p>
          <p>{costForTwo}</p>
          <p>{areaName}</p>
        </div>
    </div>
  );
}

export default RestaurantCard;