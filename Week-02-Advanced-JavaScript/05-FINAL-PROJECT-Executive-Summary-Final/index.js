const { arabaStogu } = require('./arabaStogu.js');

/* Codes Here! */

const analyzeData = (carList, brand, year) => {
  const filteredCars = carList.filter(
    (car) => car.name.includes(brand) && car.year === year
  );

  if (filteredCars.length === 0) {
    return `Model yılı ${year} olan ${brand} marka araba stoklarda bulunamamıştır!`;
  }

  const totalRevenue = filteredCars.reduce(
    (total, car) => total + car.selling_price,
    0
  );

  return `Model yılı ${year} olan ${brand} marka ${filteredCars.length} arabanın toplam piyasa değeri ${totalRevenue} TL'dir.`;
};

/* Do not delete the lines after this one! */
module.exports = analyzeData;
