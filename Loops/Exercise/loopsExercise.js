// for (let i = 5; i < 11; i++) {
//   console.log(i);
// }

// // The loop below from 3 to 0
// for (let counter = 3; counter >= 0; counter--) {
//   console.log(counter);
// }

// const vacationSpots = ["Bali", "Paris", "Tulum"];

// // Write your code below
// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }

// // Write your code below
// const bobsFollowers = ["Nick", "Stan", "Plamen", "Bogomil"];
// const tinasFollowers = ["Sarah", "Nick", "Stan"];

// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }
// console.log(mutualFollowers);

// const cards = ["diamond", "spade", "heart", "club"];

// // Write your code below
// let currentCard = "";

// while (currentCard !== "spade") {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }

const firstMessage = "I will print!";
const secondMessage = "I will not print!";

// A do while with a stopping condition that evaluates to false
do {
  console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
  console.log(secondMessage);
}

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cup was added");
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");
