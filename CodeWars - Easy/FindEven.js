// function findEven(arr) {

//     const evenNumbers = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i])
//         }
//     }

//     return evenNumbers
// }


function findEven(arr) {
    return arr.filter((arr) => arr % 2 === 0)
}

console.log(findEven([1, 2, 3, 4, 5, 6]))

