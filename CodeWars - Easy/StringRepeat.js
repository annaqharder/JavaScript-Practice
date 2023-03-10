// function repeatStr(numberOfRepeats, str) {
//     let starterString = '';

//     for (let i = 0; i < numberOfRepeats; i++) {
//         starterString = starterString + str;
//     }
//     return starterString
// }

function repeatStr(n, s) {
    return s.repeat(n)
}

console.log(repeatStr(5, "ha"))