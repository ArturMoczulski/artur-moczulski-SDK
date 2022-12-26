/**
 * Logging shortcuct funciton for debug level.
 * 
 * Example usage: debug("This is my debig message")
 */

const logLevels = require('./logLevels');

module.exports = (sdkOptions) => {
  const log = require('./log')(sdkOptions);


  const debug = (msg) => {
    log(msg, logLevels.DEBUG)
  }
  
  return debug
}
