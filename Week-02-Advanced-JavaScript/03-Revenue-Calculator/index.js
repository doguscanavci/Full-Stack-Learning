const { arabaStogu } = require('./arabaStogu.js');

/* Codes Here! */

const calculateRevenue = (carList, sellerType) => {
  const filteredCars = carList.filter((car) => car.seller_type === sellerType);

  const totalRevenue = filteredCars.reduce(
    (total, car) => total + car.selling_price,
    0
  );

  return totalRevenue;
};

/* Do not delete the lines after this one! */
module.exports = calculateRevenue;
