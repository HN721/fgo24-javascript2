const profile = {
  name: "John Doe",
  age: 30,
  skill: ["Web Programming", "Mobile Programming"],
  education: {
    name: "Universitas XYZ",
    major: "Computer Science",
  },
};

const {
  skill: [, pro],
  age,
  name: fullName,
} = profile;
const { skill: skill1 } = structuredClone(profile);
const { name: univeristyName } = profile.education;
const {
  education: { name: univName },
} = profile;
console.log(univeristyName);
skill1[2] = "UI/UX";
