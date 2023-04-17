/* In this demo we are using Jest (https://jestjs.io/) to unit test our code. Unit
   tests are automated tests which ensure that our code is performing in the way
   that we expect. It is triggered in the project by running "npm test". We can see
   why in the package.json file. When run, Jest will run every single file in the
   project that ends with the extension .test.js

   Unit testing is one of the major things that continuous integration tools like
   CircleCI were made for. The idea behind having unit tests, beyond just ensuring
   our code works the first time, is to ensure that nothing breaks in the future.
   This becomes especially necessary when we have a large codebase being edited by
   multiple people.

   This test file will test all the functionality from math.js in this same folder.
   When developing tests, there are two approaches for where to put your test files.
   One is what we see here, where the tests are alongside the original source files.
   The other is to create a separate "test" folder that mirrors the "server" folder,
   and has the tests in the same locations. Which approach you use is a matter of
   preference.

   In this file, we defined our testVars, which should mirror the constants set in
   math.js. The reason we don't just use those constants is because we want these
   to remain unchanged even if the constants being used in math.js are edited by
   someone on the team. This will allow us to ensure those values haven't changed.
*/
const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
};

/* Below we see a testing suite for the "add()" function. We can have as many
   tests as we want in a single suite. Each test tests for a specific outcome.
   We need to write our tests to account for all possible outcomes to ensure
   that things are not breaking. In a perfect world, our unit tests will catch
   any and all errors that we make in programming our code.

   Describe, test, expect, and toBe() are all functions imported from Jest.
   Rather than having to import Jest here, it will inject itself into every
   file that it checks when we run "npm test".

   .toBe is a matcher function. There are many matcher functions that can be
   added to an expect statement to check for a final value. We will see another
   in app.test.js.

   https://jestjs.io/docs/expect
*/
describe('add()', () => {
    test('finds the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.add(testVars.max, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.add(testVars.min - 2, 1)).toBe(testVars.min);
    });
});

// This is a suite for the subtract method
describe('subtract()', () => {
    test('finds the difference of two numbers', () => {
        expect(mathUtils.sub(10, 5)).toBe(5);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.sub(testVars.max + 2, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.sub(testVars.min, 1)).toBe(testVars.min);
    });
});

/* This is our suite for the multiplication function. Using Test
   Driven Development (TDD) we wrote these tests before writing
   the multiplication function. The idea behind TDD is that we can
   define the functionality we want first, then write the code to
   satisfy those tests afterward.

   https://en.wikipedia.org/wiki/Test-driven_development
*/
describe('multiply()', () => {
    test('finds the product of two numbers', () => {
        expect(mathUtils.mul(5, 10)).toBe(50);
    });

    test('clamps inputs to maximum', () => {
        // We can have multiple cases checked within a singular test.
        expect(mathUtils.mul(testVars.max + 1, 10)).toBe(testVars.max * 10);
        expect(mathUtils.mul(5, testVars.max + 1)).toBe(5 * testVars.max);
    });

    test('clamps inputs to minimum', () => {
        expect(mathUtils.mul(testVars.min - 1, 10)).toBe(testVars.min * 10);
        expect(mathUtils.mul(5, testVars.min - 1)).toBe(5 * testVars.min);
    });
});