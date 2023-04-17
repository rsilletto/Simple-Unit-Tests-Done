/* Read utils/math.test.js first before reading this file.

   First we import app.js. You'll notice that app.js exports
   the server if we are in the test configuration (which will
   be set automatically by Jest when we run npm test).

   All we need to do is test if app is not undefined, since
   that would mean there were no errors in app.js. If there
   were errors, the file would not finish executing.
*/
const app = require('./app.js');

test('Server starts up correctly', () => {
    /* Here we see an example of an expect matcher that is
       not toBe() which we used in math.test.js. There are
       many matchers in Jest which can be used for different
       values. https://jestjs.io/docs/expect
    */
    expect(app).toBeDefined();
});

/* The afterAll function will be run after every other test
   in this file has finished. We are using it here to stop
   our server, which will otherwise stay running until we
   use ctrl+c to stop it.
*/ 
afterAll(() => {
    app.close();
});