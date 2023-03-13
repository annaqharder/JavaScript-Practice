function partialKeys(obj){
    const newObj = {};

    Object.keys(obj).sort().reverse().forEach(key => {
        const value = obj[key];

        for (let i = 0; i < key.length; i ++){
            const newKey = key.substring(0, i + 1);
            newObj[newKey] = value;
        }
    });

    return newObj;
}

console.log(partialKeys({
    aaa: 1,
    abc: 2,
    dfg: 3,
    def: 4,
    dfgh: 5
}))