function combineStr(str) {
    return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)
}

console.log(combineStr('rainbow'))
console.log(combineStr('abc'))
console.log(combineStr('ab'))

