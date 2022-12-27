const assert = require('assert');
const nock = require('nock')
const request = require('supertest')("https://the-one-api.dev/v2")
const chai = require('chai')
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised)
const expect = chai.expect

module.exports = (theOneSDK) => {
  return () => {

    describe('#quotes()', function () {
      describe('with correct API access key', () => {
        this.beforeAll(() => {
          nock("https://the-one-api.dev/v2/", {
            reqheaders: {
              "Authorization": 'Bearer 123',
            },
          })
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
      
      describe('with incorrect API access key', () => {
        this.beforeAll(() => {
          nock("https://the-one-api.dev/v2/", {
            reqheaders: {
              "Authorization": 'Bearer 123',
            },
          })
            .get("/quote/")
            .reply(401, {
              "success": false,
              "message": "Unauthorized."
            })
        })

        it('should return authentication error', async function () {
          await expect(theOneSDK.quotes()).to.be.rejectedWith(Error, "Unauthorized.")
        });
      });
    });

  }
}