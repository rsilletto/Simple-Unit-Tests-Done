// pull in our test config
// in our case this pulls in the environment variable,
// but it can be used for many other things
const config = require('../test_config.js');

// grab the utility module from our server source
const utils = require('../../src/utils');

const limits = config.limits;

// The describe function allows you to group a series of
// tests by name to run asynchronously. You can use multiple
// describes and you can use describes inside of describes.
// The describe function is merely a grouping function for
// running tests. It is required, but it is mostly there for
// the literal purpose of describing a test set to the developer.
describe('utils', () => {
  // describe the add features. We will test multiple cases for
  // the add feature, so we are grouping it into its own describe.
  describe('add', () => {
    // The it function is a test case that explains what this
    // individual test does and provides a callback for successful
    // completion. The it function is required for each test case
    // and is asynchronous. You can have as many it functions in a
    // describe as you need to test. Upon completion, call the done
    // function. Upon failure throw an error (automatically handled
    // by chai
    /** This function should test the addition of two numbers as
        described by the test case.
    **/
    it('should return addition of two numbers', (done) => {
      // call the function to test with hard coded test data
      const sum = utils.add(10, 5);

      // check if the sum equals what was expected from the test data
      sum.should.equal(15);

      // if success, call the done callback
      done();
    });

    // This function should clamp the sum of two numbers to the
    // minimum accepted value
    it('should clamp number to minimum', (done) => {
      // call the function to test with hard coded test data
      // This will give a number far below the limits
      const sum = utils.add(-1000, 1);

      // check if the sum equals the minimum limit
      sum.should.equal(limits.MIN);

      // if success, call the done callback
      done();
    });

    // This function should clamp the sum of the two numbers to
    // the maximum accepted value
    it('should clamp number to maximum', (done) => {
      // call the function to test with hard coded test data
      // This will give a number far above the limits
      const sum = utils.add(1000, 1);

      // check if the sum equals the maximum limit
      sum.should.equal(limits.MAX);

      // if success, call the done callback
      done();
    });
  });

  // describe the subtract features. We will test multiple cases
  // for the add feature, so we are grouping
  // it into its own describe
  describe('subtract', () => {
    // This function should test the subtraction of two numbers
    // as described by the test case
    it('should return difference of two numbers', (done) => {
      // Call the function to test with hard coded test data
      // This should give the difference
      const diff = utils.sub(10, 5);

      // check if the difference equals the expected difference
      // of the test data used
      diff.should.equal(5);

      // if success, call the done callback
      done();
    });

    // This function should clamp the difference of the two numbers
    // to the minimum accepted value
    it('should clamp number to minimum', (done) => {
      // Call the function to test with hard coded test data
      // This should give a number far below the minimum accepted value
      const diff = utils.sub(-1000, 1);

      // Check if the difference equals the minimum accepted value
      diff.should.equal(limits.MIN);

      // if success, call the done callback
      done();
    });

    // This function should clamp the difference of the two numbers
    // to the maximum accepted value
    it('should clamp number to maximum', (done) => {
      // Call the function to test with hard coded test data
      // This should give a number far above the maximum accepted value
      const diff = utils.sub(1000, 1);

      // check if the difference equals the maximum accepted value
      diff.should.equal(limits.MAX);

      // if success, call the done callback
      done();
    });
  });
});
