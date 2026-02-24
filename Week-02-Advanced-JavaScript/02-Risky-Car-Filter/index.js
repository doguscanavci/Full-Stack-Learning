const { arabaStogu } = require('./arabaStogu.js');

/* Codes Here! */

const getRiskyCarList = (carList) => {
  const currentYear = 2024;

  return carList.filter(
    (car) =>
      car.km_driven >= 250000 ||
      currentYear - car.year > 20 ||
      car.owner === 'Dördüncü veya Daha Fazla Sahibi'
  );
};

/* Do not delete the lines after this one! */
module.exports = getRiskyCarList;
