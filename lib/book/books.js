/**
 * All the functionality surrounding the /book endpoint 
 * 
 */ 

module.exports = (sdkOptions) => {
  const debug = require('./../logging/debug')(sdkOptions)
  const fetch = require('node-fetch');

  const books = async () => {
    debug("Calling /books ...")

    let url = sdkOptions.apiHost + "book/"

    const response = await fetch(url)
    const json = await response.json()

    let books = json.docs

    debug("Fetched the following "+books.lenght+" books from the API: "+books.map(book => book.name + " ("+book._id+")"))

    return books
  }

  return books 
}