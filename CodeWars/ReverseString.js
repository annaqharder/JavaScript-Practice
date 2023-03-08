// cannot reverse a string directly... must convert it into an array, reverse, and then make back into string

function solution(str) {
    return str.split("").reverse().join("")
}

console.log(solution("hello"))