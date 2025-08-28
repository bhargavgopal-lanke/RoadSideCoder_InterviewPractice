import React, { useState } from "react";

const StarRating = ({ size = 5, rating, onChange = () => {} }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const handleMouseHover = (starValue) => {
    setHoverRating(starValue);
  };
  return (
    <div>
      {Array(size)
        .fill("")
        .map((_, index) => {
          let starClass = "star";
          const starValue = index + 1;
          if (hoverRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }

          return (
            <span
              key={index}
              className={starClass}
              onClick={() => onChange(starValue)}
              onMouseEnter={() => handleMouseHover(starValue)}
              onMouseLeave={() => handleMouseHover(0)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
