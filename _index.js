// const arr1 = ["Hallo"];
// const arr2 = ["Hallo", "Welt"];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);
const bio = [
  {
    fullName: "Max Mustermann",
    age: 30,
  },
];
bio[0] = {
  ...bio[0],
  age: 31,
};
console.log(bio);
const extraInfo = {
  skills: ["HTML", "CSS", "JS"],
  education: [
    {
      name: "SMP 1 Denpasar",
    },
  ],
};
const profile = {
  ...bio,
  age: 12,
  ...extraInfo,
};
// console.log(profile);
