function validatePIN(pin){
    const fourDigitsRegex = /(^[0-9]{4}$)/;
    const sixDigitsRegex = /(^[0-9]{6}$)/;

    const result1 = pin.match(fourDigitsRegex);
    const result2 = pin.match(sixDigitsRegex);

    if (!result1 && !result2) {
        return false
    } else {
        return true
    }
}

console.log(validatePIN('123456'))
console.log(validatePIN('1234'))
console.log(validatePIN('12'))

