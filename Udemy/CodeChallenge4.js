const bill = 275;

// let tip;
// if(bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
// } else {
//     tip = bill * 0.2
// }

const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`)