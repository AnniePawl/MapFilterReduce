import React from "react";
import ".Button.css";

const Button = ({ onClick, cat }) => {
  return (
    <button className="CategoryButton"
      onClick={(e) => onClick(cat)
      }>
      {cat}
    </button >
  );
};

export default Button;
