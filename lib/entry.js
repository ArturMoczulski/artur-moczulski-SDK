/**
 * The entry point to The One SDK
 * 
 * The SDK can be configured by passing the options parameter
 * in the require statement.
 * 
 * The format of the options parameter is defined in the 
 * sdkOptionsFormat object below.
 *
 */

const sdkOptionsFormat = {
  debug: null,
  apiHost: "https://the-one-api.dev/v2/"
}


module.exports = (sdkOptions) => {

  sdkOptions = {
    ...sdkOptionsFormat,
    ...sdkOptions
  }

  const debug = require("./logging/debug")(sdkOptions)
  debug("The One SDK is loading...")

  const sdk = {}

  const books = require('./book/books')(sdkOptions)
  sdk.books = books

  debug("The One SDK has been loaded!")

  return sdk
}
