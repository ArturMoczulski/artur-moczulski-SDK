require('dotenv').config()
const term = require( 'terminal-kit' ).terminal ;

const theOneSDK = require('artur-moczulski-sdk')({
  accessKey: process.env.THE_ONE_API_ACCESS_KEY
})

term.cyan( 'The One API browser\n' ) ;

var items = [
	'a. What LOTR books have been written?' ,
	'b. What are the chapters of the first LOTR book?' ,
	'c. What LOTR quotes do you have?' ,
] ;

term.singleColumnMenu( items , async function( error , response ) {

  let responseText;

  if (response.selectedIndex == 0) {

    let books = await theOneSDK.books();

    responseText = books.map(book => book.name)

  } else if (response.selectedIndex == 1) {

    let books = await theOneSDK.books();
    let fellowship = books[0]
    await fellowship.fetchChapters()
    responseText = fellowship.chapters.map(chapter => chapter.chapterName)
  } else if (response.selectedIndex == 2) {

    let quotes = await theOneSDK.quotes();
    responseText = quotes.map(quote => quote.dialog)
  }

	term( '\n' ).eraseLineAfter.green(
		responseText+"\n" 
	) ;

	process.exit() ;

} ) ;