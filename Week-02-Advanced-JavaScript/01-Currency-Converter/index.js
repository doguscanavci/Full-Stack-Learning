const { arabaStogu } = require('./arabaStogu.js');

/* Codes Here! */

const convertCurrency = (data, currency) =>
  data.map((car) => ({
    ...car,
    selling_price: car.selling_price * currency,
  }));

/* Do not delete the lines after this one! */
module.exports = convertCurrency;
