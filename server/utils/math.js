// Max and min numbers for numbers returned by this utility
const MAX = 20;
const MIN = 0;

// Prevent numbers from going outside of MIN and MAX
const clamp = (num) => Math.min(Math.max(num, MIN), MAX);

// add two numbers within limits specified by MIN and MAX
const add = (num1, num2) => {
  let num = num1 + num2;

  num = clamp(num);

  return num;
};

// subtract two numbers within limits specified by MIN and MAX
const subtract = (num1, num2) => {
  let num = num1 - num2;

  num = clamp(num);

  return num;
};

// multiply two numbers. clamp the input values in the range of MIN and MAX
// In our demo, we developed multiply using Test Driven Development (TDD).
// Which means we wrote our unit tests first based on the outcomes we wanted,
// then iterated on this function until it passed all the tests we wrote.
const multiply = (num1, num2) => clamp(num1) * clamp(num2);

module.exports.add = add;
module.exports.sub = subtract;
module.exports.mul = multiply;
