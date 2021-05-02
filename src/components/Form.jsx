import React, { useState } from "react";
const Form = ({ onSubmit, length, isRunning }) => {
  const [value, setValue] = useState(length);
  return (
    <form
      className="form form-container input-group"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Enter array length"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={isRunning}
      />
      <button type="submit" className="btn btn--accent" disabled={isRunning}>
        generate anthor array
      </button>
    </form>
  );
};

export default Form;
