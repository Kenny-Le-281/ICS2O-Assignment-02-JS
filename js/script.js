/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function calculates the area and perimeter of the parallelogram.
 */
function calculate () {
  // input
  const base = parseFloat(document.getElementById('parallelogram-base').value)
  const height = parseFloat(document.getElementById('parallelogram-height').value)

  // process
  const area = base * height

  // output
  document.getElementById('area').innerHTML = 'The Area of the parallelogram is: ' + area + ' cm²'
}
