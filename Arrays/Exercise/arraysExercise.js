// *1)    Create an Array
const hobbies = ["football", "tennis", "books"];
console.log(hobbies);

// *2)   Accessing Elements
const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// *3)    Update Elements
let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

//*4  Arrays with let and const
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);

utensils[3] = "Spoon";
console.log(utensils);

// *5) The .length property
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length);

// *6) The .push() Method
const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("clean room", "clean bathroom");
console.log(chores);

// *7) The .pop() Method
const chores2 = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop();
console.log(chores2);

// *8) More Array Methods ----learn more about slice

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

// *9) Nested Arrays

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1];
console.log(target);
