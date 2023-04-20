const PromptSync = require("prompt-sync"); //dari npm
const Person = require("./person");
const prompt = PromptSync();

const p = new Person();
const nama = prompt("Inputkan Nama : ");
p.setNama(nama);
const kelas = prompt("inputkan kelas : ");
p.setKelas(kelas);
const nim = prompt("inputkan nim : ");
p.setNim(nim);

console.log("Nama : ", nama, "kelas : ", kelas, "nim : ", nim);
