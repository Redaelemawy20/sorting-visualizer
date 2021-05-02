import React from "react";
const Color = ({ color, isRunning, onChange }) => {
  return (
    <input
      className="selection--color"
      type="color"
      value={color}
      onChange={onChange}
      disabled={isRunning}
    />
  );
};

export default Color;
