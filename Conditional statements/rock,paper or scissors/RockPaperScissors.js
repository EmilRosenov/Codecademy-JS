// let player = prompt("Player, Choose between Rock,  Scissors or Paper");
// let computer = prompt("Computer, Choose between Rock,  Scissors or Paper");

// let userInput = ["Rock", "Scissors", "Paper"];

// const getUserChoice = function (userInput) {
//   let index = Math.floor(Math.random() * 3);
//   return userInput[index].toLowerCase();
// };

// const player = getUserChoice(userInput);
// const computer = getUserChoice(userInput);

// console.log(player);
// console.log(computer);

// if (
//   (player === "scissors" && computer === "scissors") ||
//   (player === "rock" && computer === "rock") ||
//   (player === "paper" && computer === "paper")
// ) {
//   return console.log("It is a draw!");
// } else if (player === "rock" && computer === "scissors") {
//   return console.log("Player wins!");
// } else if (player === "scissors" && computer === "paper") {
//   return console.log("Player wins!");
// } else if (player === "paper" && computer === "rock") {
//   return console.log("Player wins!");
// } else if (computer === "rock" && player === "scissors") {
//   console.log("Computer wins!");
// } else if (computer === "scissors" && player === "paper") {
//   console.log("Computer wins!");
// } else if (computer === "paper" && player === "rock") {
//   console.log("Computer wins!");
// }

const game = ["Rock", "Scissors", "Paper"];

const getUserChoice = (userInput) => {
  if (
    userInput.toLowerCase() !== "rock" &&
    userInput.toLowerCase() !== "scissors" &&
    userInput.toLowerCase() !== "paper"
  ) {
    return console.log("Invalid input!");
  }
  return userInput.toLowerCase();
};
let player = getUserChoice("Paper");
//let player = prompt("Please, choose Rock, Scissors or Paper").toLowerCase();

//if (userChoice === "Invalid input") return;

let random = Math.floor(Math.random() * 3);
const getComputerChoice = (number) => game[number].toLowerCase();

let computer = getComputerChoice(random);

const outcome = function (player, computer) {
  if (
    (player === "scissors" && computer === "scissors") ||
    (player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper")
  ) {
    return console.log("It is a draw!");
  } else if (player === "rock" && computer === "scissors") {
    return console.log("Player wins!");
  } else if (player === "scissors" && computer === "paper") {
    return console.log("Player wins!");
  } else if (player === "paper" && computer === "rock") {
    return console.log("Player wins!");
  } else if (computer === "rock" && player === "scissors") {
    return console.log("Computer wins!");
  } else if (computer === "scissors" && player === "paper") {
    return console.log("Computer wins!");
  } else if (computer === "paper" && player === "rock") {
    return console.log("Computer wins!");
  }
};

console.log(player);
console.log(computer);
outcome(player, computer);
