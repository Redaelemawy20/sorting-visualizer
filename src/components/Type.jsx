import React from "react";
const Type = ({ type, onChange, isRunning }) => {
  return (
    <div className="selection--sort">
      <select value={type} onChange={onChange} disabled={isRunning}>
        <option value="Merge">Merge</option>
        <option value="Bubble">Bubble</option>
        <option value="Insertion">Insertion</option>
        <option value="Selection">Selection</option>
      </select>
    </div>
  );
};

export default Type;
