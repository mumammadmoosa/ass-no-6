// Q1
var allLower = userInput.toLowerCase();

// Q2
x = x.toLowerCase();

// Q3
y = y.toUpperCase();

// Q4
var originalVariable = "I am a js developer"
var updatedVariable = originalVariable.toLocaleLowerCase();

// Q5
const lowercaseStrings = {};

const arrayOfStrings = ["Hello", "World", "OpenAI"];

for (let i = 0; i < arrayOfStrings.length; i++) {
  const variableName = `lowercaseString${i}`;
  lowercaseStrings[variableName] = arrayOfStrings[i].toLowerCase();
}

console.log(lowercaseStrings);

const specificKey = "lowercaseString1";
console.log(lowercaseStrings[specificKey]);

// Q6

const myString = "Hello, World!";

const uppercaseString = myString.toUpperCase();

alert(uppercaseString);

// Q7
var cityName = "kaRacHi";

var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedName);

// ------------------------CHP 22 - 25 (STRINGS)------------------------------------

var sameWords = "captain";

// Use the slice method to remove "ap"
var result = sameWords.slice(0, 1) + sameWords.slice(3);

// Display the result
console.log(result);
