// Max and min numbers for numbers returned by this utility
const MAX = 20;
const MIN = 0;

// Prevent numbers from going outside of MIN and MAX
const clamp = num => Math.min(Math.max(num, MIN), MAX);

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

module.exports.add = add;
module.exports.sub = subtract;
