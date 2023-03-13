function FirstNonConsecutive(array) {
    for(let i = 0; i < array.length; i++) {
        const curr = array[i];
        const next = array[i + 1]

        if (curr + 1 !== next) {
            return next
        } 
    }

    return null
}

console.log(FirstNonConsecutive([1,2,3,4,6,7,8]))
console.log(FirstNonConsecutive([1,2,3,4,5,6,7,8]))
