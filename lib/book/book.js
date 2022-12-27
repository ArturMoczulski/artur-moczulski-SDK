/**
 * All the functionality surrounding the book method
 * 
 */
const book = require('../../test/book');

 

module.exports = (sdkOptions) => {
  const fetch = require('node-fetch');
  const debug = require('../logging/debug')(sdkOptions)
  const bookFactory = require('./bookFactory')(sdkOptions)

  const book = async (id) => {
    debug("Calling /book/"+id+" ...")

    let url = sdkOptions.apiHost + "book/" + id

    const response = await fetch(url)
    const json = await response.json()

    let book = bookFactory(json.docs[0])

    debug("Fetched the "+book.name+" books from the API")

    return book
  }

  return book 
}