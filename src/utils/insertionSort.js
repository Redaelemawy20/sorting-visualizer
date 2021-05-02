export default (array) => {
  return impelemntInsertion(array);
};

const impelemntInsertion = (array) => {
  let animations = [];
  let n = array.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = array[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      animations.push({ first: i, second: j });
      animations.push({ first: i, second: j });

      array[j + 1] = array[j];
      animations.push({ first: j + 1, second: j, shift: true });
      j--;
    }
    animations.push({ first: j + 1, bigger: current });
    array[j + 1] = current;
  }
  return animations;
};
