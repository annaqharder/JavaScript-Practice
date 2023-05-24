const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

if((averageScoreDolphins > averageScoreKoalas) && averageScoreDolphins > 100) {
    console.log("Dolphins are the winners")
} else if ((averageScoreDolphins === averageScoreKoalas) && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log("It's a tie!")
} else if ((averageScoreKoalas > averageScoreDolphins) && averageScoreKoalas > 100){
    console.log("Koalas are the winners!")
} else {
    console.log("No winner :(")
};

