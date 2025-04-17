const data = [
  [
    0,
    [
      1,
      2,
      3,
      {
        string: [
          1,
          {
            value: "hallo",
          },
        ],
      },
    ],
  ],
];
console.log("---Cara Pertama---");
const merged = {
  ...data[0][1][3].string[1].value,
  hallo: "Helo!",
};
console.log(merged.hallo);
console.log("---Cara Kedua---");
const merged2 = {
  ...data,
  hallo: "Helo!",
};
console.log(merged2.hallo);
