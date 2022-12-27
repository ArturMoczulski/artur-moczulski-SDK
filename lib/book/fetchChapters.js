/**
 * All the functionality surrounding fetching book chapters 
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

    debug("Fetched the "+chapters.length+" chapters from the API for "+this.name)

    this.chapters = chapters

    return chapters
  }

  return fetchChapters 
}