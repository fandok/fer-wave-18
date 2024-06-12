// versi tanpa callaback
// function kuadratAsync(x) {
//   setTimeout(() => x * x, 100);
// }

// console.log(kuadratAsync(5));

// versi callback
function kuadratAsync(x, callback) {
  setTimeout(() => callback(x * x), 100);
}

kuadratAsync(5, console.log);
