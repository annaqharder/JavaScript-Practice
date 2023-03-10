// function getAverage(scoreArray) {
//     const count = scoreArray.length;

//     let sum = 0;

//     for (let i = 0; i < count; i++) {
//         sum = sum + scoreArray[i]
//     }

//     return Math.floor(sum / count)
// }

function getAverage(scoreArray) {
    return Math.floor(scoreArray.reduce((sum, x) => sum + x) / scoreArray.length);
}

console.log(getAverage([78, 90, 98, 97, 65, 88, 97]))