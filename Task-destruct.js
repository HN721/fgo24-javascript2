const data = [
  [
    "x",
    [
      "x",
      "y",
      [
        {
          string: [
            0,
            {
              value: "hallo",
            },
          ],
        },
      ],
    ],
  ],
];
// console.log(data[0][1][2][0].string[1].value);

const {
  string: [, { value }],
} = data[0][1][2][0];
console.log(value);
