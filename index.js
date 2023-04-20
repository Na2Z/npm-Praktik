const PromptSync = require("prompt-sync"); //dari npm
// const greattings = require("./hello.js"); //dari projet
// const { greattings } = require("./hello.js"); //masih error

const mtk = require("./mtk.js");

const prompt = PromptSync();
// const n = prompt("siapa namamu? ");
console.log("jumlah, kurang, bagi, kali dan pangkat");
const op = prompt("mau operasi apa? ");
const angka1 = parseInt(prompt("masukan angka pertama : "));
const angka2 = parseInt(prompt("masukan angka kedua : "));

if (op == "jumlah") {
  hasil = mtk.jumlah(angka1, angka2);
} else if (op == "kurang") {
  hasil = mtk.kurang(angka1, angka2);
} else if (op == "kali") {
  hasil = mtk.kali(angka1, angka2);
} else if (op == "bagi") {
  hasil = mtk.bagi(angka1, angka2);
} else if (op == "pangkat") {
  hasil = mtk.pangkat(angka1, angka2);
} else {
  console.log("pilihan tidak tersedia");
}

console.log("hasilnya ialah : ", hasil);

// greattings(n);
