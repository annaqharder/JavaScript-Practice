
const massMark = 78;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI)

const firstName = "Jonas";
const job = "teacher";
const birthYear =  1991;
const currentYear = 2037;

const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(jonasNew)

if(BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
};