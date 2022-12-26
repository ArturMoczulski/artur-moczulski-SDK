/**
 * All the functionality surrounding the /book endpoint 
 * 
 */

module.exports = (sdkOptions) => {
  const debug = require('./../logging/debug')(sdkOptions)

  const books = () => {
    debug("Calling /books ...")
  }

  return books 
}