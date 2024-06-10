function sum(a, b) {
  return a + b;
}

let result = sum(100, 20000);
// alert(result); // 3

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

// let age = prompt("How old are you?", 18);

// const isGranted = checkAge(age);
// console.log(isGranted);

// if (isGranted) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert(i); // bilangan prima
//   }
// }

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // bilangan prima
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

showPrimes(10);
