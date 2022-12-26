const assert = require('assert');

var theOneSDK; // the SDK itself is loaded in the beforeAll

describe('theOneSDK', function () {

  this.beforeAll(() => {
    theOneSDK = require('../lib/entry')({ debug: "DEBUG" })
  }),

  describe('#books()', function () {
    it('should return the list of LOTR books', function () {
      // code here
    });
  });
});