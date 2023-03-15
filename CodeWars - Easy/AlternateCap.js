function capitalize(str) {
    const arr1 = str.split("");
    const arr2 = str.split("");

    arr1.forEach((item, index, original) => {
        if(index % 2 === 0 ) {
            original[index] = item.toUpperCase()
        }
    });

    arr2.forEach((item, index, original) => {
        if(index % 2 !== 0 ) {
            original[index] = item.toUpperCase()
        }
    });

    const arr1Str = arr1.join('')
    const arr2Str = arr2.join('')

    return [arr1Str, arr2Str]
}

console.log(capitalize('abcdef'))