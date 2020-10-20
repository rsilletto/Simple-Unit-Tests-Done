// Set our environment to 'test'
process.env.NODE_ENV = 'test';

// number limits for utility testing
const limits = {
  MAX: 20,
  MIN: 0,
};

// export limits from module
module.exports.limits = limits;
