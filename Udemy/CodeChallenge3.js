const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;

if((averageScoreDolphins > averageScoreKoalas) && averageScoreDolphins > 100) {
    console.log("Dolphins are the winners")
} else if ((averageScoreDolphins === averageScoreKoalas) && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log("It's a tie!")
} else if ((averageScoreKoalas > averageScoreDolphins) && averageScoreKoalas > 100){
    console.log("Koalas are the winners!")
} else {
    console.log("No winner :(")
};

