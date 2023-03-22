const closestTo100 = (num1, num2) => {
    return (100 - num1) < (100 - num2) ? num1 : num2
}

console.log(closestTo100(90, 70))
console.log(closestTo100(45, 80))