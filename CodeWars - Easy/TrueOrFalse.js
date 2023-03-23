// [1, 2, 3, 4, 5], (x) => x > 3

const isEveryElement = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true
}

console.log(isEveryElement([1, 2, 3, 4, 5], (x) => x > 0))
console.log(isEveryElement([1, 2, 3, 4, 5], (x) => x > 3))

