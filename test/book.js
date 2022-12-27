const assert = require('assert');
const nock = require('nock')
const request = require('supertest')("https://the-one-api.dev/v2")
const expect = require('chai').expect

module.exports = (theOneSDK) => {
  return () => {

    describe('#books()', function () {
      this.beforeAll(() => {
        nock("https://the-one-api.dev/v2/")
          .get("/book/")
          .replyWithFile(200, __dirname + '/mocks/allBooks.json', {
            'Content-Type': 'application/json',
          })
      })

      it('should return the list of LOTR books', async function () {

        const result = await theOneSDK.books()
        expect(result.length).equal(3)
        expect(result[0].name).to.equal("The Fellowship Of The Ring")
        expect(result[1].name).to.equal("The Two Towers")
        expect(result[2].name).to.equal("The Return Of The King")
      });
    });

    describe('#book()', function () {
      this.beforeAll(() => {
        nock("https://the-one-api.dev/v2/")
          .get("/book/mockApiId001")
          .replyWithFile(200, __dirname + '/mocks/book_mockApiId001.json', {
            'Content-Type': 'application/json',
          })
      })

      it('should return The Fellowship Of The Ring book', async function () {
        const result = await theOneSDK.book("mockApiId001")
        expect(result.name).to.equal("The Fellowship Of The Ring")
      });
    });

  }
}