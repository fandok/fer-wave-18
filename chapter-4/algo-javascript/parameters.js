function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

function showAnotherMessage(from, text) {
  from = "*" + from + "*"; // membuat "from" terlihat lebih indah

  alert(from + ": " + text);
}

let from = "Ann";

// showAnotherMessage(from, "Hello"); // *Ann*: Hallo

// Nilai dari "from" adalah sama, fungsi melakukan perubahan pada variabel lokal
// alert(from); // Ann

function showMessageWithoutParam(from, text = "no text given") {
  alert(from + ": " + text);
}

// showMessageWithoutParam("Ann"); // Ann: tidak diberikan teks

function convertCurrency(nominal, currency = "$") {
  console.log(currency + " " + nominal);
}

convertCurrency(1000000, "Rp");
convertCurrency(1000000);
