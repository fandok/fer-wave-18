const pelajar = [
  { id: 1, nama: "Budi" },
  { id: 2, nama: "Agus" },
  { id: 3, nama: "Sheila" },
  { id: 4, nama: "Jessica" },
  { id: 5, nama: "John" },
];

// Tujuannya, ingin mendapatkan data nama pelajar
const nama_pelajar = pelajar.map((data) => data.nama);
console.log(nama_pelajar); // [ 'Budi', 'Agus', 'Sheila','Jessica', 'John' ]

console.log("----------");

const pelajar2 = [
  { id: 1, nama_depan: "Budi", nama_belakang: "Cahyono" },
  { id: 2, nama_depan: "Agus", nama_belakang: "Kurniawan" },
  { id: 3, nama_depan: "Sheila", nama_belakang: "Andriani" },
  { id: 4, nama_depan: "Jessica", nama_belakang: "Lutfiana" },
  { id: 5, nama_depan: "Erwin", nama_belakang: "Setiadi" },
];

// Tujuannya, ingin mendapatkan nama lengkap pelajar yang merupakan gabungan dari nama_depan dan nama_belakang
const nama_lengkap_pelajar = pelajar2.map((data) => {
  return data.nama_depan + " " + data.nama_belakang;
});

console.log(nama_lengkap_pelajar); // [ 'Budi Cahyono', 'Agus Kurniawan', 'Sheila Andriani', 'Jessica Lutfiana', 'Erwin Setiadi']

// const pelajar2_filtered = pelajar2.filter((val) => val.id > 2);
// const nama_lengkap_pelajar = pelajar2_filtered.map((data) => {
//   return data.nama_depan + " " + data.nama_belakang;
// });
// const nama_lengkap_pelajar = pelajar2
//   .filter((val) => val.id > 2)
//   .map((data) => {
//     return data.nama_depan + " " + data.nama_belakang;
//   });

const arrayAngka = [1, 2, 3, 4, 5];
const arrayAngkaNew = arrayAngka.map((value) => {
  return value % 2 === 0 ? "genap" : "ganjil";
});

console.log(arrayAngkaNew);

const arrayPelajar = [
  { id: 1, nama_depan: "Budi", nama_belakang: "Cahyono", gender: "laki-laki" },
  {
    id: 2,
    nama_depan: "Agus",
    nama_belakang: "Kurniawan",
    gender: "laki-laki",
  },
  {
    id: 3,
    nama_depan: "Sheila",
    nama_belakang: "Andriani",
    gender: "perempuan",
  },
  {
    id: 4,
    nama_depan: "Jessica",
    nama_belakang: "Lutfiana",
    gender: "perempuan",
  },
  { id: 5, nama_depan: "Erwin", nama_belakang: "Setiadi", gender: "laki-laki" },
];

const arrayPelajarBaru = arrayPelajar.map(
  (value) => value.id + "," + value.gender
);

console.log(arrayPelajarBaru);
