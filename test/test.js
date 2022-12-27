const assert = require('assert');
const { expect } = require('chai');


describe('theOneSDK', function () {

  describe('initialization', () => {
    describe('with no SDK options', () => {
      const theOneSDK = require('../lib/entry')()

      it('bulids the SDK object correctly', () => {
        expect(theOneSDK.books).to.be.a("function")
      });
      
    });

    describe('with SDK options', () => {
      const theOneSDK = require('../lib/entry')({debug: "DEBUG"})

      it('bulids the SDK object correctly', () => {
        expect(theOneSDK.books).to.be.a("function")
      });
      
    });
  });
  

  describe('suites', () => {

    const theOneSDK = require('../lib/entry')({debug: "DEBUG"})

    const bookSuite = require('./book')(theOneSDK)

    describe('book suite', bookSuite.bind(this));
  });
  
});