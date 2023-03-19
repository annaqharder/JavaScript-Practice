// function totalSum(num1, num2) {
//     if (num1 === 100 || num2 === 100) {
//         return true
//     } else if (num1 + num2 === 100) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(totalSum(100, 50))
// console.log(totalSum(75, 25))
// console.log(totalSum(150, 50))

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100

console.log(isEqualTo100(100, 50))
console.log(isEqualTo100(75, 25))
console.log(isEqualTo100(150, 50))