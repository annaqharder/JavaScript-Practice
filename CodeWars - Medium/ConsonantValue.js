

function solve(s) {
    return Math.max(...s.replace(/[aeiou]+/g, ' ').trim().split(' ').map(addUpSubstring))
}

function charToValue(character) {
    return character.charCodeAt(0) - 96
}

function addUpSubstring(str) {
    return str.split('').map(charToValue).reduce((acc, item) => acc += item, 0)
}

console.log(solve("catchphrase"))