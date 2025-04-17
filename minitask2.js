const area = (r) => {
  let luas = null;
  let keling = null;
  let phi = null;
  if (r % 7 === 0) {
    phi = 22 / 7;
  } else {
    phi = 3.14;
  }
  luas = phi * r * r;
  keling = 2 * phi * r;
  console.log(luas, keling);
};
area(7);
area(14);
area(21);
