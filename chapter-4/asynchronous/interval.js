let a = 0;

const iniInterval = setInterval(() => {
  console.log(`${++a} kali jalan`);
  if (a === 10) clearInterval(iniInterval);
}, 100);

console.log("apakah aku jalan duluan?");
