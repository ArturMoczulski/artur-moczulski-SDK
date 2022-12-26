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