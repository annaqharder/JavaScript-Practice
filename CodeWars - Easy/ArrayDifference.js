function arrayDiff(a, b) {
    if (a.length === 0) {
        return []
    }

    if (b.length === 0) {
        return a
    }

    let newA = null;
    let newB = null;

    a.forEach((arrItem, arrIndex) => {

        const aCopy = a.slice();
        const bCopy = a.slice();

        if (b.includes(arrIndex)) {
            newA = aCopy.filter(item => item !== arrItem)
            newB = bCopy.filter(item => item !== arrItem)
        }
    });

    return newA
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
console.log(arrayDiff([3, 5, 6, 6, 5, 2], [3, 6]))