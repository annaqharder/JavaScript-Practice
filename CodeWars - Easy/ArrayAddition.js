function arrayPlusArray(arr1, arr2) {

    let sum = 0
    for (i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];

        const addedValue = arr1Value + arr2Value;

        sum = sum + addedValue

    }
    return sum
}

console.log(arrayPlusArray([2, 4, 6], [-7, 10, 23]))