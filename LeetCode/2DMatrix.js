// var searchMatrix = function(matrix, target) {

//     if (!matrix.length) {
//         return false
//     }
//     let i = 0;
//     let j = matrix[0].length - 1;

//     while(i < matrix.length && j >= 0) {
//         if (matrix[i][j] > target) {
//             j--
//         } else if (matrix[i][j] < target) {
//             i++
//         } else {
//             return true
//         }
//     }
//     return false
// }

// console.log(searchMatrix([[1,3,5,7], [10,11,16,20], [23, 30, 34, 60]], 3))

var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let columns = matrix[0].length;

    let left = 0;
    let right = rows * columns - 1

    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        let midVal = matrix[Math.floor(mid/columns)][mid%columns];

        if(midVal === target) return true;
        if(target < midVal) right = mid - 1;
        else left = mid + 1;
    }
    return false
}

console.log(searchMatrix([[1,3,5,7], [10,11,16,20], [23, 30, 34, 60]], 4))