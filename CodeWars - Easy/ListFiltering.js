// function filter_list(numArr) {
//     return numArr.filter(callbackFunc)
// }

// function callbackFunc(arrItem) {
//    // 1. it is a number
//    // 2. is is positive

//     if (arrItem >= 0 && typeof arrItem === 'number') {
//         return true
//     } else {
//         return false
//     }
// }


// refactored
function filter_list(numArr) {
    return numArr.filter(arrItem => arrItem >= 0 && typeof arrItem === 'number')
}

console.log(filter_list([1, 2, 'a', 'b']))