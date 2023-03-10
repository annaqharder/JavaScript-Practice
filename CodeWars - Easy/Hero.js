function hero(bullets, dragons) {
    return bullets / dragons >= 2 ? true : false
}

console.log(hero(8, 4))
console.log(hero(6, 4))