import React, { useEffect, useState } from "react";
import Form from "./Form";
import Type from "./Type";
import ArrayContainer from "./ArrayContainer";
import { getMergeSortAnimations } from "../utils/mergeSort";
import bubble from "../utils/bubbleSort";
import insertion from "../utils/insertionSort";
import selection from "../utils/selectionSort";
import excuteAnimations from "../utils/animations";
import Speed from "./Speed";
import Color from "./Color";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
const Main = () => {
  const [theArray, setTheArray] = useState([]);
  const [arrayValues, setArrayValues] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [length, setLength] = useState(0);
  const [sortType, setSortType] = useState("Bubble");
  const [speed, setSpeed] = useState(500);
  const [colors, setColores] = useState("#2C696D");
  const [isRunning, setIsRunning] = useState(false);
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const generateRandomArray = (length) => {
    setLength(length);
    let array = [];
    let arrayValues = [];
    for (let i = 0; i < length; i++) {
      let value = Math.floor(Math.random() * 500 + 5);
      array.push({ height: value, color: colors });
      arrayValues.push(value);
    }
    setArrayValues(arrayValues);
    setTheArray(array);
  };

  const handleSortTypeSelection = (event) => {
    setSortType(event.target.value);
  };
  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };
  const handleColorChange = (e) => {
    setColores(e.target.value);
  };
  const closeSideBar = () => {
    setSideBarOpened(false);
  };
  const sort = () => {
    setIsRunning(true);
    if (sortType === "Merge") mergeSort();
    if (sortType === "Bubble") bubbleSort();
    if (sortType === "Insertion") insertionSort();
    if (sortType === "Selection") selectionSort();
  };
  const selectionSort = () => {
    setAnimations(selection(arrayValues));
  };
  const insertionSort = () => {
    setAnimations(insertion(arrayValues));
  };
  const bubbleSort = () => {
    setAnimations(bubble(arrayValues));
  };
  const mergeSort = () => {
    setAnimations(getMergeSortAnimations(arrayValues));
  };
  const startAnimations = () => {
    const state = document.getElementById("state");
    setTimeout(() => {
      setIsRunning(false);
      state.innerHTML = "";
    }, animations.length * speed);
    excuteAnimations(animations, speed, colors);
  };

  useEffect(() => {
    startAnimations();
  }, [animations]);
  useEffect(() => {
    let arrayItems = document.getElementsByClassName("array-item");

    for (let i = 0; i < arrayItems.length; i++)
      // console.log(colors);
      arrayItems[i].style.backgroundColor = colors;
  }, [colors]);
  return (
    <React.Fragment>
      {sideBarOpened ? (
        <SideBar
          onClose={closeSideBar}
          onTypeChange={handleSortTypeSelection}
          onColorChange={handleColorChange}
          onSpeedChange={handleSpeedChange}
          isRunning={isRunning}
          sortType={sortType}
          speed={speed}
          colors={colors}
        />
      ) : (
        ""
      )}
      <div className="header">
        <Form
          length={length}
          onSubmit={generateRandomArray}
          isRunning={isRunning}
        />
        <div className="configration">
          <Type
            onChange={handleSortTypeSelection}
            isRunning={isRunning}
            type={sortType}
          />
          <Speed
            onChange={handleSpeedChange}
            isRunning={isRunning}
            speed={speed}
          />
          <Color
            onChange={handleColorChange}
            isRunning={isRunning}
            color={colors}
          />
        </div>
        <span className="nav-toggle">
          <FaBars
            size={45}
            onClick={() => {
              setSideBarOpened(true);
            }}
          />
        </span>
      </div>

      <button className="sort" onClick={sort} disabled={isRunning}>
        {isRunning ? "disabled" : "Sort"}
      </button>
      <div className="state-container">
        <h2 id="state"></h2>
      </div>
      <ArrayContainer array={theArray} />
    </React.Fragment>
  );
};

export default Main;
