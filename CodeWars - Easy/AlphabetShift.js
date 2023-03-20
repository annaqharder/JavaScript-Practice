// function doesn't work when getting to the end of the alphabet

function letterShift(str){
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
}

console.log(letterShift('z'))



// function letterShift(str) {
//     const array = str.split('');

//     if (array === 'z') {
//         return 'a'
//     } else {
//         return array.map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
//     }
// }

// console.log(letterShift('z'))