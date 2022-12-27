/**
 * All the functionality surrounding the book method
 * 
 */ 

module.exports = (sdkOptions) => {
  const debug = require('../logging/debug')(sdkOptions)
  const fetch = require('node-fetch');

  const book = async (id) => {
    debug("Calling /book ...")

    let url = sdkOptions.apiHost + "book/" + id

    const response = await fetch(url)
    const json = await response.json()

    let book = json.docs[0]

    debug("Fetched the "+book.name+" books from the API")

    return book
  }

  return book 
}