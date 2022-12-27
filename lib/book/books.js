/**
 * All the functionality surrounding the books method
 * 
 */ 

module.exports = (sdkOptions) => {
  const fetch = require('node-fetch');
  const debug = require('./../logging/debug')(sdkOptions)
  const bookFactory = require('./bookFactory')(sdkOptions)

  const books = async () => {
    debug("Calling /books ...")

    let url = sdkOptions.apiHost + "book/"

    const response = await fetch(url)
    const json = await response.json()

    let books = json.docs.map(doc => bookFactory(doc))

    debug("Fetched the following "+books.length+" books from the API: "+books.map(book => book.name + " ("+book._id+")"))

    return books
  }

  return books 
}