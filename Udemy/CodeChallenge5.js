const calcAverage = (a, b, c) => (a + b + c) / 3;
const averageScoreDolphins = calcAverage(44, 23, 71);
const averageScoreKoalas = calcAverage(65, 54, 49);

console.log(averageScoreDolphins, averageScoreKoalas)

const checkWinner = function(averageScoreDolphins, averageScoreKoalas){
    if(averageScoreDolphins >= averageScoreKoalas * 2) {
        console.log(`Dolphins win (${averageScoreDolphins} vs. ${averageScoreKoalas})`)
    } else if(averageScoreKoalas >= averageScoreDolphins * 2) {
        console.log(`Koalas win (${averageScoreKoalas} vs. ${averageScoreDolphins})`)
    } else {
        console.log("No winners")
    }
}

checkWinner(averageScoreDolphins, averageScoreKoalas);