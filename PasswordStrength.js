// regular expression (regex)

function checkPassword(password) {
    let oneLowerCaseLetter = /(?=.+[a-z])/;
    let oneUpperCaseLetter = /(?=.+[A-Z])/;
    let oneDigit = /(?=.+[0-9])/;
    let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
    let minimummEightCharacters = /(?=.{8,})/;

    let isValid =
        oneLowerCaseLetter.test(password) &&
        oneUpperCaseLetter.test(password) &&
        oneDigit.test(password) &&
        oneSpecialCharacter.test(password) &&
        minimummEightCharacters.test(password);

        return isValid ? "Your password is valid" : "Your password is invalid"
}

console.log(checkPassword("abc"))
console.log(checkPassword("9Ab!4567"))