const calcAverage = (a, b, c) => (a + b + c) / 3;
const averageScoreDolphins = calcAverage(85, 54, 41);
const averageScoreKoalas = calcAverage(23, 34, 27);

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