const http = require('http');
const mathUtils = require('./utils/math.js'); // grab utils for simple math functions

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  let num = mathUtils.add(10, 15); // should get capped to 20
  num -= mathUtils.sub(10, 5); // should subtract the total of 10-5 from 20, giving 15

  const message = `Total was ${num}`;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(message);
  res.end();
};

const app = http.createServer(onRequest).listen(port, () => {
  console.log(`Server started on port ${port}`);
});

/* Check if test environment, if so export server app so that
   we can test it in app.test.js. Jest will automatically set
   process.env.NODE_ENV to 'test' when it's running.
*/
if (process.env.NODE_ENV === 'test') {
  module.exports = app;
}
