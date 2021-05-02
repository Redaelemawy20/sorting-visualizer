import React, { useEffect, useState } from "react";
import Form from "./Form";
import Type from "./Type";
import ArrayContainer from "./ArrayContainer";
import { getMergeSortAnimations } from "../utils/mergeSort";
import bubble from "../utils/bubbleSort";
import insertion from "../utils/insertionSort";
import selection from "../utils/selectionSort";
import Speed from "./Speed";
import Color from "./Color";

import { FaBars, FaWindowClose } from "react-icons/fa";
const Main = () => {
  const [theArray, setTheArray] = useState([]);
  const [arrayValues, setArrayValues] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [length, setLength] = useState(0);
  const [sortType, setSortType] = useState("Merge");
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
  const excuteAnimations = () => {
    const state = document.getElementById("state");
    setTimeout(() => {
      setIsRunning(false);
      state.innerHTML = "";
    }, animations.length * speed);

    for (let i = 0; i < animations.length; i++) {
      const { first, bigger, swap, shift } = animations[i];
      let items = document.getElementsByClassName("array-item");

      let styleOne = items[first].style;
      if (!bigger) {
        const { second } = animations[i];

        let styleTwo = items[second].style;
        setTimeout(() => {
          if (swap) {
            const temp = styleOne.height;

            styleOne.height = styleTwo.height;
            styleTwo.height = temp;
            state.innerHTML = `swap element ${first + 1} with ${second + 1}`;
          } else if (shift) {
            styleOne.height = styleTwo.height;
            styleTwo.height = "0";
            state.innerHTML = `shift element ${first + 1} to  ${second + 1}`;
          } else {
            if (styleOne.backgroundColor === "red") {
              state.innerHTML = "revert colored bar";
              styleOne.backgroundColor = colors;

              styleTwo.backgroundColor = colors;
            } else {
              state.innerHTML = "compare colored bars";

              styleOne.backgroundColor = "red";

              styleTwo.backgroundColor = "red";
            }
          }
        }, i * speed);
      } else {
        setTimeout(() => {
          state.innerHTML = "override";
          styleOne.height = bigger + "px";
        }, i * speed);
      }
    }
    state.innerHTML = "end";
  };

  useEffect(() => {
    excuteAnimations();
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
        <div className="side-bar">
          <FaWindowClose onClick={closeSideBar} size={70} />
          <div className="container">
            <div>
              <span>Select Speed</span>
              <Speed
                onChange={handleSpeedChange}
                isRunning={isRunning}
                speed={speed}
              />
            </div>
            <div>
              <span>Select Colors</span>
              <Color
                onChange={handleColorChange}
                isRunning={isRunning}
                color={colors}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="header">
        <span className="nav-toggle">
          <FaBars
            size={70}
            onClick={() => {
              setSideBarOpened(true);
            }}
          />
        </span>

        <Form
          length={length}
          onSubmit={generateRandomArray}
          isRunning={isRunning}
        />

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
