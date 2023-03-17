// my versin - yay!
    // function maxNumber(num) {
    //     // number to string
    //     const numToString= num.toString();

    //     // string to array
    //     const stringToArr = numToString.split('');

    //     // sort array from smallest to largest value
    //     const sortDescending = stringToArr.sort();

    //     // sort from ascending value
    //     const sortAscending = sortDescending.reverse();

    //     // array to string
    //     const arrToString = sortAscending.join('');

    //     // string to number
    //     const strToNum = Number(arrToString);

    //     return strToNum
    // }


// condensed version
    // function maxNumber(num) {
    //     return Number(num.toString().split('').sort((first, second) => second - first).join(''))
    // }


console.log(maxNumber(213))
console.log(maxNumber(7389))
console.log(maxNumber(566797))