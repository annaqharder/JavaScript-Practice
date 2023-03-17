// ex: given the number 10 [1, 2, 3, 4, 5, 6, 7, 8, 9] there are four even numbers (2, 4, 6, 8); find # of even numbers

// function numberOfEven(number) {
//     if (number % 2 === 0) {
//         return (number) / 2
//     } else {
//         return (number - 1) / 2
//     }
// }

// console.log(numberOfEven(6))
// console.log(numberOfEven(9))

const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).length

const createArrayOfNumbers = (num) => {
    const returnArr = [];
    for (let i = 1; i <= num; i += 1) {
        returnArr.push(i)
    }
    return returnArr
}

console.log(countEvenNumbers(createArrayOfNumbers(6)))
console.log(countEvenNumbers(createArrayOfNumbers(9)))


