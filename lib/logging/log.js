const colors = require('ansi-colors');
const logLevels = require('./logLevels');

module.exports = (sdkOptions) => {

  const logLevelColors = {
    DEBUG: "yellow"
  }

  const log = (msg, lvl) => {
    if (sdkOptions.debug == lvl) {
      console.log(
        colors[logLevelColors[lvl]](msg)
      )
    }
  }

  return log
}