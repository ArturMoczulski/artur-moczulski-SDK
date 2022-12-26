const assert = require('assert');

const theOneSDK = require('../lib/entry')({ debug: "DEBUG" })
const bookSuite = require('./book')(theOneSDK)

describe('theOneSDK', function () {
  describe('book suite', bookSuite.bind(this));
});