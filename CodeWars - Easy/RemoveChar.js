// function removeChar(str) {
//     return str.substr(1, str.length - 2)
// }


function removeChar(str) {
    return str.slice(1, -1)
}


console.log(removeChar("welcome"))
