// const os = require("os");
// const luasSegitiga = require("./segitiga");
import os from "os";
import luas from "./segitiga.js";
import chalk from "chalk";
import currencyFormatter from "currency-formatter";

console.log("Free memory", os.freemem());

console.log(luas.luasSegitiga(3, 4));
console.log(luas.luasKotak(4, 5));

console.log(chalk.red("Hello world!"));

console.log(currencyFormatter.format(1000000, { code: "USD" }));
