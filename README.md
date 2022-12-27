# artur-moczulski-SDK

This SDK provides an easy programmatic layer over [The One API](https://the-one-api.dev/). To use it
you will need to obtain an [access key for The One API](https://the-one-api.dev/sign-up).

## The easiest way to see the SDK in action

```
git clone git@github.com:ArturMoczulski/artur-moczulski-SDK.git
cd artur-moczulski-SDK/docs/example-project
npm install
cp .env.example .env
```

Change the access key in .env to your The One API access key in the example project.

`node index.js`

## Install

`cd` into your project and type:

`npm install artur-moczulski-SDK`

## Basic Usage

### Importing the library in your code

```
const theOneSDK = require('artur-moczulski-SDK')()
```

### Authentication

```
const theOneSDK = require('artur-moczulski-SDK')({
  accessKey: "yourAccessKey"
})
```

### Working with the Books methods 

*Note:* The *book/* endpoint is the only endpoint which will not require a prior authentication.

#### Obtain the list of all books

```
let books = await theOneSDK.books()

console.log(books)
```

#### Fetch a specific book

```
let book = await theOneSDK.book(id)

console.log(book)
```

#### Fetch chapters of a book

```
let book = await theOneSDK.book(id)
await book.fetchChapters()

console.log(book.chapters)
```

### Working with the Quotes methods 

#### Obtain the list of all books

*Note:* The *quote/* endpoint will require an access key to be configured

```
let quotes = await theOneSDK.quotes()

console.log(quotes)
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