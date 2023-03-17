function largestEvenNumber(arr) {
    const evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        }
    }
    return Math.max(...evenArr)
}

console.log(largestEvenNumber([4, 7, 8, 15, 12, 19, 16, 21, 20, 24, 27]))