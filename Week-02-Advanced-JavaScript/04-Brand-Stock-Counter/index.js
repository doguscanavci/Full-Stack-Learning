const { arabaStogu } = require('./arabaStogu.js');

/* Codes Here! */

const countStock = (carList, brand) => {
  const filteredCars = carList.filter((car) => car.name.includes(brand));

  const stockByYear = {};

  filteredCars.forEach((car) => {
    if (stockByYear[car.year]) {
      stockByYear[car.year] = stockByYear[car.year] + 1;
    } else {
      stockByYear[car.year] = 1;
    }
  });

  return stockByYear;
};

/* Do not delete the lines after this one! */
module.exports = countStock;
