"use strict";

/// level 1 /// ------------------

const firstNumber = parseInt(prompt("Task 1: Enter first number:"));
const secondNumber = parseInt(prompt("Task 1: Enter second number:"));

const message =
  firstNumber > secondNumber
    ? console.log("Task 1: The first number is larger!")
    : firstNumber < secondNumber
    ? console.log("Task 1: The second number is larger!")
    : console.log("Task 4: Number are the same!");

/// --- /// -----------------------------------------------------------------------------

const userMessage = prompt("Task 1 with SWITCH: Leave any message:");

switch (userMessage) {
  case null:
    console.log("Canceled input!");
    break;
  case "":
    console.log("You havent written anything!");
    break;
  default:
    console.log(userMessage);
}

/// --- /// -----------------------------------------------------------------------------

const numberOfMonth = parseInt(
  prompt("Task 1 - NUMBER OF MONTH: Enter a number of Month:")
);

switch (numberOfMonth) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("This month doesnt exist!");
}

/// --- /// -----------------------------------------------------------------------------

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

/// --- /// -----------------------------------------------------------------------------

const firsCycleValue = parseInt(prompt("Enter first cycle value:"));
const secondCycleValue = parseInt(prompt("Enter second cycle value:"));
let index;

for (let index = firsCycleValue; index <= secondCycleValue; index++) {
  if (index % 5 === 0) {
    console.log(index);
  }
}

/// --- /// -----------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
  const res = i * 3;
  console.log(res);
}

/// --- /// -----------------------------------------------------------------------------

/// level 2 /// ------------------

let sumOfNumber = 0;
let countIndex = 0;

while (countIndex < 5) {
  let userValue = parseFloat(prompt("Task 2 - Enter a number!"));
  if (!isNaN(userValue)) {
    sumOfNumber += userValue;
    countIndex++;
  } else {
    console.log("Task 2 - Enter a number!");
  }
}
console.log("Task 2 Result:", sumOfNumber);

/// --- /// -----------------------------------------------------------------------------

const num = parseFloat(prompt("Enter value of factorial:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Factorial of ${num} equal to ${factorial}`);

/// --- /// -----------------------------------------------------------------------------

const triangle = prompt("Enter triangle elements:");

for (let i = 1; i <= triangle; i++) {
  console.log("*".repeat(i));
}
