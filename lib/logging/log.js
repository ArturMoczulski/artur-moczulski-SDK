/**
 * This is the main internal SDK logging logic.
 * 
 * Example usage: log("Log message", "DEBUG")
 */

const colors = require('ansi-colors');
const logLevels = require('./logLevels');

module.exports = (sdkOptions) => {

  // Map logging levels to colors
  const logLevelColors = {
    DEBUG: "yellow"
  }

  // The main internal SDK logging function
  const log = (msg, lvl) => {

    if (sdkOptions.debug == lvl) {

      console.log(
        "The One SDK: "+colors[logLevelColors[lvl]](msg)
      )

    }

  }

  return log
}