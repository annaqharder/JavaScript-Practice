// function makeNegative(num) {
//     if (num < 0) {
//         return num
//     } else {
//         return num * -1
//     }
// }

// ternary method
    // function makeNegative(num) {
    //     return num < 0 ? num : -num
    // }

// .math method
    function makeNegative(num) {
        return -Math.abs(num)
    }

console.log(makeNegative(42))
console.log(makeNegative(-19))