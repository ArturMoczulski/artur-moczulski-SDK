/**
 * All the functionality surrounding the book method
 * 
 */ 

module.exports = (sdkOptions) => {
  const debug = require('../logging/debug')(sdkOptions)
  const fetch = require('node-fetch');

  const fetchChapters = async function() {
    debug("Calling /book/"+this._id+"/chapter ...")

    let url = sdkOptions.apiHost + "book/" + this._id + "/chapter"

    const response = await fetch(url)
    const json = await response.json()

    let chapters = json.docs

    debug("Fetched the following "+chapters.length+" chapters from the API")

    this.chapters = chapters

    return chapters
  }

  const book = async (id) => {
    debug("Calling /book/"+id+" ...")

    let url = sdkOptions.apiHost + "book/" + id

    const response = await fetch(url)
    const json = await response.json()

    let book = json.docs[0]
    book.fetchChapters = fetchChapters.bind(book)

    debug("Fetched the "+book.name+" books from the API")

    return book
  }

  return book 
}