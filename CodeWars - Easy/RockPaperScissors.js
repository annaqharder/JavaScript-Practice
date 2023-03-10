
/*
rock - R
paper - P
scissor - S

Player 1    Player 2    Result
R               r           draw
r               p           p2
R               s           p1
P               r           p1
P               p           draw
P               s           p2
S               r           p2
S               p           p1
S               s           draw
*/

// const rockPaperScissors = (player1, player2) => {
//     if (player1 === 'rock') {
//         if(player2 === 'rock') {
//             return 'Draw!'
//         }
//         if (player2 === 'paper'){
//             return 'Player 2 won!'
//         }
//         if (player2 === 'scissors'){
//             return 'Player 1 won!'
//         }
//     }
//     if (player1 === 'paper') {
//         if(player2 === 'rock') {
//             return 'Player 1 won!'
//         }
//         if (player2 === 'paper'){
//             return 'Draw!'
//         }
//         if (player2 === 'scissors'){
//             return 'Player 2 won!'
//         }
//     }
//     if (player1 === 'scissor') {
//         if(player2 === 'rock') {
//             return 'Player 2 won!'
//         }
//         if (player2 === 'paper'){
//             return 'Player 1 won!'
//         }
//         if (player2 === 'scissors'){
//             return 'Draw!'
//         }
//     }
// };

function rockPaperScissors(player1, player2) {
    if (player1 === player2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (player2 === rules[player1]) {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}

console.log(rockPaperScissors('paper', 'scissors'))
console.log(rockPaperScissors('paper', 'paper'))
console.log(rockPaperScissors('rock', 'scissors'))