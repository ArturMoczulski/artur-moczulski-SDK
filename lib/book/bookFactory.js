/**
 * Factory to create book objects
 */

module.exports = (sdkOptions) => {
  const debug = require('../logging/debug')(sdkOptions)

  const fetchChapters = require('./fetchChapters')(sdkOptions)

  const factory = (json) => {
    let book = json
    book.fetchChapters = fetchChapters.bind(book)
    return book
  }

  return factory 
}