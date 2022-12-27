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
        expect(result[0].fetchChapters).to.be.a("function")
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
        expect(result.fetchChapters).to.be.a("function")
      });
    });

    describe('Book type', function() {
      this.beforeAll(() => {
        nock("https://the-one-api.dev/v2/")
          .get("/book/mockApiId001")
          .replyWithFile(200, __dirname + '/mocks/book_mockApiId001.json', {
            'Content-Type': 'application/json',
          })
      })

      this.beforeAll(() => {
        nock("https://the-one-api.dev/v2/")
          .get("/book/mockApiId001/chapter")
          .replyWithFile(200, __dirname + '/mocks/book_mockApiId001_chapters.json', {
            'Content-Type': 'application/json',
          })
      })

      describe('#fetchChapters()', () => {
        it('should ', async function () {
          const book = await theOneSDK.book("mockApiId001")
          await book.fetchChapters()
          expect(book.chapters.length).to.equal(22)
          expect(book.chapters[0].chapterName).to.equal("A Long-expected Party")
          expect(book.chapters[book.chapters.length-1].chapterName).to.equal("The Breaking of the Fellowship")
        });
      });
      
    });
    

  }
}