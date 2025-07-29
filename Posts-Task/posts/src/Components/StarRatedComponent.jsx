import React, { useState } from "react";
import StarRating from "./StarRating";

const StarRatedComponent = () => {
  const [currentRating, setCurrentRating] = useState(3);

  const HandleChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div>
      <h2>Star Rating</h2>
      <StarRating size={5} rating={currentRating} onChange={HandleChange} />
      <p>Current Rating: {currentRating}</p>
    </div>
  );
};

export default StarRatedComponent;
