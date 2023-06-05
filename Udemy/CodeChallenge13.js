const convertNames = function (names) {
  const arr = names.split("_");

  const upperCase = [];

  for (const n of arr) {
    upperCase.push(n[0].toUpperCase() + n.slice(1));
  }

  const camelCase = upperCase.join("");
  return camelCase;
};

console.log(convertNames("underscore_case"));
console.log(convertNames("Some_Variable"));
console.log(convertNames("delayed_Departure"));
