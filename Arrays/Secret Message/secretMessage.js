let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "Program");
console.log(secretMessage);

const indexToReplace = secretMessage.indexOf("easily");
console.log(indexToReplace);
secretMessage.splice(indexToReplace, 0, "right");
console.log(secretMessage);
secretMessage.shift();
console.log(secretMessage);
secretMessage.unshift("Programming");
console.log(secretMessage);
let indexOfGet = secretMessage.indexOf("get");
console.log(indexOfGet);
//secretMessage.slice(indexOfGet, indexOfTime);
secretMessage.splice(indexOfGet, 6, "know");
console.log(secretMessage);

console.log(secretMessage.join(" "));
