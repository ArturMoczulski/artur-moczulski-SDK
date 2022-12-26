const assert = require('assert');

module.exports = (theOneSDK) => {
  return () => {

    describe('#books()', function () {
      it('should return the list of LOTR books', function () {
        theOneSDK.books()
        // code here
      });
    });

  }
}