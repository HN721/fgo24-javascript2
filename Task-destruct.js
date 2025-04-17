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

const [
  [
    _x,
    [
      _i,
      _j,
      [
        {
          string: [test, { value }],
        },
      ],
    ],
  ],
] = data;

console.log(value); // "hallo"

console.log(value);
