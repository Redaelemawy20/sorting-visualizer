function divide(mainArray, lowerBound, upperBound, animations) {
  if (lowerBound === upperBound) return;

  let mid = Math.floor((lowerBound + upperBound) / 2);

  divide(mainArray, lowerBound, mid, animations);
  divide(mainArray, mid + 1, upperBound, animations);
  implementSort(mainArray, lowerBound, mid + 1, upperBound, animations);
}

function implementSort(array, lowerBound, mid, upperBound, animations) {
  let workSpace = [];
  let n = upperBound - lowerBound + 1;
  let j = 0;
  let leftBoundIndex = lowerBound;
  let basIndex = lowerBound;
  let rightBoundIndex = mid;
  while (leftBoundIndex <= mid - 1 && rightBoundIndex <= upperBound) {
    animations.push({
      first: leftBoundIndex,
      second: rightBoundIndex,
    });
    animations.push({
      first: leftBoundIndex,
      second: rightBoundIndex,
    });
    if (array[leftBoundIndex] > array[rightBoundIndex]) {
      animations.push({
        first: basIndex,

        bigger: array[rightBoundIndex],
      });
      basIndex++;
      workSpace[j++] = array[rightBoundIndex++];
    } else {
      animations.push({
        first: basIndex,
        bigger: array[leftBoundIndex],
      });
      basIndex++;
      workSpace[j++] = array[leftBoundIndex++];
    }
  }
  while (leftBoundIndex <= mid - 1) {
    animations.push({
      first: j,
      second: j,
    });
    animations.push({
      first: j,
      second: j,
    });
    animations.push({
      first: basIndex,
      second: j,
      bigger: array[leftBoundIndex],
    });
    basIndex++;
    workSpace[j++] = array[leftBoundIndex++];
  }
  while (rightBoundIndex <= upperBound) {
    animations.push({
      first: j,
      second: j,
    });
    animations.push({
      first: j,
      second: j,
    });
    animations.push({
      first: basIndex,
      second: rightBoundIndex,
      bigger: array[rightBoundIndex],
    });
    basIndex++;
    workSpace[j++] = array[rightBoundIndex++];
  }

  for (j = 0; j < n; j++) array[lowerBound + j] = workSpace[j];
}
export function getMergeSortAnimations(array) {
  if (array.length <= 1) return array;
  const animations = [];

  divide(array, 0, array.length - 1, animations);

  return animations;
}
