const countChars = (str, char) =>
    str.split('').filter(character => character === char).length;

    const contains2To4 = (str, char) =>
        countChars(str, char) >= 2 && countChars(str, char) <= 4;


console.log(contains2To4("oh!", "o"))
console.log(contains2To4("ooh!", "o"))
console.log(contains2To4("oooh!", "o"))
console.log(contains2To4("ooooh!", "o"))
console.log(contains2To4("oooooh!", "o"))