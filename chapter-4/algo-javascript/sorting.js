// contoh sorting
const data = [5, 3, 2, 9, 8];
console.log(data);
data.sort();
// contoh descending: data.sort((a,b) => b-a);
console.log(data);

console.log("-------");
const data2 = [40, 65, 25, 100, 250];
console.log(data2);
data2.sort((a, b) => a - b);
console.log(data2);

console.log("-------");

const rows = [
  {
    id: 1,
    name: "Sabrina",
    age: 36,
    is_manager: true,
    start_date: "02-28-2019",
  },
  {
    id: 2,
    name: "Gun",
    age: 40,
    is_manager: true,
    start_date: "03-05-2017",
  },
  {
    id: 3,
    name: "Jimi Jamet",
    age: 39,
    is_manager: false,
    start_date: "07-12-2021",
  },
];

rows.sort((a, b) => b.id - a.id);

const managers = rows.filter((row) => {
  return row.age < 38;
});

console.log(managers);
