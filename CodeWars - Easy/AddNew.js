function addNew(str) {
    if (str.indexOf('New!') === 0) {
        return str
    } else {
        return `New! ${str}`
    }
}

console.log(addNew("New! Job!"))
console.log(addNew("Baby!"))