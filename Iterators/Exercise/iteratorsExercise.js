// * 1) Functions as Data
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//   for (let i = 1; i <= 1000000; i++) {
//     if (2 + 2 != 4) {
//       console.log("Something has gone very wrong :( ");
//     }
//   }
// };

// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// isTwoPlusTwo();
// console.log(isTwoPlusTwo.name);

// * 2) Functions as Parameters

// const higherOrderFunc = (param) => {
//   param();
//   return `I just invoked ${param.name} as a callback function!`;
// };

// const anotherFunc = () => {
//   return "I'm being invoked by the higher-order function!";
// };

// higherOrderFunc(anotherFunc);
// console.log(higherOrderFunc(anotherFunc));

// higherOrderFunc(() => {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// });

// Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!

// const addTwo = (num) => {
//   return num + 2;
// };

// To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:

// checkA stores the sum val plus 2.
// checkB stores the invocation of the func callback, with val as the argument.

// Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.

// const checkConsistentOutput = (func, val) => {
//   let checkA = val + 2;
//   let checkB = func(val);

//   if (checkA === checkB) {
//     return func(val);
//   } else {
//     return console.log("inconsistent results");
//   }
// };

// console.log(checkConsistentOutput(addTwo, 6));

/// Introduction to Iterators

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

//=======================================

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach((x) => console.log(`I want to eat a ${x}`));

//===========================================
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below

const secretMessage = animals.map((animal) => {
  return animal[0];
});
console.log(secretMessage);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map((bigNumber) => {
  return bigNumber / 100;
});
console.log(smallNumbers);

//the .filter() Method

const words = ["chairs", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});

console.log(words);
console.log(shortWords);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers2 = randomNumbers.filter((x) => {
  return x < 250;
});
console.log(smallNumbers2);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const longFavoriteWords = favoriteWords.filter((x) => x.length > 7);
console.log(longFavoriteWords);

// The .findIndex() Method

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

console.log(lessThanTen); //returns the index of the first element that evaluates to true in the callback function.
console.log(jumbledNums[lessThanTen]);

const greaterThan1000 = jumbledNums.findIndex((num) => {
  return num > 1000; //[123, 25, 78, 5, 9];
});

console.log(greaterThan1000); // Output: -1

const animals2 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals2.findIndex((x) => x === "elephant");

const startsWithS = animals2.findIndex((x) => x[0] === "s");

//The .reduce() Method

const numbers2 = [1, 2, 4, 10];

const summedNums = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums); // Output: 17

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator: ', ${accumulator}`);
  console.log(`The value of currentValue: ${currentValue}`);
  return accumulator + currentValue;
});

const newNewSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newNewSum);

const words2 = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words2.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array

const interestingWords = words2.filter((word) => word.length > 5);
console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => word.length > 5));

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.find((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array

const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value

const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array

const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums);

// Choose a method that will return a boolean value

nums.every((num) => num < 0);

const nums3 = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initializer);

console.log(addItUp);
