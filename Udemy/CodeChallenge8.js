const bills = [22, 295, 176, 440, 37, 105, 10, 1110, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
};

for(i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(tips);
console.log(totals);

