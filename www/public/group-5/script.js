// First test with console
// console.log( "hello💥" )

// First test with DOM
// window.document.writeln( "Hello💥💥💥💥💥💥💥" )


/****************************
 * VERSION 1
 ****************************/
// Learning how to use DOM. First version with ul li
// Creating the nodes of the DOM
// const ul = document.querySelector( '#ul' )
// const li = document.querySelector( '.li' )
// const btnShow = document.querySelector( '.btn-show' ) // const btn-show throws error---> use btnShow instead (convention to name JS variables ---> Camel Case)
// const btnClean = document.querySelector( '.btn-clean' ) // const btn-clean throws error---> use btnClean instead (convention to name JS variables ---> Camel Case)
// Testing the content of the nodes
// console.log( "This is ul", ul )
// console.log( "This is li", li )
// console.log( "This is a button", btnShow )
// Modifying an html element content
// li.textContent = 'This is a DOM li'

// Creating a new html element
// newLi = document.createElement( "li" )
// newLi.innerText = "This is a new li"
// ul.appendChild( newLi )

// Creating a loop of new elements
// for ( let i = 0; i < 4; i++ ) {
//   newLi = document.createElement( "li" )
//   newLi.innerText = `New li ${i}`
//   ul.appendChild( newLi )
// }

// Deleting the li used in index.html
// var oldLi = li
// ul.removeChild( document.querySelector( '.li' ) )

// async function asyncFunction( data ) {
// console.log( "⭐typeof fullstacknatorObj--->", typeof fullstacknatorObj )
// console.log( "⭐fullstacknatorObj = ", fullstacknatorObj )

// Showing a loop of new elements
// for( let property in fullstacknatorObj ) {
//   oldLi = document.createElement( "li" )
//   oldLi.style.listStyle = "none"
//   // console.log("property", property)
//   console.log("fullstacknatorObj[property]", fullstacknatorObj[property])
//   oldLi.innerText = `${property[0].toUpperCase() + property.substring(1)}:  ${fullstacknatorObj[property]}`
//   ul.appendChild( oldLi )
// }
// }


/*******************************
 * FINAL VERSION (Dynamic Table)
********************************/
// Table, After learning with ul li, something more interesting
// Creating the nodes of the DOM
const btnShow = document.querySelector( '.btn-show' ) // const btn-show throws error---> use btnShow instead (convention to name JS variables ---> Camel Case)
const btnClean = document.querySelector( '.btn-clean' ) // const btn-clean throws error---> use btnClean instead (convention to name JS variables ---> Camel Case)
const table = document.querySelector( '.table' )
// const tr = document.querySelector('.tr')
// const tdProp = document.querySelector('.tdProp')
// const tdVal = document.querySelector('.tdVal')


// Learning. Creating a dynamic table
// for ( i = 0; i < 4; i++ ) {
//   let tr = document.createElement( "tr" )
//   console.log( tr )
//   table.appendChild( tr )

//   let td = document.createElement( "td" )
//   td.innerText = `property`
//   tr.appendChild( td )

//   let td2 = document.createElement( "td" )
//   td2.innerText = `value`
//   tr.appendChild( td2 )
// }


// Importing fullstacknator.json using fetch() API
let fullstacknatorObj = ""
const myfetch = fetch( 'fullstacknator.json' )
  .then( ( response ) => response.json() )
  .then( ( data ) => {
    console.log( "The data is: ", data )
    fullstacknatorObj = data
    console.log( "🎈type of fullstacknatorObj", typeof fullstacknatorObj )
    // asyncFunction( fullstacknatorObj )
    // asyncTable( fullstacknatorObj )
    eventListenerBtnShow( data )
    eventListenerBtnClean()
  } )
  .catch( ( error ) => {
    console.error( "The error is:", error )
  } )

// console.log("data", data)
console.log( "continue" )


async function asyncTable( fullstacknatorObj ) {
  for ( let property in fullstacknatorObj ) {

    if ( typeof fullstacknatorObj[property] === 'object' ) {
      let counter = 0
      for ( let propertyInside in fullstacknatorObj[property] ) {
        let tr = document.createElement( "tr" )
        table.appendChild( tr )

        // First column
        let td = document.createElement( "td" )
        td.innerText = `${property[0].toUpperCase() + property.substring( 1 )}  ${Object.keys( fullstacknatorObj[property] )[counter]}`
        tr.appendChild( td )

        // Second column
        let td2 = document.createElement( "td" )
        td2.innerText = `${Object.values( fullstacknatorObj[property] )[counter]}`
        tr.appendChild( td2 )

        counter++
      }
    } else {
      let tr = document.createElement( "tr" )
      table.appendChild( tr )

      let td = document.createElement( "td" )
      td.innerText = `${property[0].toUpperCase() + property.substring( 1 )}`
      tr.appendChild( td )

      let td2 = document.createElement( "td" )
      td2.innerText = `${fullstacknatorObj[property]}`
      tr.appendChild( td2 )
    }

  }
}

// Variable control, This is extra to avoid drawing the object again
let mybool = true

// Syntax addEventListener(type, listener, useCapture)
async function eventListenerBtnShow( fullstacknatorObj ) {
  btnShow.addEventListener( 'click', () => {
    // console.log( "mybool", mybool )
    if ( mybool ) {
      asyncTable( fullstacknatorObj )
      mybool = false
    }
  }, true )
}

async function eventListenerBtnClean() {
  btnClean.addEventListener( 'click', () => {
    // table.innerHTML = '' // No recommendable, high risk of Cross Site Scripting XSS-attacks
    while ( table.firstChild ) {
      table.removeChild( table.lastChild )
    }
    mybool = true
  }, true )
}
