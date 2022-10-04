// First test with console
// console.log( "hello💥" )
fetch('fullstacknator.json')
.then((res) => res.json())
.then((data) => {
// First test with DOM
// window.document.writeln( "Hello💥💥💥💥💥💥💥" )
const name = document.querySelector('.name').textContent = data.firstname + " " + data.lastname
const discord = document.querySelector('#discord').textContent = data.discord
const github = document.querySelector('.github').textContent = data.discord
const personalityType = document.querySelector('#personalityType').textContent = data.personalityType
const birthYear = document.querySelector('.birthYear').textContent = data.birthYear
const contactInfo= document.querySelector('#contactInfo').textContent = data.contactInfo
const timeProductive = document.querySelector('.timeProductive').textContent = data.timeProductive


// Using the nodes of the DOM
const ul = document.querySelector( '#ul' )
const li = document.querySelector( '.li' )
const button = document.querySelector( '.btn-show' )
})
.catch((err) => console.log(err));

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


