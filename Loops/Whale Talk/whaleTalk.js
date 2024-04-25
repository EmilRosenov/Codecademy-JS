// Whale Talk
// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops. Let’s get started!

// 1)
// Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

const input = "turpentine and turtles";

// 2)
// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.

// Note: The use of this array will be more apparent within the following steps.

const vowels = ["a", "e", "i", "o", "u"];

// 3)
// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

const resultArray = [];

// 4)
// Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

//+

//5)
// To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.

//6)
// Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.

// This will enable you to check each letter of input against all the vowels elements during each iteration.

//+

// 7)
// To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.

// *8)

//Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.

// Note: To check that everything is working properly, log letter matches to the console.

for (let i = 0; i < input.length; i++) {
  let letter = input[i];
  //*console.log(letter);
  if (letter === "e") {
    resultArray.push("e");
  } else if (letter === "u") {
    resultArray.push("u");
  }
  for (let index = 0; index < vowels.length; index++) {
    let vowel = vowels[index];
    //console.log(i, index);

    //console.log(letter, vowel);
    if (letter === vowel) {
      //console.log(letter, vowel);
      resultArray.push(letter);
    }
  }
}
console.log(resultArray.join("").toUpperCase());
