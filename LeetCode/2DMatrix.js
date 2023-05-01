var searchMatrix = function(matrix, target) {

    if (!matrix.length) {
        return false
    }
    let i = 0;
    let j = matrix[0].length - 1;

    while(i < matrix.length && j >= 0) {
        if (matrix[i][j] > target) {
            j--
        } else if (matrix[i][j] < target) {
            i++
        } else {
            return true
        }
    }
    return false
}

console.log(searchMatrix([[1,3,5,7], [10,11,16,20], [23, 30, 34, 60]], 3))