// function addNew(str) {
//     if (str.indexOf('New!') === 0) {
//         return str
//     } else {
//         return `New! ${str}`
//     }
// }

function addNew(str) {
    return str.indexOf('New!') === 0 ? str : `New! ${str}`
}

console.log(addNew("New! Job!"))
console.log(addNew("Baby!"))