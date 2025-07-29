import React from "react";

const StarRating = ({ size = 5, rating, onChange }) => {
  const starClass = "star";
  return (
    <div>
      <div>
        {Array(size)
          .fill("")
          .map((_, i) => {
            return (
              <span key={i} className={starClass}>
                ⭐
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default StarRating;
