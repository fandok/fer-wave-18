const kalimat = "Aku sedang belajar searching algorithm";
const kalimatArray = ["Aku", "sedang", "belajar"];

const indeks1 = kalimat.indexOf("searching algorithm");
console.log(indeks1);

const indeks2 = kalimat.indexOf("kata ini tidak ada");
console.log(indeks2);

const return1 = kalimat.includes("searching algorithm");
console.log(return1);

const return2 = kalimat.includes("kata ini tidak ada");
console.log(return2);

const search1 = kalimat.search(/SeArChInG AlGoRiThM/);
console.log(search1);

const search2 = kalimat.search(/SeArChInG AlGoRiThM/i);
console.log(search2);

// const number = "10000000";
// const millions = number.substring(0, 2);
// const thousands = number.substring(2, 5);
// const hundreds = number.substring(5);
// console.log("Rp" + millions + "." + thousands + "." + hundreds);
