import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = (props) => {
  const { food } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={food.image} alt="" />
        {!cartItems[food._id] ? (
          <img
            onClick={() => addToCart(food._id)}
            className="add"
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(food._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[food._id]}</p>
            <img
              onClick={() => addToCart(food._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{food.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{food.description}</p>
        <p className="food-item-price">${food.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
