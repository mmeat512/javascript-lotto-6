export const utils = {
  ascendingNumbers: (arr) => {
    return arr.sort((prevNumber, nextNumber) => prevNumber - nextNumber);
  },
  numberFormat: (str) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  roundingSecondDecimalPlace: (num) => {
    console.log(num);
    return parseFloat(num.toFixed(2));
  },
};
