const recursiveBinarySearch = function (arr, target) {
  return search(arr, target, 0, arr.length - 1);
};

const search = function (arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  // defining middle index
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < leftIndex) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch([-5, -3, -1, 1, 4, 6, 8, 10], 10));
