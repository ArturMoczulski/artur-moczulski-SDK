const assert = require('assert');
const nock = require('nock')
const request = require('supertest')("https://the-one-api.dev/v2")
const expect = require('chai').expect

module.exports = (theOneSDK) => {
  return () => {

    describe('#quotes()', function () {
      this.beforeAll(() => {
        nock("https://the-one-api.dev/v2/")
          .get("/quote/")
          .replyWithFile(200, __dirname + '/mocks/allQuotes.json', {
            'Content-Type': 'application/json',
          })
      })

      it('should return the list of LOTR books quotes', async function () {
        const result = await theOneSDK.quotes()
        expect(result.length).equal(1000)
      });
    });

  }
}