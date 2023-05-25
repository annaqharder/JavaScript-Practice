const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function() {
        this.BMI = (this.mass)/(this.height)
        return this.BMI
    }
};

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        this.BMI = (this.mass)/(this.height)
        return this.BMI
    }
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if(john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
}
