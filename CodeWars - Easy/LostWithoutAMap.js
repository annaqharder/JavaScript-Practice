function map(array){
    const result = array.map((arrItem) => {
        return arrItem * 2;
    });
    return result
}

console.log(map([6, 8, 9, -23]))