// function getCount(str) {
//     let vowelsCount = 0;

//     const arr = str.split("");

//     for (i = 0; i < arr.length; i++) {
//         switch(arr[i]) {
//             case 'a':
//                 vowelsCount++;
//                 break;
//             case 'e':
//                 vowelsCount++;
//                 break;
//             case 'i':
//                 vowelsCount++;
//                 break;
//             case 'o':
//                 vowelsCount++;
//                 break;
//             case 'u':
//                 vowelsCount++;
//         }
//     }
//     return vowelsCount
// }


// string to array + .includes method
function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split("").filter(letter => {
        return vowels.includes(letter) ? true : false
    }).length
}

console.log(getCount("rainbow"))