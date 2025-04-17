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
  total: function (c) {
    return {
      farenheit: this.farenheit(c),
      reamur: this.reamur(c),
      kelvin: this.kelvin(c),
    };
  },
};
console.log(temperature.total(2));
console.log(temperature.total(10));
console.log(temperature.total(20));
console.log(temperature.total(30));
