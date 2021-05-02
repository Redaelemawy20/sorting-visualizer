export default (array) => {
  return impelmentSelection(array);
};
const impelmentSelection = (array) => {
  let animiations = [];
  for (var i = 0; i < array.length; i++) {
    let min = i; //  storing the index of minimum element

    for (var j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
      animiations.push({ first: min, second: j });
      animiations.push({ first: min, second: j, message: "minimum is " + min });
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      animiations.push({ first: i, second: min, swap: true });
    }
  }
  return animiations;
};
