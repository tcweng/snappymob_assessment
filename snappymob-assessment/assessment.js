const fs = require("fs");

let array = [];

// Generate random alphebets (excluding numbers)
function generateString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let string = "";
  const stringLength = 6; // Number of characters to be generated.

  for (let i = 0; i < stringLength; i++) {
    string += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return string;
}

// Generate a real number (float)
function generateFloat() {
  const max = 100;
  return (Math.random() * max).toFixed(4); // Round to 4 decimal number, but for no reason.
}

function generateNumber() {
  const max = 100;
  return (Math.random() * max).toFixed(0); // Round to whole number.
}

function generateAlphaNumeric() {
  return (
    " ".repeat(Math.random() * (10 - 1) + 1) + // Add at least one empty space in front of alphanumeric
    Math.random().toString(36).substring(2, 8) +
    " ".repeat(Math.random() * (10 - 1) + 1) // Add at least one empty space at the back of alphanumeric
  );
}

function generateObject() {
  alphabets = generateString();
  pureNumber = generateFloat();
  integer = generateNumber();
  alphaNumeric = generateAlphaNumeric();

  array.push(
    alphabets,
    parseFloat(pureNumber), // turning it to typeof number, could be avoid if using Typescript instead.
    parseInt(integer), // turning it to typeof number, could be avoid if using Typescript instead.
    alphaNumeric
  );

  return array;
}

function taskB() {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      result.push(array[i].replaceAll(" ", "") + " : " + typeof array[i]);
      // console.log(array[i].replaceAll(" ", "") + " : " + typeof array[i]); // remove space if its a typeof string
    } else {
      result.push(array[i] + " : " + typeof array[i]);
      // console.log(array[i] + " : " + typeof array[i]); // else just return.
    }
  }

  return result.join("\n"); // return as string so it can generate output.txt with fs.
}

// Generate object and push to global array.
generateObject();

const outputFile = "output/output.txt";
fs.mkdirSync("output", { recursive: true });

// Task B-fied the generated object
const outputData = taskB();

fs.writeFileSync(outputFile, outputData, "utf8");
