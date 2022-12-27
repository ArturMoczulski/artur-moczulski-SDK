const theOneSDK = require('artur-moczulski-sdk')()
const term = require( 'terminal-kit' ).terminal ;

term.cyan( 'The One API browser\n' ) ;

var items = [
	'a. What LOTR books have been written?' ,
] ;

term.singleColumnMenu( items , async function( error , response ) {

  let responseText;

  if (response.selectedIndex == 0) {
    let books = await theOneSDK.books();
    responseText = books.map(book => book.name)
  }

	term( '\n' ).eraseLineAfter.green(
		responseText+"\n" 
	) ;

	process.exit() ;

} ) ;