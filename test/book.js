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

        // const response = await request
        //   .get('/book/')
        // expect(response.status).equal(200);
        // expect(response.body.total).equal(3);

        const result = await theOneSDK.books()
        expect(result.length).equal(3)
      });
    });

  }
}