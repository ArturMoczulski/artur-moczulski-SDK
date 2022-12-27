/**
 * All the functionality surrounding the quotes method
 * 
 */ 

module.exports = (sdkOptions) => {
  const fetch = require('node-fetch');
  const debug = require('./../logging/debug')(sdkOptions)

  const quotes = async () => {
    debug("Calling /quote ...")

    let url = sdkOptions.apiHost + "quote/"

    const response = await fetch(url)
    const json = await response.json()

    let quotes = json.docs

    debug("Fetched the "+quotes.length+" quotes from the API")

    return quotes
  }

  return quotes 
}