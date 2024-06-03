// contoh replaceall

const no_telp = "021 255 323";
// const updated_no_telp = no_telp.replaceAll(" ", "-");
const updated_no_telp = no_telp.replace(/ /g, "-");
console.log(updated_no_telp); // 021-255-323

console.log("-------");

// contoh substring

const url_binar = "https://binaracademy.com";
// const updated_url_binar = url_binar.substring(8, url_binar.length);
// const updated_url_binar = url_binar.substring(8, 20);
const updated_url_binar = url_binar.substring(8);
console.log(updated_url_binar);

console.log("-------");

// contoh lowercase uppercase

const frontend = "FrOnT eNd";
const frontend_kecil = frontend.toLowerCase();
const frontend_kapital = frontend.toUpperCase();

console.log(frontend_kecil);
console.log(frontend_kapital);

console.log("-------");

// contoh trim

const nama_dari_user_input = "        Sabrina Binar           ";
const validasi_nama_user = nama_dari_user_input.trim();

console.log(validasi_nama_user);
