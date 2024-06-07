function sum(a, b) {
  return a + b;
}

const sumAlt = (a, b) => {
  return a + b;
};

// console.log(sum(2, 3));
// console.log(sumAlt(2, 3));

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

const checkAge = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
};
