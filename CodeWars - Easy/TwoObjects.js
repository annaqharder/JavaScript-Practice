const objA = {a: 1, b: 4, c: 1};
const objB = {a: 1, b: 1, c: 1};
const objC = {a: 1, b: 1, c: 1};

function twoObjects(a, b) {
    return Object.entries(a).toString() === Object.entries(b).toString()
}

// const twoObjects = (obj1, obj2) => {
//     for (let key in obj1) {
//         if (!(key in obj2)) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(twoObjects(objA, objB))
console.log(twoObjects(objA, objC))
console.log(twoObjects(objB, objC))