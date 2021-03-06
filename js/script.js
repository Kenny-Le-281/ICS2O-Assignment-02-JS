/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function calculates the area of the parallelogram.
 */
function calculate () {
  // input
  const base = parseFloat(document.getElementById('parallelogram-base').value)
  const height = parseFloat(document.getElementById('parallelogram-height').value)

  // process
  const area = base * height

  // output
  document.getElementById('area').innerHTML = 'The area of the parallelogram is: ' + area.toFixed(2) + ' cm²'
}
