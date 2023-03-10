function basicOp(operation, value1, value2) {

    let result;

    switch (operation) {
        case '+' :
            result = value1 + value2;
            break;
        case '-' :
            result = value1 - value2;
            break;
        case '*' :
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
    }
    return result
}

console.log(basicOp('+', 6, 7))
console.log(basicOp('-', 6, 7))
console.log(basicOp('*', 6, 7))
console.log(basicOp('/', 6, 7))