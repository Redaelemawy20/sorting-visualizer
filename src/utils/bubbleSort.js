export default (array) => {
  return implementBubble(array);
};

const implementBubble = (array) => {
  let animiations = [];
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      animiations.push({ first: j, second: j + 1 });
      animiations.push({ first: j, second: j + 1 });

      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        animiations.push({ first: j, second: j + 1, swap: true });
      }
    }
  }
  return animiations;
};
