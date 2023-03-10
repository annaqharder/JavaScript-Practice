// function basicOp(operation, value1, value2) {

//     let result;

//     switch (operation) {
//         case '+' :
//             result = value1 + value2;
//             break;
//         case '-' :
//             result = value1 - value2;
//             break;
//         case '*' :
//             result = value1 * value2;
//             break;
//         case '/':
//             result = value1 / value2;
//             break;
//     }
//     return result
// }

function basicOp(operation, value1, value2){
    const operationStr = value1 + operation + value2;
    return eval(operationStr)
}

console.log(basicOp('+', 6, 7))
console.log(basicOp('-', 6, 7))
console.log(basicOp('*', 6, 7))
console.log(basicOp('/', 6, 7))