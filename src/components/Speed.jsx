import React from "react";
const Speed = ({ speed, isRunning, onChange }) => {
  return (
    <div class="range-container">
      <input
        type="range"
        value={speed}
        id="range"
        min="5"
        max="3000"
        onChange={onChange}
        disabled={isRunning}
      />
      <label for="range" id="label">
        {speed / 1000} s
      </label>
    </div>
  );
};

export default Speed;
