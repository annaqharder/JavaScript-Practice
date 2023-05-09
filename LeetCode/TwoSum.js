// const twoSum = (array, target) => {
//     for ( let i = 0; i < array.length; i++) {
//          for ( let j= i++; i< array.length; j++) {
//               if ( array[j] === target - array[i]) return [i, j]               
//          };
//     };
//     return null;
// };

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

const arr1 = [3, 4, 5, 6, 7];
const target1 = 8;
// should return, [0,2] > 3 + 5 = 8
const arr2 = [34, 23, 35, 24, 2, 7, 11]
const target2 = 47;
// should return, [1, 3]
const arr3 = [7,7]
const target3 = 14
// should return [0,1]

console.log(arr1, 8)