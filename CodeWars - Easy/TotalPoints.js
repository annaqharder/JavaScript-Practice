function points(gamesArray) {
    let totalPoints = 0;

    for (let i = 0; i < gamesArray.length; i++) {
        // sample value "3:1"
        const value = gamesArray[i];
        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if (x > y) {
            totalPoints = totalPoints + 3;
        } else if (x === y) {
            totalPoints += 1;
        } else {
            totalPoints += 0
        }
    }
    return totalPoints;
}

console.log(points(["1:0", "2:0", "3:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))