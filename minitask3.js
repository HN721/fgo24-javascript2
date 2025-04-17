const temperature = {
  farenheit: function (c) {
    return c * 1.8 + 32;
  },
  reamur: function (c) {
    return (c * 4) / 5;
  },
  kelvin: function (c) {
    return c + 273;
  },
  total: function (c, selector) {
    if (typeof c !== "number") {
      console.log("harap masukkan angka");
    }
    if (selector === "F") {
      return this.farenheit(c);
    } else if (selector === "R") {
      return this.reamur(c);
    } else if (selector === "K") {
      return this.kelvin(c);
    } else {
      console.log("harap masukkan F,R atau K");
    }
  },
};
console.log(temperature.total(2, "F"));
console.log(temperature.total(10, "R"));
console.log(temperature.total(20, "K"));
console.log(temperature.total(30, "K"));
