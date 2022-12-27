# Artur Moczulski's The One SDK design

## Dependencies

* Testing: [mocha](https://mochajs.org/)
* CLI styling: [ansi-colors](https://www.npmjs.com/package/ansi-colors)

## Conventional Changelog

This project uses [Conventional Changelog](https://www.conventionalcommits.org/en/v1.0.0/)
standard for commit message format.

## Internal library logging

It's achieved using the `log` functions defined in *./lib/logging/log.js*
and level specific shortcuts in the same directory.

To enable SDK internal logs, the debug level needs to be provided in the
SDK options in the `require` call, i.e.:

```
const debug = require("./logging/debug")({ debug: "DEBUG" })
```

## Directory structure

The functionality related do different endpoints of the API is organized in
directories mimicing the names of The One API endpoints, for example: all 
the code related to the */book* endpoint can be found in *./lib/book* 
directory.

The *./lib/logging* directory contains the logic used for internal SDK
logging.

## Functional objects

The SDK decorates the JSON data returned from the API with utility functions that
makes working with them easy. In the following example the book object fetched
by the SDK will also fetch the chapters data from the API if requested. The
chapters of the book will get added in the *chapters* property of the book.

```
let books = await theOneSDK.books()
let fellowship = books[0]
fellowship.fetchChapters()
console.log(fellowship.chapters)
```

## Testing

### Mocks

The library is tested against mock responses stored in *./test/mocks*. Those
are slightly modified versions of actual responses from The One API.