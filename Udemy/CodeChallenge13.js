const convertNames = function (names) {
  const [first, second] = names.toLowerCase().trim().split("_");

  const upperCase = [first];

  for (const n of second) {
    upperCase.push(n.replace(second[0], second[0].toUpperCase()));
  }

  const camelCase = upperCase.join("");
  return camelCase;
};

console.log(convertNames("underscore_case"));
console.log(convertNames("Some_VariaBLe"));
console.log(convertNames("delayed_Departure"));
