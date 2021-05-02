import React from "react";
const ArrayContainer = ({ array }) => {
  const displayArray = () => {
    return array.map(({ height, color }, index) => {
      return (
        <div
          className="array-item"
          key={index}
          style={{
            height: height,
            backgroundColor: color,
            width: Math.floor(window.innerWidth / array.length) + "px",
          }}
        ></div>
      );
    });
  };
  return <div className="array-container">{displayArray()}</div>;
};

export default ArrayContainer;
