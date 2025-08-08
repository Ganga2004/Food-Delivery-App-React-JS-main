import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, searchQuery }) => {
  const { food_list } = useContext(StoreContext);

  // Step 1: Filter by category
  let filteredList = food_list.filter((item) => {
    return category === "All" || item.category === category;
  });

  // Step 2: Further filter by search query if it's not empty
  if (searchQuery) {
    filteredList = filteredList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-results">No food items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
