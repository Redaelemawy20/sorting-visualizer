import React from "react";
import Type from "./Type";
import Speed from "./Speed";
import Color from "./Color";
import { FaWindowClose } from "react-icons/fa";
const SideBar = ({
  onClose,
  onSpeedChange,
  onColorChange,
  onTypeChange,
  isRunning,
  sortType,
  speed,
  colors,
}) => {
  return (
    <div className="side-bar">
      <FaWindowClose onClick={onClose} size={70} />
      <div className="container">
        <div>
          <Type onChange={onTypeChange} isRunning={isRunning} type={sortType} />
        </div>
        <div>
          <span>Select Speed</span>
          <Speed onChange={onSpeedChange} isRunning={isRunning} speed={speed} />
        </div>
        <div>
          <span>Select Colors</span>
          <Color
            onChange={onColorChange}
            isRunning={isRunning}
            color={colors}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
