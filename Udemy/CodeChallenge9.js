arr1 = [17, 21, 23];
arr2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    currTemp = arr[i];
    currDay = arr.indexOf(currTemp) + 1;
  }
  return `${currTemp}°C in ${currDay} days...`;
};

const thermometer = printForcast(arr1);
console.log(thermometer);

// 1) understanding the problem
// - insert temperatures & associated days into string
// - how to get index of associated temperature --> arr.indexOf(currTemp)

// 2) breaking up into sub-problems
// - loop over array
// - increase day count
// - return string: "temp degrees C in X days..."
