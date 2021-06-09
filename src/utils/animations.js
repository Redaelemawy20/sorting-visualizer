export default (animations, speed, colors) => {
  const state = document.getElementById("state");

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
