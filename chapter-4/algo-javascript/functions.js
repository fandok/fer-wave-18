function showMessage() {
  alert("Hello everyone!");
}

// showMessage();
// showMessage();

function showLocalMessage() {
  let message = "Hello, I'm JavaScript!"; // variabel lokal

  alert(message);
}

// showLocalMessage();

let userName = "John";

function showOutMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

// showOutMessage(); // Halo, John

let userNameFull = "John";

function showMessageChanged() {
  userNameFull = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userNameFull;
  alert(message);
}

// alert(userNameFull); // John sebelum pemanggilan fungsi

// showMessageChanged();

// alert(userNameFull); // Bob, nilai dimodifikasi oleh fungsi

let userNameOuter = "John";

function showAnotherMessage() {
  let userNameOuter = "Bob"; // deklarasikan lokal variabel

  let message = "Hello, " + userNameOuter; // Bob
  alert(message);
}

// fungsi akan membuat dan menggunakan userName dirinya sendiri
showAnotherMessage();

alert(userNameOuter); // John, tidak berubah, fungsi tidak dapat mengakses variabel luar
