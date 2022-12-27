const theOneSDK = require('artur-moczulski-sdk')()
const term = require( 'terminal-kit' ).terminal ;

term.cyan( 'The One API browser\n' ) ;

var items = [
	'a. What LOTR books have been written?' ,
	'b. What are the chapters of the first LOTR book?' ,
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
  }

	term( '\n' ).eraseLineAfter.green(
		responseText+"\n" 
	) ;

	process.exit() ;

} ) ;