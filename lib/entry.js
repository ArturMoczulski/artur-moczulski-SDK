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
  debug: null
}

module.exports = (sdkOptions) => {

  const debug = require("./logging/debug")(sdkOptions)

  debug("The One SDK has been loaded...")

}
