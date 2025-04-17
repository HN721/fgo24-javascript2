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
console.log("---Cara Pertama ---");
data[0][1][3].string[1] = {
  ...data[0][1][3].string[1],
  value: "Helo!",
};
console.log(data[0][1][3].string[1].value);
console.log("---Cara Kedua---");
const merged2 = {
  ...data,
  hallo: "Helo!",
};
console.log(merged2.hallo);
