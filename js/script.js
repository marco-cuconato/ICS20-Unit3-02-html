// commeent header

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function enterclicked () {
  // input
  const lenght = parseInt(document.getElementById('lenght').value)
  const width = parseInt(document.getElementById('width').value)
  const height = parseInt(document.getElementById('height').value)
  
  // process
  const volume = ( lenght * width * height ) / 3 
  
  // output
  document.getElementById('volume').innerHTML = '<p>Area is: ' + volume + ' cm²</p>'
}
