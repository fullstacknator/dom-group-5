// First test with console
// console.log( "hello💥" )

// First test with DOM
// window.document.writeln( "Hello💥💥💥💥💥💥💥" )

// Using the nodes of the DOM
const ul = document.querySelector( '#ul' )
const li = document.querySelector( '.li' )
const button = document.querySelector( '.btn-show' )

console.log( "This is ul", ul )
console.log( "This is li", li )
console.log( "This is a button", button )

// Modifying an html element content
// li.textContent = 'This is a DOM li'

// Creating a new html element
// newLi = document.createElement( "li" )
// newLi.innerText = "This is a new li"
// ul.appendChild( newLi )

// Showing a loop of new elements
for ( let i = 0; i < 4; i++ ) {
  newLi = document.createElement( "li" )
  newLi.innerText = `New li ${i}`
  ul.appendChild( newLi )
}


