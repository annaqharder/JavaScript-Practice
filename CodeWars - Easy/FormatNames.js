function list(names) {
    let finalString = '';

    if (names.length === 1) {
        return names[0].name
    }

    names.forEach((arrItem, arrIndex) => {
        const name = arrItem.name;

        if (arrIndex === names.length - 1) {
            finalString = finalString + ' & ' + name
        } else if (arrIndex === names.length - 2) {
            finalString = finalString + name
        } else {
            finalString = finalString + name + ', '
        }
    })

    return finalString
}

console.log(list([{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}]))
console.log(list([{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}, {name: "Homer"}]))