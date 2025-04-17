const konversi = (c, type, callback) => {
  if (typeof c !== "number") {
    console.log("harap masukkan angka");
    return;
  }
  if (type === "f") {
    return callback(c);
  } else if (type === "r") {
    return callback(c);
  } else if (type === "k") {
    return callback(c);
  } else {
    console.log("harap masukkan f,r atau k");
  }
};
let result = null;
const farenheit = (c) => (result = c * 1.8 + 32);
const reamur = (c) => (result = (c * 4) / 5);
const kelvin = (c) => (result = c + 273);
console.log(konversi(10, "f", farenheit));
console.log(konversi(10, "r", reamur));
console.log(konversi(20, "k", kelvin));
