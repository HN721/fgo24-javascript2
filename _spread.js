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
console.log("---Cara Ketiga---");
const merged3 = {
  ...data[0][1][3].string[1],
  value: "Helo!",
};
console.log(merged3);
onst bio = {
  name: "Jhon O'Connor",
  age: 30,
};

const extraInfo = {
  skills: ["Web Programming", "Painting"],
  education: [
    {
      name: "SMP 1 Denpasar",
      year: 2012,
    },
  ],
};
const merged = {
  ...extraInfo,
  skills: [...extraInfo.skills, "Hiking"],
  education: [
    ...extraInfo.education,
    {
      name: "SMP 2 Denpasar",
      year: 2014,
    },
  ],
};
const profile = {
  ...bio,
  ...merged,
};
console.log(profile);
