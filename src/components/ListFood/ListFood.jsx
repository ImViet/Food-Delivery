import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./ListFood.css";
import FoodItem from "../FoodItem/FoodItem";
const ListFood = (props) => {
  const { food_list } = useContext(StoreContext);
  const { category } = props;
  return (
    <div className="food-container" id="food-container">
      <h2>Top dishes near you</h2>
      <div className="food-container-list">
        {food_list &&
          food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return <FoodItem key={index} food={item} />;
            }
          })}
      </div>
    </div>
  );
};

export default ListFood;
