// function isAscending(arr) {
//     for (let i = 0; i < arr.length; i +=1 ) {
//         if (arr[i+1] < arr[i]) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

function isAscending (arr){
    for (let i = 0; i < arr.length; i +=1) {
        if (arr[i+1] < arr[i]) return false
    }
    return true
}

console.log(isAscending([1, 2, 3, 4, 5, 6]))
console.log(isAscending([1, 2, 5, 4, 3, 6]))
console.log(isAscending([1, 2, 3, 4, 6, 6]))
// console.log(isAscending([5, 4, 3, 2, 1]))