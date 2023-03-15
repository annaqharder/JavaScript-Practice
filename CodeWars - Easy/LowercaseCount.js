function lowercaseCount(str) {

    return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}

console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz'))
console.log(lowercaseCount('abcABC123'))
console.log(lowercaseCount('ABC123'))
