function plusOne(digits) {
    for (let i = digits.length -1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1);
    return digits
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))

// time complexity = O(N)
// space complexity = O(1)