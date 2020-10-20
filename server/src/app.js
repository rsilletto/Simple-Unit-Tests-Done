const http = require('http');
const utils = require('./utils'); // grab utils for simple math functions

const port = 3000;

const onRequest = (req, res) => {
  let num = utils.add(10, 15); // should get capped to 20
  num -= utils.sub(10, 5); // should subtract the total of 10-5 from 20, giving 15

  const message = `Total was ${num}`;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(message);
  res.end();
};

const app = http.createServer(onRequest).listen(port);

console.log(`Server started on port ${port}`);

// Check if test environment, if so export server app as a global variable for testing
if (process.env.NODE_ENV === 'test') {
  console.log('setting env to test');
  module.exports = app;
}
