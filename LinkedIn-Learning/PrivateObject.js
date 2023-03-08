// (username, password, age)

// username & password = private methods

// password nor username can be called:
// username =/ user.username
// password =/ user.password

const username = Symbol("username")
const password = Symbol("password")

const user = {
    [username]: "annaqhh",
    [password]: "123456",
    age: 24
};

console.log(user.username)
console.log(user.password)

// return undefined for [username] and [password] ==> [symbol]