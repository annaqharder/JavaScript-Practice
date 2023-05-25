const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function() {
        this.BMI = (this.mass)/(this.height ** 2)
        return this.BMI
    }
};

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        this.BMI = (this.mass)/(this.height ** 2)
        return this.BMI
    }
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if(john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`)
}
