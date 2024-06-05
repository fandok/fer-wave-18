const angka = [1, 2, 3, 4, 5];

const total = angka.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  5
);

// iterasi pertama
// 1: previous value 5, current value 1, function dijalanin: 5 +1 = 6
// 2: previous value 6, current value 2, function dijalanin: 6 + 2 = 8;
// 3: previouse value 8, currentvalue 3, function dijalanin: 8 + 3 = 11;
// ... seterusnya sampai 5

console.log(total);

console.log("------");

const hasil = [
  {
    pelajaran: "Fisika",
    nilai: 87,
  },
  {
    pelajaran: "Kimia",
    nilai: 64,
  },
  {
    pelajaran: "Matematika",
    nilai: 73,
  },
];

const total_nilai = hasil.reduce((acc, curr) => {
  console.log(acc);
  return acc + curr.nilai;
}, 0);

console.log(total_nilai);
