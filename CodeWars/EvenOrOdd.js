// modulus operator, aka remainder (%)

function even_or_odd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(even_or_odd(7))
console.log(even_or_odd(8))