# artur-moczulski-SDK

This SDK provides an easy programmatic layer over [The One API](https://the-one-api.dev/). To use it
you will need to obtain an [access key for The One API](https://the-one-api.dev/sign-up).

## Install

`cd` into your project and type:

`npm install artur-moczulski-SDK`

## Basic Usage

### Importing the library in you code

```
const theOneSDK = require('artur-moczulski-SDK')
```

### Authentication

```
await theOneSDK.auth("your-access-key")
```


### Working with the *Book* endpoint

*Note:* The *Book* endpoint is the only endpoint which will not require a prior authentication.

#### Obtain the list of all books

```
await theOneSDK.books()
```

## Testing

To run all the tests:

`npm test`

## Documention

### Example project

This repo contains an example project in *./docs/example-project* which utilizes
the SDK through the npm registry. Some exapmles of real world library usage
can be found there. The purpose of the example project is to be a simple
The One API browser.