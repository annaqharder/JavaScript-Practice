const objA = {a: 1, b: 4, c: 1};
const objB = {a: 1, b: 1, c: 1};
const objC = {a: 1, b: 1, c: 1};

function twoObjects(a, b) {
    if (Object.keys(a).every(key => b[key])) {
        return true
    } else {
        return false
    }
}

console.log(twoObjects(objA, objB))
console.log(twoObjects(objA, objC))
console.log(twoObjects(objB, objC))