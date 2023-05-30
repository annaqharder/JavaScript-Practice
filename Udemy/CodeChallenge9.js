// 1) understanding the problem
// - insert temperatures & associated days into string
// - how to get index of associated temperature --> arr.indexOf(currTemp)

// 2) breaking up into sub-problems
// - loop over array
// - increase day count
// - return string: "temp degrees C in X days..."

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    currTemp = arr[i];
    currDay = arr.indexOf(currTemp) + 1;
    string = string + `${currTemp}°C in ${currDay} days ... `;
  }
  return string;
};

const thermometer = printForcast(arr1);
console.log(thermometer);

// 1) understand the problem
// - array transformed into string, separated by ...
// - what is X days? answer: index + 1

// 2) break up into sub-problems
// - transform array into string
// - transform wach eleemtn to string with °C
// - string needs to contain day (index + 1)
// - add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast1 = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(str);
};
printForcast1(data1);
