const calculate = (num1, callback) => {
  callback(num1);
};
const checkNumber = (number) => {
  if (number % 2 === 0) {
    console.log(`Bilangan Genap`);
  } else {
    console.log(`Bilangan Ganjil`);
  }
};
calculate(10, checkNumber);
