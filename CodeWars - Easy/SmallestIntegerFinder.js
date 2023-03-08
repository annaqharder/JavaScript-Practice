class SmallestIntegerFinder {
    findSmallestInt(arrayOfNums) {
        let smallestNumber;

        for (let i = 0; i < arrayOfNums.length; i++) {

            const arrNumber = arrayOfNums[i]

            if (i === 0) {
                smallestNumber = arrNumber;
            }

            if (smallestNumber > arrNumber) {
                smallestNumber = arrNumber
            }
        }

        return smallestNumber
    }
}

const arr1 = new SmallestIntegerFinder();

console.log(arr1.findSmallestInt([4, 55, 678, -90]))