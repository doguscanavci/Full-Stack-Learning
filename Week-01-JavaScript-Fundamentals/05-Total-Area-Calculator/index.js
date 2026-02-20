/* Codes Here! */

function totalArea(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    let height = list[i][0];
    let width = list[i][1];

    let area = height * width;

    total = total + area;
  }

  return total;
}

/* Do not delete the lines after this one! */
module.exports = totalArea;
