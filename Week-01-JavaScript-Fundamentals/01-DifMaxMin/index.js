/* Codes Here! */

function difMaxMin(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }

  return max - min;
}

/* Do not delete the lines after this one! */
module.exports = difMaxMin;