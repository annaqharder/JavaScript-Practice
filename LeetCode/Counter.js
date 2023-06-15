var createCounter = function (n) {
  let i = 0;
  return function () {
    i++;
    return n + i;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
