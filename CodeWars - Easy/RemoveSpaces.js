function removeSpaces(str) {
    const arr = str.split("");

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        const trimmedStr = arr[i].trim();
        newArr.push(trimmedStr)
    }
    const finalStr = newArr.join("");
    return finalStr
}

console.log(removeSpaces("Welcome To Denver!"))
